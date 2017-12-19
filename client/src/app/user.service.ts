import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  users = new BehaviorSubject([]);

  constructor(private _http: HttpClient, private _router: Router) {
      this.retrieveUsers();
  }

  retrieveUsers() {
      this._http.get('/users').subscribe((data: any[]) => {
        this.users.next(data);
      });
  }

  getUser(id, cb) {
      this._http.get('/users/' + id).subscribe((data) => {
          cb(data);
      });
  }

  login(user, cb) {
      this._http.post('/login', user).subscribe((res) => {
          cb();
      });
  }

  getSession(callback) {
      this._http.get('/getsession').subscribe((data) => {
        callback(data);
      });
  }

}
