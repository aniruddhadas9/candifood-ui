import {Component, Inject, Input, OnInit, Optional} from '@angular/core';
import { take, map } from 'rxjs/operators';
import { timer } from 'rxjs';
import {Alert, AlertService} from '../../services/alert/alert.service';
import {WebsiteEnvironment} from '../../website.module';

@Component({
  selector: 'cfs-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  @Input()
  public alerts: Array<Alert> = [];
  public delay: number;

  constructor(
    @Optional() @Inject('websiteEnvironment') private environment: WebsiteEnvironment,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.alertService.alerts.subscribe((alert: Alert) => {
      this.delay = (alert.closeDelay || this.environment.alertDelayInSeconds || 7) * 1000;
      // push it on to show
      this.alerts = this.alerts.concat(alert);

      // close the alert after 5 seconds by default
      // have to use timer -> map instead of delay because delay can't currently
      // be properly unit tested due to fakeAsync issues.
      timer(this.delay).pipe(take(1), map(() => alert)).subscribe((al) => this.closeAlert(al));
    });
  }

  public closeAlert(al: Alert) {
    const index: number = this.alerts.indexOf(al);
    this.alerts.splice(index, 1);
  }

}
