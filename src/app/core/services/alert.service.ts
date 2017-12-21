import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';

export interface Alert {
  title: string;
  subTitle: string;
  text: string;
  type: AlertType;
  closeDelay?: number;
}

export class SuccessAlert implements Alert {
  readonly type: AlertType;
  constructor (public title: string, public subTitle, public text, public closeDelay?: number) {
    this.type = 'success';
  }
}

export class InfoAlert implements Alert {
  readonly type: AlertType;
  constructor (public title: string, public subTitle, public text, public closeDelay?: number) {
    this.type = 'info';
  }
}
export class WarningAlert implements Alert {
  readonly type: AlertType;
  constructor (public title: string, public subTitle, public text, public closeDelay?: number) {
    this.type = 'warning';
  }
}
export class DangerAlert implements Alert {
  readonly type: AlertType;
  constructor (public title: string, public subTitle, public text, public closeDelay?: number) {
    this.type = 'danger';
  }
}

export type AlertType = 'success' | 'info' | 'warning' | 'danger';


@Injectable()
export class AlertService {

  private _alerts: ReplaySubject<Alert>;

  constructor() {
    this._alerts = new ReplaySubject();
   }

  /**
   * Sends a message to be seen globally.
   */
  public alert(m: Alert) {
    this._alerts.next(m);
  }

  get alerts(): Observable<Alert> {
    return this._alerts.asObservable();
  }
}
