import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListService {
  constructor(private _http: HttpClient) { }

  addItem(item, cb) {
    this._http.post('/items', item).subscribe((data) => {
        cb(data);
    });
  }

  retrieveItems(id, cb) {
    this._http.get(`/items/${id}`).subscribe((data) => {
        cb(data);
    });
  }

  toggleCheck(id, cb) {
      this._http.get(`/items/${id}/check`).subscribe((data) => {
        cb(data);
      });
  }

}
