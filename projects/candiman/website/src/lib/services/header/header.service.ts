import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private header: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }
}
