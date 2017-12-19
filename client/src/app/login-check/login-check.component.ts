import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-check',
  templateUrl: './login-check.component.html',
  styleUrls: ['./login-check.component.css']
})
export class LoginCheckComponent implements OnInit {

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
      this._userService.getSession((data) => {
        if (data.user) {
            this._router.navigate(['dashboard']);
        } else {
            this._router.navigate(['login']);
        }
      });
  }

}
