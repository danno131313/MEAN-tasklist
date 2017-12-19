import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    currRoute;

    constructor(private _router: Router) {
        this._router.events.subscribe((data) => {
            if (data instanceof NavigationEnd) {
                this.currRoute = data.url;
            }
        });
    }
}
