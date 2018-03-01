webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_check_login_check_component__ = __webpack_require__("../../../../../src/app/login-check/login-check.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__login_check_login_check_component__["a" /* LoginCheckComponent */] },
    { path: 'login', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'users/:id', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_4__user_user_component__["a" /* UserComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#navbar {\n  background: #ffdfc6;\n}\n\n#navbar a {\n  color: #d3762e;\n}\n\n#navbar .active.item {\n  border-bottom: 2px solid #d3762e;\n}\n\n.ui.button {\n  background: #d34b2e;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"navbar\" class=\"ui secondary pointing menu\" *ngIf=\"currRoute != '/login' && currRoute != '/'\">\n  <a class=\"active item\" [routerLink]=\"['dashboard']\">Home</a>\n  <div class=\"right menu\">\n    <a class=\"ui item\" href=\"/logout\">Logout</a>\n  </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_router) {
        var _this = this;
        this._router = _router;
        this._router.events.subscribe(function (data) {
            if (data instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                _this.currRoute = data.url;
            }
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_service__ = __webpack_require__("../../../../../src/app/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_check_login_check_component__ = __webpack_require__("../../../../../src/app/login-check/login-check.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_check_login_check_component__["a" /* LoginCheckComponent */],
                __WEBPACK_IMPORTED_MODULE_11__user_user_component__["a" /* UserComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__list_service__["a" /* ListService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n    font-size: .8em;\n    color: red;\n}\n\n#wrapper {\n  padding: 30px;\n  background: white;\n}\n\nform.ui.segment {\n  background: #6eb29a;\n  margin-bottom: 20px;\n}\n\n#wrapper form input.ui.button {\n  background: #ef8771;\n}\n\n#before {\n  font-size: 1.3em;\n  font-style: italic;\n  color: #d34b2e;\n}\n\nh2 {\n  background: #339271;\n  color: #9dcaba;\n  padding: 10px;\n}\n\n.completed {\n  text-decoration: line-through;\n}\n\n#list {\n  padding: 20px;\n  background: #efa771;\n  border-radius: .8em;\n}\n\n/*.listItem {\n  height: auto;\n  width: 60%;\n  border: 1px solid black;\n  margin-bottom: 15px;\n  padding: 10px;\n}\n\n.listItem p {\n}*/\n\n.itemTitle {\n  display: inline;\n  font-weight: bold;\n  font-size: 1.2em;\n}\n\n.itemDesc {\n  display: inline;\n}\n\n.itemDate {\n  display: block;\n  font-size: .8em;\n}\n\n.itemPoster {\n  font-weight: bold;\n}\n\n.taggedUser {\n  color: grey;\n  font-size: .8em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Welcome, {{ currUser.name }}!</h2>\n<div id=\"wrapper\">\n  <form class=\"ui segment form\" #itemForm=\"ngForm\" (submit)=\"onSubmit(); itemForm.reset()\" >\n    <div class=\"fields\">\n      <div class=\"four wide field\">\n        <input id=\"title\" type=\"text\" name=\"title\" required minlength=\"5\" placeholder=\"Title\" [(ngModel)]=\"listItem.title\" #title=\"ngModel\"/>\n      </div>\n      <div class=\"eight wide field\">\n        <input id=\"desc\" type=\"text\" name=\"description\" required minlength=\"10\" placeholder=\"Description\" [(ngModel)]=\"listItem.description\" #description=\"ngModel\"/>\n      </div>\n      <div class=\"four wide field\">\n        <select class=\"ui dropdown\" name=\"user\" [(ngModel)]=\"listItem.user\">\n          <option value=\"none\">None</option>\n          <option *ngFor=\"let user of users\" value=\"{{ user | json }}\">{{ user.name }}</option>\n        </select>\n      </div>\n    </div>\n    <p class=\"error\" *ngIf=\"title.errors && title.dirty\">* Title must be at least 5 characters</p>\n    <p class=\"error\" *ngIf=\"description.errors && description.dirty\">* Description must be at least 10 characters</p>\n    <input class=\"ui button\" type=\"submit\" value=\"Add to List\" [disabled]=\"title.errors || description.errors\" />\n  </form>\n\n  <div id=\"list\">\n    <p id=\"before\">Before I die I want to...</p>\n    <div class=\"listItem ui segment\" *ngFor=\"let item of items; let idx = index\">\n      <input type=\"checkbox\" [checked]=\"item.checked\" (click)=\"toggleCheck(item._id)\"/>\n      <p [ngClass]=\"{'completed': item.checked}\" class=\"itemTitle\">{{ item.title }}:</p>\n      <p class=\"itemDesc\">{{ item.description }}</p>\n      <p class=\"itemDate\">Created {{ item.createdAt | date: medium }} by <span class=\"itemPoster\">{{ item.poster.name }}</span>.</p>\n      <span class=\"taggedUser\" *ngIf=\"item.user\"> --tagged: {{ item.user.name }} </span>\n    </div>\n    <p>List of other users (Click to view profile):</p>\n    <div *ngFor=\"let user of users\">\n      <a [routerLink]=\"['/users', user._id]\">{{ user.name }}</a>\n    </div>\n  </div>\n</div>\n<script>\n  $('.ui.dropdown')\n    .dropdown()\n  ;\n</script>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_service__ = __webpack_require__("../../../../../src/app/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(_userService, _http, _listService) {
        this._userService = _userService;
        this._http = _http;
        this._listService = _listService;
        this.currUser = { _id: '' };
        this.users = [];
        this.listItem = { title: '', description: '', user: 'none' };
        this.items = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getSession(function (data) {
            _this.currUser = data.user;
            _this._userService.users.subscribe(function (users) {
                _this.users = users.filter(function (person) {
                    return person._id !== _this.currUser._id;
                });
            });
            _this._listService.retrieveItems(data.user._id, function (items) {
                _this.items = items;
            });
        });
    };
    DashboardComponent.prototype.onSubmit = function () {
        var _this = this;
        this._listService.addItem(this.listItem, function (data) {
            _this.listItem = { title: '', description: '', user: 'none' };
            _this._listService.retrieveItems(_this.currUser._id, function (items) {
                _this.items = items;
            });
        });
    };
    DashboardComponent.prototype.toggleCheck = function (id) {
        var _this = this;
        this._listService.toggleCheck(id, function (checkedItem) {
            _this._listService.retrieveItems(_this.currUser._id, function (items) {
                _this.items = items;
            });
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__list_service__["a" /* ListService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListService = (function () {
    function ListService(_http) {
        this._http = _http;
    }
    ListService.prototype.addItem = function (item, cb) {
        this._http.post('/items', item).subscribe(function (data) {
            cb(data);
        });
    };
    ListService.prototype.retrieveItems = function (id, cb) {
        this._http.get("/items/" + id).subscribe(function (data) {
            cb(data);
        });
    };
    ListService.prototype.toggleCheck = function (id, cb) {
        this._http.get("/items/" + id + "/check").subscribe(function (data) {
            cb(data);
        });
    };
    ListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ListService);
    return ListService;
}());



/***/ }),

/***/ "../../../../../src/app/login-check/login-check.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-check/login-check.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n    <h1>Checking login...</h1>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/login-check/login-check.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginCheckComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginCheckComponent = (function () {
    function LoginCheckComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    LoginCheckComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getSession(function (data) {
            if (data.user) {
                _this._router.navigate(['dashboard']);
            }
            else {
                _this._router.navigate(['login']);
            }
        });
    };
    LoginCheckComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-check',
            template: __webpack_require__("../../../../../src/app/login-check/login-check.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-check/login-check.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], LoginCheckComponent);
    return LoginCheckComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-top: 15%;\n  height: 100%;\n  background: #6eb29a;\n}\n\n#login-box {\n  padding: 40px 70px;\n  background: white;\n  border: 3px solid #1f8d66;\n}\n\n#login-box label {\n  color: #d34b2e;\n}\n\n#login-box .field input {\n  border: 1px solid lightgrey;\n}\n\n#login-box .field input:focus {\n  border: 1px solid lightblue;\n}\n\n#login-box .field input:hover {\n  border: 1px solid lightblue;\n}\n\nh1 {\n  font-size: 2.5em;\n  color: #d34b2e;\n  text-align: center;\n}\n\n.ui.button.primary {\n  background: #ef8771;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <div class=\"ui raised segment\" id=\"login-box\">\n    <h1>Bucket List</h1>\n    <form class=\"ui form\" (submit) = \"onSubmit()\">\n      <div class=\"field\">\n        <label>Name: </label>\n        <input type=\"text\" placeholder=\"Name\" name=\"name\" required minlength=\"2\" [(ngModel)]=\"user.name\" #name=\"ngModel\"/>\n      </div>\n      <input class=\"ui primary button\" type=\"submit\" value=\"Submit\" [disabled]=\"name.errors\"/>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.user = { name: '' };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.login(this.user, function () {
            _this.user.name = '';
            _this._router.navigate(['dashboard']);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.users = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.retrieveUsers();
    }
    UserService.prototype.retrieveUsers = function () {
        var _this = this;
        this._http.get('/users').subscribe(function (data) {
            _this.users.next(data);
        });
    };
    UserService.prototype.getUser = function (id, cb) {
        this._http.get('/users/' + id).subscribe(function (data) {
            cb(data);
        });
    };
    UserService.prototype.login = function (user, cb) {
        this._http.post('/login', user).subscribe(function (res) {
            cb();
        });
    };
    UserService.prototype.getSession = function (callback) {
        this._http.get('/getsession').subscribe(function (data) {
            callback(data);
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".listItem {\n  height: auto;\n  width: 60%;\n  border: 1px solid black;\n  margin-bottom: 15px;\n  padding: 10px;\n}\n\n.listItem p {\n}\n\n.itemTitle {\n  display: inline;\n  font-weight: bold;\n  font-size: 1.2em;\n}\n\n.itemDesc {\n  display: inline;\n}\n\n.itemDate {\n  display: block;\n  font-size: .8em;\n}\n\n.itemPoster {\n  font-weight: bold;\n}\n\n.taggedUser {\n  color: grey;\n  font-size: .8em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Bucket List</h2>\n<p>Done:</p>\n<div *ngFor=\"let item of items\">\n    <div class=\"listItem\" *ngIf=\"item.checked == true\">\n        <input type=\"checkbox\" *ngIf=\"item.user\" checked [disabled]=\"item.poster._id != currUser._id && item.user._id != currUser._id\" (click)=\"toggleCheck(item._id)\"/>\n        <input type=\"checkbox\" *ngIf=\"!item.user\" checked [disabled]=\"item.poster._id != currUser._id\" (click)=\"toggleCheck(item._id)\"/>\n        <p class=\"itemTitle\">{{ item.title }}:</p>\n        <p class=\"itemDesc\">{{ item.description }}</p>\n        <p class=\"itemDate\">Created {{ item.createdAt | date: medium }} by <span class=\"itemPoster\">{{ item.poster.name }}</span>.</p>\n        <span class=\"taggedUser\" *ngIf=\"item.user\"> --tagged: {{ item.user.name }} </span>\n    </div>\n</div>\n<p>Pending:</p>\n<div *ngFor=\"let item of items\">\n    <div class=\"listItem\" *ngIf=\"item.checked == false\">\n        <input type=\"checkbox\" *ngIf=\"item.user\" [disabled]=\"item.poster._id != currUser._id && item.user._id != currUser._id\" (click)=\"toggleCheck(item._id)\"/>\n        <input type=\"checkbox\" *ngIf=\"!item.user\" [disabled]=\"item.poster._id != currUser._id\" (click)=\"toggleCheck(item._id)\"/>\n        <p class=\"itemTitle\">{{ item.title }}:</p>\n        <p class=\"itemDesc\">{{ item.description }}</p>\n        <p class=\"itemDate\">Created {{ item.createdAt | date: medium }} by <span class=\"itemPoster\">{{ item.poster.name }}</span>.</p>\n        <span class=\"taggedUser\" *ngIf=\"item.user\"> --tagged: {{ item.user.name }} </span>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_service__ = __webpack_require__("../../../../../src/app/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(_userService, _listService, _route) {
        this._userService = _userService;
        this._listService = _listService;
        this._route = _route;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            var id = params.get('id');
            _this._userService.getUser(id, function (data) {
                _this.user = data;
                _this._listService.retrieveItems(_this.user._id, function (items) {
                    _this.items = items;
                });
            });
        });
        this._userService.getSession(function (data) {
            _this.currUser = data.user;
        });
    };
    UserComponent.prototype.toggleCheck = function (id) {
        var _this = this;
        this._listService.toggleCheck(id, function () {
            _this._listService.retrieveItems(_this.user._id, function (items) {
                _this.items = items;
            });
        });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__list_service__["a" /* ListService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map