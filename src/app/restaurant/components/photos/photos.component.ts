import {Component, Input, OnInit} from '@angular/core';
import {NgbCarousel, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'cfs-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  providers: [NgbCarousel]
})
export class PhotosComponent implements OnInit {
  @Input() photos: string;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  constructor(public ngbCarousel: NgbCarousel) {
  }

  ngOnInit() {
  }

}
