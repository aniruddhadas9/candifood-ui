import { Component, Input, OnInit } from '@angular/core';
import { take, map } from 'rxjs/operators';
import { timer } from 'rxjs/observable/timer';
import {Alert, AlertService} from '../../services/alert.service';
import {ConfigService} from '../../services/config.service';

@Component({
  selector: 'cfs-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  @Input()
  public alerts: Array<Alert> = [];
  public delay: number;

  constructor(private alerter: AlertService, private app: ConfigService) { }

  ngOnInit() {
    this.alerter.alerts.subscribe((a: Alert) => {
      this.delay = (a.closeDelay || this.app.config.alertDelayInSeconds) * 1000;
      // push it on to show
      this.alerts = this.alerts.concat(a);

      // close the alert after 5 seconds by default
      // have to use timer -> map instead of delay because delay can't currently
      // be properly unit tested due to fakeAsync issues.
      timer(this.delay).pipe(take(1), map(() => a)).subscribe((al) => this.closeAlert(al));
    });
  }

  public closeAlert(al: Alert) {
    const index: number = this.alerts.indexOf(al);
    this.alerts.splice(index, 1);
  }

}
