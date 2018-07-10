import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cfs-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  @Input() reviews: string;
  constructor() { }

  ngOnInit() {
  }

}
