import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MapService} from '../../services/map.service';
import {faStreetView, faUtensilSpoon} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'cfs-change-location-model',
  templateUrl: './change-location-model.component.html',
  styleUrls: ['./change-location-model.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChangeLocationModelComponent implements OnInit {

  public searchForm: FormGroup;

  @ViewChild('search')
  public searchElementRef: ElementRef;
  public searchControl: FormControl;

  @Input() input: any;
  @Output() output = new EventEmitter<string>();

  constructor(
    public activeModal: NgbActiveModal,
    private mapService: MapService,
  ) {
    // add fontawesome icons to use
    library.add(faStreetView, faUtensilSpoon);
    this.searchForm = new FormGroup({
      term: new FormControl('', [Validators.required]),
    });

  }

  ngOnInit() {
    // create search FormControl
    this.searchControl = new FormControl();
    this.mapService.autoComplete(this.searchElementRef, this.output);
  }

  onSubmit() {
    if (this.searchForm.valid) {
    }
  }
}
