import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'cfs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  loading: boolean;
  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
  }

  makeLogout() {
    this.userService.makeLogout();
  }
}
