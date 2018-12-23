import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {faStreetView, faUtensilSpoon} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

export interface Link {
  label: string;
  url: string;
  hidden: boolean;
}

export interface Logo {
  imageInAsset: string;
  width?: string | number;
  height?: string | number;
  alt?: string;
  style?: Object | any;
}

export interface Brand {
  label: string;
  url: string;
  logo: Logo;
  style?: Object | any;
}

export interface Header {
  brand: Brand;
  links: {
    leftLinks: Array<Link>;
    rightLinks: Array<Link>;
    style?: Object | any;
  };
  middleButton?: {
    display: boolean;
    label: string;
    loading: boolean;
    style?: Object | any;
  };
  style?: Object | any;
}

@Component({
  selector: 'cfs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  @Input() header: Header;
  @Input() middleButton: { display: boolean, label: string, loading: boolean };
  @Output() middleButtonClick = new EventEmitter<string>();

  public isCollapsed = true;
  public location: any = [];
  public searchForm: FormGroup;
  private term: AbstractControl;
  public loading: boolean;
  public modalRef;

  constructor() {
    library.add(faStreetView, faUtensilSpoon);

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
