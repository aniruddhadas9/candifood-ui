/*
* Copyright 2018 herd-ui contributors
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import {Component, Input, ElementRef, OnChanges, ChangeDetectorRef} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'cfs-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})

export class ReadMoreComponent implements OnChanges {
  @Input() text: string;
  @Input() maxLength = 100;
  @Input() hideLink: boolean;
  @Input() linkLabel: string;
  public currentText: string;
  public hideToggle = true;

  public isCollapsed = true;

  constructor(private changeDetectorRef: ChangeDetectorRef,) {
  }

  toggleView() {
    this.isCollapsed = !this.isCollapsed;
    this.determineView();
    this.changeDetectorRef.detectChanges();
  }

  determineView() {
    if (this.text.length <= this.maxLength) {
      this.currentText = this.text;
      this.isCollapsed = false;
      this.hideToggle = true;
      return;
    }
    this.hideToggle = false;
    if (this.isCollapsed === true) {
      this.currentText = this.text.substring(0, this.maxLength);
      this.currentText = this.currentText.split('</br>')[0];
      this.currentText += (this.hideLink) ? '...' : '';
    } else if (this.isCollapsed === false) {
      this.currentText = this.text;
    }

  }

  ngOnChanges() {
    this.determineView();
  }
}