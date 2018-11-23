import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class AppService {

  public position: Observable<Position>;
  public location: Observable<Location>;
  public restaurants: any;

  constructor() { }

}
