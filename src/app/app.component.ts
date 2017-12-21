import {Component} from '@angular/core';
import {UserService} from './core/services/user.service';

@Component({
  selector: 'cfs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cfs';

  constructor(public userService: UserService) {

  }
}
