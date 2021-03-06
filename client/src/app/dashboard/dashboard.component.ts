import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ListService } from '../list.service';
import { HttpClient } from '@angular/common/http';
import * from 'semantic-ui';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currUser = {_id: ''};
  users = [];
  listItem = {title: '', description: '', user: 'none'};
  items = [];

  constructor(private _userService: UserService, private _http: HttpClient, private _listService: ListService) { }

  ngOnInit() {
      $(document).ready(function() {
          $('.ui.dropdown').dropdown();
      });

      this._userService.getSession((data) => {
        this.currUser = data.user;
        this._userService.users.subscribe((users) => {
            this.users = users.filter((person) => {
                return person._id !== this.currUser._id;
            });
        });
        this._listService.retrieveItems(data.user._id, (items) => {
            this.items = items.reverse();
        });
      });
  }

  onSubmit() {
    this._listService.addItem(this.listItem, (data) => {
        this.listItem = {title: '', description: '', user: 'none'};
        this._listService.retrieveItems(this.currUser._id, (items) => {
            this.items = items.reverse();
        });
    });
  }

  toggleCheck(id) {
      this._listService.toggleCheck(id, (checkedItem) => {
        this._listService.retrieveItems(this.currUser._id, (items) => {
            this.items = items.reverse();
        });
      });
  }

}
