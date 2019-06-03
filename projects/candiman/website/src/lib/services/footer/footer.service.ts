import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private footer: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() { }
}
