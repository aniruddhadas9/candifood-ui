import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {faStreetView, faUtensilSpoon} from '@fortawesome/free-solid-svg-icons';
import {Brand, Header, HeaderService, Link, Logo, MiddleButton} from '../../services/header/header.service';
import {Subject} from 'rxjs';


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

  faStreetView = faStreetView;
  faUtensilSpoon = faUtensilSpoon;

  constructor(private headerService: HeaderService) {

    this.searchForm = new FormGroup({
      term: new FormControl('', [Validators.required]),
    });
    this.term = this.searchForm.controls['term'];

    // subscribe to the header object
    this.headerService.header.subscribe((header: Header) => {
      this.header = header;
    });

    this.headerService.leftLinks.subscribe((lefLinks: Array<Link>) => {
      this.header.links.leftLinks = lefLinks;
    });
    this.headerService.rightLinks.subscribe((rightLinks: Array<Link>) => {
      this.header.links.rightLinks = rightLinks;
    });
    this.headerService.middleButton.subscribe((middleButton1: MiddleButton) => {
      this.header.middleButton = middleButton1;
    });
    this.headerService.logo.subscribe((logo: Logo) => {
      this.header.brand.logo = logo;
    });
    this.headerService.brand.subscribe((brand: Brand) => {
      this.header.brand = brand;
    });

  }

  ngOnInit() {
    this.header = {
      brand: {
        label: 'Website',
        url: '/',
        logo: null,
        style: null
      },
      links: {
        rightLinks: null,
        leftLinks: null,
        style: null
      },
      middleButton: null,
      style: null
    };
  }

  open() {
    this.middleButtonClick.emit('click');
  }


}
