import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {faStreetView, faUtensilSpoon} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import {Header, HeaderService} from "../../services/header/header.service";


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

  constructor(private headerService: HeaderService) {
    library.add(faStreetView, faUtensilSpoon);

    this.searchForm = new FormGroup({
      term: new FormControl('', [Validators.required]),
    });
    this.term = this.searchForm.controls['term'];

    // subscribe to the header object
    this.headerService.header.subscribe( (header: Header) => {
      this.header = header;
    })
  }

  ngOnInit() {
  }

  open() {
    this.middleButtonClick.emit('click');
  }

}
