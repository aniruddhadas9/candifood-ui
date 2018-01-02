import {Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MapsAPILoader} from '@agm/core';
import {MapService} from '../../services/map.service';

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


  @Input('input') input: boolean;
  @Output('output') output = new EventEmitter<string>();

  constructor(public activeModal: NgbActiveModal,
              private mapService: MapService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
    this.searchForm = new FormGroup({
      term: new FormControl('', [Validators.required]),
    });

  }

  ngOnInit() {

    // create search FormControl
    this.searchControl = new FormControl();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {

      const autoComplete = new (<any>window).google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });

      autoComplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place = autoComplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          // send changed address back
          this.output.emit(place);
        });
      });
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
    }
  }
}
