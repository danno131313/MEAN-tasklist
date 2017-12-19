import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ListService } from '../list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  currUser;
  items;
  user;
  constructor(private _userService: UserService, private _listService: ListService, private _route: ActivatedRoute) { }

  ngOnInit() {
      this._route.paramMap.subscribe(params => {
          const id = params.get('id');
          this._userService.getUser(id, (data) => {
              this.user = data;
              this._listService.retrieveItems(this.user._id, (items) => {
                this.items = items;
              });
          });
      });

      this._userService.getSession((data) => {
        this.currUser = data.user;
      });
  }

  toggleCheck(id) {
      this._listService.toggleCheck(id, () => {
        this._listService.retrieveItems(this.user._id, (items) => {
            this.items = items;
        });
      });
  }

}
