import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {faStreetView} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'cfs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  @Input() logo;
  @Input() brand: { label: string, url: string };
  @Input() leftLinks: Array<{ label: string, url: string, display: boolean }>;
  @Input() rightLinks: Array<{ label: string, url: string, display: boolean }>;
  @Input() middleButton: { display: boolean, label: string };
  @Output() middleButtonClick = new EventEmitter<string>();

  public isCollapsed = true;
  public location: any = [];
  public searchForm: FormGroup;
  private term: AbstractControl;
  public loading: boolean;
  public modalRef;

  constructor() {
    // add fontawesome icons to use
    library.add(faStreetView);

    this.searchForm = new FormGroup({
      term: new FormControl('', [Validators.required]),
    });
    this.term = this.searchForm.controls['term'];
  }

  ngOnInit() {
  }

  open() {
    this.middleButtonClick.emit('click');
  }

}
