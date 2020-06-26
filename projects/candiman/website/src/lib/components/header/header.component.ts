import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {faStreetView, faUtensilSpoon} from '@fortawesome/free-solid-svg-icons';
import {Brand, Header, HeaderService, Link, Logo, MiddleButton} from '../../services/header/header.service';
import {Subscribable, Subscription} from 'rxjs';


@Component({
  selector: 'cfs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges, OnDestroy {

  private subscriptions: Array<Subscription> = [];
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
    this.subscriptions.push(this.headerService.header.asObservable().subscribe((header: Header) => {
      console.log('headerService.header.subscribe|%o', header);
      this.header = header;
      this.headerService.headerChanged.next(header);
    }));

    this.subscriptions.push(this.headerService.leftLinks.asObservable().subscribe((leftLinks: Array<Link>) => {
      console.log('headerService.leftLinks.subscribe|%o', leftLinks);
      this.header.links.leftLinks = leftLinks;
      this.headerService.headerChanged.next({ links: {leftLinks: leftLinks}});
    }));
    this.subscriptions.push(this.headerService.rightLinks.asObservable().subscribe((rightLinks: Array<Link>) => {
      console.log('headerService.rightLinks.subscribe|%o', rightLinks);
      this.header.links.rightLinks = rightLinks;
      this.headerService.headerChanged.next({ links: {rightLinks: rightLinks}});
    }));
    this.subscriptions.push(this.headerService.middleButton.asObservable().subscribe((middleButton1: MiddleButton) => {
      console.log('headerService.middleButton.subscribe|%o', middleButton1);
      this.header.middleButton = middleButton1;
      this.headerService.headerChanged.next({ middleButton: middleButton1});
    }));
    this.subscriptions.push(this.headerService.logo.asObservable().subscribe((logo: Logo) => {
      this.header.brand.logo = logo;
      this.headerService.headerChanged.next({ brand: {logo: logo}});
    }));
    this.subscriptions.push(this.headerService.brand.subscribe((brand: Brand) => {
      this.header.brand = brand;
      this.headerService.headerChanged.next({ brand: brand});
    }));

  }

  ngOnInit() {
    console.log('HeaderComponent|ngOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('HeaderComponent|ngOnChanges|changes:%o', changes);
  }

  ngOnDestroy(): void {
    console.log('HeaderComponent|ngOnDestroy');
    this.subscriptions.forEach( (subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  open() {
    this.middleButtonClick.emit('click');
  }


}
