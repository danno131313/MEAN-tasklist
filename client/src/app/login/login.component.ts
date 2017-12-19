import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currUser;
  user = {name: ''};

  constructor(private _userService: UserService, private _router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this._userService.login(this.user, () => {
        this.user.name = '';
        this._router.navigate(['dashboard']);
    });
  }
}
