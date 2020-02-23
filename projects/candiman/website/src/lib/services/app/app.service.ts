import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public position: Observable<Position>;
  public location: Observable<Location>;
  public restaurants: any;

  constructor() { }

}
