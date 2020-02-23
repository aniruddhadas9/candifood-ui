import {Component, OnInit} from '@angular/core';
import {HeaderService} from '@candiman/website';

@Component({
  selector: 'cfs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(headerService: HeaderService) {
    headerService.headerChanged.asObservable().subscribe((data: any) => {
      console.log('header changed with data: %o', data);
    });
  }

  ngOnInit() {
  }

}
