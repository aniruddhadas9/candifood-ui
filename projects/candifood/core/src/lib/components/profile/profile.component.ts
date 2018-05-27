import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'cfs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  loading: boolean;
  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  logout() {
    this.userService.userAuthorizations = null;
  }
}
