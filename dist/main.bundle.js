webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/aside-left-display-disabled/index/index.module": [
		"../../../../../src/app/theme/pages/aside-left-display-disabled/index/index.module.ts",
		"index.module"
	],
	"./pages/default/inner/inner.module": [
		"../../../../../src/app/theme/pages/default/inner/inner.module.ts",
		"inner.module"
	],
	"./pages/default/not-found/not-found.module": [
		"../../../../../src/app/theme/pages/default/not-found/not-found.module.ts",
		"not-found.module"
	],
	"./pages/default/profile/profile.module": [
		"../../../../../src/app/theme/pages/default/profile/profile.module.ts",
		"profile.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/_directives/href-prevent-default.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrefPreventDefaultDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HrefPreventDefaultDirective = (function () {
    function HrefPreventDefaultDirective(el) {
        this.el = el;
    }
    HrefPreventDefaultDirective.prototype.ngAfterViewInit = function () {
    };
    HrefPreventDefaultDirective.prototype.preventDefault = function (event) {
        if (this.href.length === 0 || this.href === '#') {
            event.preventDefault();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HrefPreventDefaultDirective.prototype, "href", void 0);
    HrefPreventDefaultDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: "[href]",
            host: { '(click)': 'preventDefault($event)' },
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], HrefPreventDefaultDirective);
    return HrefPreventDefaultDirective;
}());



/***/ }),

/***/ "../../../../../src/app/_directives/unwrap-tag.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnwrapTagDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnwrapTagDirective = (function () {
    function UnwrapTagDirective(el) {
        this.el = el;
    }
    UnwrapTagDirective.prototype.ngAfterViewInit = function () {
        var nativeElement = this.el.nativeElement;
        __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].unwrapTag(nativeElement);
    };
    UnwrapTagDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: "[appunwraptag]",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], UnwrapTagDirective);
    return UnwrapTagDirective;
}());



/***/ }),

/***/ "../../../../../src/app/_services/script-loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptLoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ScriptLoaderService = (function () {
    function ScriptLoaderService() {
        this._scripts = [];
    }
    /**
     * @deprecated
     * @param tag
     * @param {string} scripts
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.load = function (tag) {
        var _this = this;
        var scripts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scripts[_i - 1] = arguments[_i];
        }
        scripts.forEach(function (src) {
            if (!_this._scripts[src]) {
                _this._scripts[src] = { src: src, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (src) { return promises.push(_this.loadScript(tag, src)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load list of scripts
     * @param tag
     * @param scripts
     * @param loadOnce
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.loadScripts = function (tag, scripts, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        scripts.forEach(function (script) {
            if (!_this._scripts[script]) {
                _this._scripts[script] = { src: script, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(tag, script, loadOnce)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load a single script
     * @param tag
     * @param {string} src
     * @param loadOnce
     * @returns {Promise<any>}
     */
    ScriptLoaderService.prototype.loadScript = function (tag, src, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        if (!this._scripts[src]) {
            this._scripts[src] = { src: src, loaded: false };
        }
        return new Promise(function (resolve, reject) {
            // resolve if already loaded
            if (_this._scripts[src].loaded && loadOnce) {
                resolve({ src: src, loaded: true });
            }
            else {
                // load script tag
                var scriptTag = __WEBPACK_IMPORTED_MODULE_1_jquery__('<script/>').
                    attr('type', 'text/javascript').
                    attr('src', _this._scripts[src].src);
                __WEBPACK_IMPORTED_MODULE_1_jquery__(tag).append(scriptTag);
                _this._scripts[src] = { src: src, loaded: true };
                resolve({ src: src, loaded: true });
            }
        });
    };
    ScriptLoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ScriptLoaderService);
    return ScriptLoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    //  { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
    //  { path: 'logout', component: LogoutComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Page loader -->\n<div class=\"m-page-loader m-page-loader--non-block\" style=\"margin-left: -80px; margin-top: -20px;\">\n\t<div class=\"m-blockui\">\n\t\t<span>\n\t\t\tPlease wait...\n\t\t</span>\n\t\t<span>\n\t\t\t<div class=\"m-loader m-loader--brand\"></div>\n\t\t</span>\n\t</div>\n</div>\n<!-- end::Page loader -->                      \t<!-- begin:: Page -->\n<router-outlet></router-outlet>\n<!-- end:: Page -->\n<!--begin::Base Scripts -->             \t    \t \t\t    \t \t\t\t\t<!--end::Base Scripts -->                       <!--begin::Page Vendors -->                                   <!--end::Page Vendors -->                                                              <!--begin::Page Snippets -->                                   <!--end::Page Snippets -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
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
        this._router = _router;
        this.title = 'app';
        this.globalBodyClass = 'm-page--loading-non-block m-page--wide m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (route) {
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(true);
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].bodyClass(_this.globalBodyClass);
            }
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(false);
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'body',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_component__ = __webpack_require__("../../../../../src/app/theme/theme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_layouts_layout_module__ = __webpack_require__("../../../../../src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_script_loader_service__ = __webpack_require__("../../../../../src/app/_services/script-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme_theme_routing_module__ = __webpack_require__("../../../../../src/app/theme/theme-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
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
                __WEBPACK_IMPORTED_MODULE_2__theme_theme_component__["a" /* ThemeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__theme_layouts_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__theme_theme_routing_module__["a" /* ThemeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__auth_auth_module__["a" /* AuthModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_script_loader_service__["a" /* ScriptLoaderService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/_directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" class=\"m-alert m-alert--outline alert alert-{{message.type}} alert-dismissible\" role=\"alert\">\r\n\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"></button>\r\n\t<span>{{message.text}}</span>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/_directives/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/auth/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(_alertService) {
        this._alertService = _alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-alert',
            template: __webpack_require__("../../../../../src/app/auth/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/auth/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return this._userService.verify().map(function (data) {
            if (data !== null) {
                // logged in so return true
                return true;
            }
            // error when verify so redirect to login page with the return url
            _this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }, function (error) {
            // error when verify so redirect to login page with the return url
            _this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/_helpers/fake-backend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mockBackEndFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fakeBackendProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http_testing__ = __webpack_require__("../../../http/esm5/testing.js");


function mockBackEndFactory(backend, options, realBackend) {
    // array in local storage for registered users
    var users = JSON.parse(localStorage.getItem('users')) || [];
    // fake token
    var token = 'fake-jwt-token';
    // configure fake backend
    backend.connections.subscribe(function (connection) {
        // wrap in timeout to simulate server api call
        setTimeout(function () {
            // authenticate
            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestMethod */].Post) {
                // get parameters from post request
                var params_1 = JSON.parse(connection.request.getBody());
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.email === params_1.email && user.password === params_1.password;
                });
                // default account
                if (params_1.email === 'demo@demo.com' && params_1.password === 'demo') {
                    filteredUsers[0] = {
                        fullName: 'Demo',
                        email: 'demo@demo.com',
                        password: 'demo',
                    };
                }
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({
                        status: 200,
                        body: {
                            id: user.id,
                            fullName: user.fullName,
                            email: user.email,
                            token: token
                        }
                    })));
                }
                else {
                    // else return 400 bad request
                    connection.mockError(new Error('Email or password is incorrect'));
                }
                return;
            }
            // get users
            if (connection.request.url.endsWith('/api/users') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestMethod */].Get) {
                // check for fake auth token in header and return users if valid, this security
                // is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 200, body: users })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 401 })));
                }
                return;
            }
            // get user by id
            if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestMethod */].Get) {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    // find user by id in users array
                    var urlParts = connection.request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) {
                        return user.id === id_1;
                    });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    // respond 200 OK with user
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 200, body: user })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 401 })));
                }
                return;
            }
            // create user
            if (connection.request.url.endsWith('/api/users') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestMethod */].Post) {
                // get new user object from post body
                var newUser_1 = JSON.parse(connection.request.getBody());
                // validation
                var duplicateUser = users.filter(function (user) {
                    return user.email === newUser_1.email;
                }).length;
                if (duplicateUser) {
                    return connection.mockError(new Error('Email "' + newUser_1.email + '" is already registered'));
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 200 })));
                return;
            }
            // delete user
            if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestMethod */].Delete) {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    // find user by id in users array
                    var urlParts = connection.request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 200 })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 401 })));
                }
                return;
            }
            // token verify
            if (connection.request.url.endsWith('/api/verify') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestMethod */].Get) {
                // check for fake auth token in header and return users if valid, this security
                // is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 200, body: { status: 'ok' } })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 401 })));
                }
                return;
            }
            // forgot password
            if (connection.request.url.endsWith('/api/forgot-password') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestMethod */].Post) {
                // get parameters from post request
                var params_2 = JSON.parse(connection.request.getBody());
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.email === params_2.email;
                });
                if (filteredUsers.length) {
                    // in real world, if email is valid, send email change password link
                    var user = filteredUsers[0];
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 200 })));
                }
                else {
                    // else return 400 bad request
                    connection.mockError(new Error('User with this email does not exist'));
                }
                return;
            }
            // pass through any requests not handled above
            var realHttp = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */](realBackend, options);
            var requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* RequestOptions */]({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe(function (response) {
                connection.mockRespond(response);
            }, function (error) {
                connection.mockError(error);
            });
        }, 500);
    });
    return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */](backend, options);
}
var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */],
    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http_testing__["a" /* MockBackend */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* BaseRequestOptions */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["k" /* XHRBackend */]],
    useFactory: mockBackEndFactory
};


/***/ }),

/***/ "../../../../../src/app/auth/_helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fake_backend__ = __webpack_require__("../../../../../src/app/auth/_helpers/fake-backend.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fake_backend__["a"]; });



/***/ }),

/***/ "../../../../../src/app/auth/_helpers/login-custom.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginCustom; });
var LoginCustom = (function () {
    function LoginCustom() {
    }
    LoginCustom.handleSignInFormSubmit = function () {
        $('#m_login_signin_submit').click(function (e) {
            var form = $(e.target).closest('form');
            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true,
                    },
                    password: {
                        required: true,
                    },
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    LoginCustom.displaySignUpForm = function () {
        var login = $('#m_login');
        login.removeClass('m-login--forget-password');
        login.removeClass('m-login--signin');
        login.addClass('m-login--signup');
        login.find('.m-login__signup').animateClass('flipInX animated');
    };
    LoginCustom.displaySignInForm = function () {
        var login = $('#m_login');
        login.removeClass('m-login--forget-password');
        login.removeClass('m-login--signup');
        try {
            $('form').data('validator').resetForm();
        }
        catch (e) {
        }
        login.addClass('m-login--signin');
        login.find('.m-login__signin').animateClass('flipInX animated');
    };
    LoginCustom.displayForgetPasswordForm = function () {
        var login = $('#m_login');
        login.removeClass('m-login--signin');
        login.removeClass('m-login--signup');
        login.addClass('m-login--forget-password');
        login.find('.m-login__forget-password').animateClass('flipInX animated');
    };
    LoginCustom.handleFormSwitch = function () {
        $('#m_login_forget_password').click(function (e) {
            e.preventDefault();
            LoginCustom.displayForgetPasswordForm();
        });
        $('#m_login_forget_password_cancel').click(function (e) {
            e.preventDefault();
            LoginCustom.displaySignInForm();
        });
        $('#m_login_signup').click(function (e) {
            e.preventDefault();
            LoginCustom.displaySignUpForm();
        });
        $('#m_login_signup_cancel').click(function (e) {
            e.preventDefault();
            LoginCustom.displaySignInForm();
        });
    };
    LoginCustom.handleSignUpFormSubmit = function () {
        $('#m_login_signup_submit').click(function (e) {
            var btn = $(e.target);
            var form = $(e.target).closest('form');
            form.validate({
                rules: {
                    fullname: {
                        required: true,
                    },
                    email: {
                        required: true,
                        email: true,
                    },
                    password: {
                        required: true,
                    },
                    rpassword: {
                        required: true,
                    },
                    agree: {
                        required: true,
                    },
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    LoginCustom.handleForgetPasswordFormSubmit = function () {
        $('#m_login_forget_password_submit').click(function (e) {
            var btn = $(e.target);
            var form = $(e.target).closest('form');
            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true,
                    },
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    LoginCustom.init = function () {
        LoginCustom.handleFormSwitch();
        LoginCustom.handleSignInFormSubmit();
        LoginCustom.handleSignUpFormSubmit();
        LoginCustom.handleForgetPasswordFormSubmit();
    };
    return LoginCustom;
}());



/***/ }),

/***/ "../../../../../src/app/auth/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(_router) {
        var _this = this;
        this._router = _router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        _router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'danger', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (email, password) {
        return this.http.post('/api/authenticate', JSON.stringify({ email: email, password: password }))
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("../../../../../src/app/auth/_services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/auth/_services/authentication.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/auth/_services/user.service.ts");
/* unused harmony namespace reexport */





/***/ }),

/***/ "../../../../../src/app/auth/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
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
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.verify = function () {
        return this.http.get('/api/verify', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.forgotPassword = function (email) {
        return this.http.post('/api/forgot-password', JSON.stringify({ email: email }), this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getAll = function () {
        return this.http.get('/api/users', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/api/users', user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({ headers: headers });
        }
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth-routing.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__auth_component__["a" /* AuthComponent */] },
];
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]],
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_script_loader_service__ = __webpack_require__("../../../../../src/app/_services/script-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/auth/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/auth/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/auth/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_alert_component__ = __webpack_require__("../../../../../src/app/auth/_directives/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_login_custom__ = __webpack_require__("../../../../../src/app/auth/_helpers/login-custom.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthComponent = (function () {
    function AuthComponent(_router, _script, _userService, _route, _authService, _alertService, cfr) {
        this._router = _router;
        this._script = _script;
        this._userService = _userService;
        this._route = _route;
        this._authService = _authService;
        this._alertService = _alertService;
        this.cfr = cfr;
        this.model = {};
        this.loading = false;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.model.remember = true;
        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this._router.navigate([this.returnUrl]);
        this._script.loadScripts('body', [
            'assets/vendors/base/vendors.bundle.js',
            'assets/demo/demo2/base/scripts.bundle.js'
        ], true).then(function () {
            __WEBPACK_IMPORTED_MODULE_8__helpers__["a" /* Helpers */].setLoading(false);
            __WEBPACK_IMPORTED_MODULE_7__helpers_login_custom__["a" /* LoginCustom */].init();
        });
    };
    AuthComponent.prototype.signin = function () {
        var _this = this;
        this.loading = true;
        this._authService.login(this.model.email, this.model.password).subscribe(function (data) {
            _this._router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.showAlert('alertSignin');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.signup = function () {
        var _this = this;
        this.loading = true;
        this._userService.create(this.model).subscribe(function (data) {
            _this.showAlert('alertSignin');
            _this._alertService.success('Thank you. To complete your registration please check your email.', true);
            _this.loading = false;
            __WEBPACK_IMPORTED_MODULE_7__helpers_login_custom__["a" /* LoginCustom */].displaySignInForm();
            _this.model = {};
        }, function (error) {
            _this.showAlert('alertSignup');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.forgotPass = function () {
        var _this = this;
        this.loading = true;
        this._userService.forgotPassword(this.model.email).subscribe(function (data) {
            _this.showAlert('alertSignin');
            _this._alertService.success('Cool! Password recovery instruction has been sent to your email.', true);
            _this.loading = false;
            __WEBPACK_IMPORTED_MODULE_7__helpers_login_custom__["a" /* LoginCustom */].displaySignInForm();
            _this.model = {};
        }, function (error) {
            _this.showAlert('alertForgotPass');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.showAlert = function (target) {
        this[target].clear();
        var factory = this.cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__directives_alert_component__["a" /* AlertComponent */]);
        var ref = this[target].createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('alertSignin', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */])
    ], AuthComponent.prototype, "alertSignin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('alertSignup', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */])
    ], AuthComponent.prototype, "alertSignup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('alertForgotPass', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */])
    ], AuthComponent.prototype, "alertForgotPass", void 0);
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
            template: __webpack_require__("../../../../../src/app/auth/templates/login-1.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_script_loader_service__["a" /* ScriptLoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http_testing__ = __webpack_require__("../../../http/esm5/testing.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_routing_routing__ = __webpack_require__("../../../../../src/app/auth/auth-routing.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_alert_component__ = __webpack_require__("../../../../../src/app/auth/_directives/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__logout_logout_component__ = __webpack_require__("../../../../../src/app/auth/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__ = __webpack_require__("../../../../../src/app/auth/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_alert_service__ = __webpack_require__("../../../../../src/app/auth/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authentication_service__ = __webpack_require__("../../../../../src/app/auth/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_service__ = __webpack_require__("../../../../../src/app/auth/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__helpers_index__ = __webpack_require__("../../../../../src/app/auth/_helpers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__auth_component__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_7__directives_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_8__logout_logout_component__["a" /* LogoutComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__auth_routing_routing__["a" /* AuthRoutingModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_10__services_alert_service__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_11__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_12__services_user_service__["a" /* UserService */],
                // api backend simulation
                __WEBPACK_IMPORTED_MODULE_13__helpers_index__["a" /* fakeBackendProvider */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http_testing__["a" /* MockBackend */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* BaseRequestOptions */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__directives_alert_component__["a" /* AlertComponent */]],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/auth/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/auth/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = (function () {
    function LogoutComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* Helpers */].setLoading(true);
        // reset login status
        this._authService.logout();
        this._router.navigate(['/login']);
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/auth/logout/logout.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/templates/login-1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--signin\" id=\"m_login\">\r\n\t<div class=\"m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside\">\r\n\t\t<div class=\"m-stack m-stack--hor m-stack--desktop\">\r\n\t\t\t<div class=\"m-stack__item m-stack__item--fluid\">\r\n\t\t\t\t<div class=\"m-login__wrapper\">\r\n\t\t\t\t\t<div class=\"m-login__logo\">\r\n\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//logos/logo-2.png\">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-login__signin\">\r\n\t\t\t\t\t\t<div class=\"m-login__head\">\r\n\t\t\t\t\t\t\t<h3 class=\"m-login__title\">\r\n\t\t\t\t\t\t\t\tSign In To Admin\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t<div class=\"m--margin-top-40 m-alert m-alert--outline m-alert--outline-2x alert alert-success fade show\" role=\"alert\">\r\n\t\t\t\t\t\t\t\tUse username\r\n\t\t\t\t\t\t\t\t<span style=\"font-weight: 500;\">\r\n\t\t\t\t\t\t\t\t\tdemo@demo.com\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\tand password\r\n\t\t\t\t\t\t\t\t<span style=\"font-weight: 500;\">\r\n\t\t\t\t\t\t\t\t\tdemo\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\tto continue or singup.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<form (ngSubmit)=\"f.form.valid && signin()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">\r\n\t\t\t\t\t\t\t<ng-template #alertSignin></ng-template>\r\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" autocomplete=\"off\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-login__form-input--last\" type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row m-login__form-sub\">\r\n\t\t\t\t\t\t\t\t<div class=\"col m--align-left\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox m-checkbox--focus\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"remember\" [(ngModel)]=\"model.remember\" #remember=\"ngModel\">\r\n\t\t\t\t\t\t\t\t\t\tRemember me\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col m--align-right\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" id=\"m_login_forget_password\" class=\"m-link\">\r\n\t\t\t\t\t\t\t\t\t\tForget Password ?\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-login__form-action\">\r\n\t\t\t\t\t\t\t\t<button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" id=\"m_login_signin_submit\" class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\r\n\t\t\t\t\t\t\t\t\tSign In\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-login__signup\">\r\n\t\t\t\t\t\t<div class=\"m-login__head\">\r\n\t\t\t\t\t\t\t<h3 class=\"m-login__title\">\r\n\t\t\t\t\t\t\t\tSign Up\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t<div class=\"m-login__desc\">\r\n\t\t\t\t\t\t\t\tEnter your details to create your account:\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<form (ngSubmit)=\"f.form.valid && signup()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">\r\n\t\t\t\t\t\t\t<ng-template #alertSignup></ng-template>\r\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Fullname\" name=\"fullname\" [(ngModel)]=\"model.fullname\" #fullname=\"ngModel\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" autocomplete=\"off\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-login__form-input--last\" type=\"password\" placeholder=\"Confirm Password\" name=\"rpassword\" [(ngModel)]=\"model.rpassword\" #rpassword=\"ngModel\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row form-group m-form__group m-login__form-sub\">\r\n\t\t\t\t\t\t\t\t<div class=\"col m--align-left\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox m-checkbox--focus\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"agree\" [(ngModel)]=\"model.agree\" #agree=\"ngModel\">\r\n\t\t\t\t\t\t\t\t\t\tI Agree the\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-link m-link--focus\">\r\n\t\t\t\t\t\t\t\t\t\t\tterms and conditions\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t.\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-form__help\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-login__form-action\">\r\n\t\t\t\t\t\t\t\t<button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" id=\"m_login_signup_submit\" class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\r\n\t\t\t\t\t\t\t\t\tSign Up\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<button [disabled]=\"loading\"  id=\"m_login_signup_cancel\" class=\"btn btn-outline-focus  m-btn m-btn--pill m-btn--custom\">\r\n\t\t\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-login__forget-password\">\r\n\t\t\t\t\t\t<div class=\"m-login__head\">\r\n\t\t\t\t\t\t\t<h3 class=\"m-login__title\">\r\n\t\t\t\t\t\t\t\tForgotten Password ?\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t<div class=\"m-login__desc\">\r\n\t\t\t\t\t\t\t\tEnter your email to reset your password:\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<form (ngSubmit)=\"f.form.valid && forgotPass()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">\r\n\t\t\t\t\t\t\t<ng-template #alertForgotPass></ng-template>\r\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" id=\"m_email\" autocomplete=\"off\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-login__form-action\">\r\n\t\t\t\t\t\t\t\t<button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" id=\"m_login_forget_password_submit\" class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\r\n\t\t\t\t\t\t\t\t\tRequest\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<button [disabled]=\"loading\"  id=\"m_login_forget_password_cancel\" class=\"btn btn-outline-focus m-btn m-btn--pill m-btn--custom\">\r\n\t\t\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-stack__item m-stack__item--center\">\r\n\t\t\t\t<div class=\"m-login__account\">\r\n\t\t\t\t\t<span class=\"m-login__account-msg\">\r\n\t\t\t\t\t\tDon't have an account yet ?\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t&nbsp;&nbsp;\r\n\t\t\t\t\t<a href=\"javascript:;\" id=\"m_login_signup\" class=\"m-link m-link--focus m-login__account-link\">\r\n\t\t\t\t\t\tSign Up\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1\tm-login__content\" style=\"background-image: url(./assets/app/media/img//bg/bg-4.jpg)\">\r\n\t\t<div class=\"m-grid__item m-grid__item--middle\">\r\n\t\t\t<h3 class=\"m-login__welcome\">\r\n\t\t\t\tJoin Our Community\r\n\t\t\t</h3>\r\n\t\t\t<p class=\"m-login__msg\">\r\n\t\t\t\tLorem ipsum dolor sit amet, coectetuer adipiscing\r\n\t\t\t\t<br>\r\n\t\t\t\telit sed diam nonummy et nibh euismod\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helpers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);

var Helpers = (function () {
    function Helpers() {
    }
    Helpers.loadStyles = function (tag, src) {
        if (Array.isArray(src)) {
            __WEBPACK_IMPORTED_MODULE_0_jquery__["each"](src, function (k, s) {
                __WEBPACK_IMPORTED_MODULE_0_jquery__(tag).append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<link/>').attr('href', s).attr('rel', 'stylesheet').attr('type', 'text/css'));
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_jquery__(tag).append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<link/>').attr('href', src).attr('rel', 'stylesheet').attr('type', 'text/css'));
        }
    };
    Helpers.unwrapTag = function (element) {
        __WEBPACK_IMPORTED_MODULE_0_jquery__(element).removeAttr('appunwraptag').unwrap();
    };
    /**
     * Set title markup
     * @param title
     */
    Helpers.setTitle = function (title) {
        __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader__title').text(title);
    };
    /**
     * Breadcrumbs markup
     * @param breadcrumbs
     */
    Helpers.setBreadcrumbs = function (breadcrumbs) {
        if (breadcrumbs)
            __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader__title').addClass('m-subheader__title--separator');
        var ul = __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader__breadcrumbs');
        if (__WEBPACK_IMPORTED_MODULE_0_jquery__(ul).length === 0) {
            ul = __WEBPACK_IMPORTED_MODULE_0_jquery__('<ul/>').addClass('m-subheader__breadcrumbs m-nav m-nav--inline')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<li/>').addClass('m-nav__item')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<a/>').addClass('m-nav__link m-nav__link--icon')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<i/>').addClass('m-nav__link-icon la la-home'))));
        }
        __WEBPACK_IMPORTED_MODULE_0_jquery__(ul).find('li:not(:first-child)').remove();
        __WEBPACK_IMPORTED_MODULE_0_jquery__["each"](breadcrumbs, function (k, v) {
            var li = __WEBPACK_IMPORTED_MODULE_0_jquery__('<li/>').addClass('m-nav__item')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<a/>').addClass('m-nav__link m-nav__link--icon').attr('routerLink', v.href).attr('title', v.title)
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<span/>').addClass('m-nav__link-text').text(v.text)));
            __WEBPACK_IMPORTED_MODULE_0_jquery__(ul).append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<li/>').addClass('m-nav__separator').text('-')).append(li);
        });
        __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader .m-stack__item:first-child').append(ul);
    };
    Helpers.setLoading = function (enable) {
        var body = __WEBPACK_IMPORTED_MODULE_0_jquery__('body');
        if (enable) {
            __WEBPACK_IMPORTED_MODULE_0_jquery__(body).addClass('m-page--loading-non-block');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_jquery__(body).removeClass('m-page--loading-non-block');
        }
    };
    Helpers.bodyClass = function (strClass) {
        __WEBPACK_IMPORTED_MODULE_0_jquery__('body').attr('class', strClass);
    };
    return Helpers;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/aside-nav/aside-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Left Aside -->\n<button class=\"m-aside-left-close m-aside-left-close--skin-light\" id=\"m_aside_left_close_btn\" appunwraptag=\"\">\n\t<i class=\"la la-close\"></i>\n</button>\n<div id=\"m_aside_left\" class=\"m-grid__item m-aside-left\">\n\t<!-- BEGIN: Aside Menu -->\n\t<div  \t\tid=\"m_ver_menu\"  \t\tclass=\"m-aside-menu  m-aside-menu--skin-light m-aside-menu--submenu-skin-light\"  \t\tdata-menu-vertical=\"true\" \t\t data-menu-scrollable=\"false\" data-menu-dropdown-timeout=\"500\"   \t\t>\n\t\t<ul class=\"m-menu__nav  m-menu__nav--dropdown-submenu-arrow\">\n\t\t<ng-template ngFor let-feature [ngForOf]=\"features\">\t\n\t\t\t<li class=\"m-menu__section\">\n\t\t\t\t<h4 class=\"m-menu__section-text\">\n\t\t\t\t\t\t{{feature.productName}}\n\t\t\t\t</h4>\n\t\t\t\t<i class=\"m-menu__section-icon flaticon-more-v3\"></i>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\"\n\t\t\t*ngFor=\"let release of feature.releases\">\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t{{release.releaseName}}\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t{{release.releaseName}}\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\" data-redirect=\"true\"\n\t\t\t\t\t\t*ngFor=\"let category of release.categories\">\n\t\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t{{category.categoryName}}\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" aria-haspopup=\"true\"  data-redirect=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{category.categoryName}}\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" aria-haspopup=\"true\"  data-redirect=\"true\" *ngFor=\"let categoryFeature of category.categoryFeatures\">\n\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/inner\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{categoryFeature.featureName}}\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t</ng-template>\n\t\t</ul>\n\t</div>\n\t<!-- END: Aside Menu -->\n</div>\n<!-- END: Left Aside -->\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/aside-nav/aside-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsideNavComponent = (function () {
    function AsideNavComponent() {
    }
    AsideNavComponent.prototype.ngOnInit = function () {
        this.features = [
            {
                productName: 'Illustrator CC',
                releases: [
                    {
                        releaseName: '22.0.1 Release',
                        categories: [
                            {
                                categoryName: 'Productivity',
                                categoryFeatures: [{
                                        featureName: 'Feature1'
                                    }, {
                                        featureName: 'Feature2'
                                    }, {
                                        featureName: 'Feature3'
                                    }]
                            },
                            {
                                categoryName: 'Core Features',
                                categoryFeatures: [{
                                        featureName: 'Feature4'
                                    }, {
                                        featureName: 'Feature5'
                                    }, {
                                        featureName: 'Feature6'
                                    }]
                            }
                        ]
                    },
                    {
                        releaseName: '23.0.2 Release',
                        categories: [
                            {
                                categoryName: 'Productivity',
                                categoryFeatures: [{
                                        featureName: 'Feature7'
                                    }, {
                                        featureName: 'Feature8'
                                    }, {
                                        featureName: 'Feature9'
                                    }]
                            },
                            {
                                categoryName: 'Core Features',
                                categoryFeatures: [{
                                        featureName: 'Feature11'
                                    }, {
                                        featureName: 'Feature15'
                                    }, {
                                        featureName: 'Feature16'
                                    }]
                            }
                        ]
                    }
                ]
            },
            {
                productName: 'InDesign CC',
                releases: [
                    {
                        releaseName: '14.0.1 Release'
                    },
                    {
                        releaseName: '15.0.2 Release'
                    }
                ],
            }
        ];
    };
    AsideNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initAside();
    };
    AsideNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-aside-nav",
            template: __webpack_require__("../../../../../src/app/theme/layouts/aside-nav/aside-nav.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], AsideNavComponent);
    return AsideNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Footer -->\n<footer class=\"m-grid__item m-footer\" appunwraptag=\"\">\n\t<div class=\"m-container m-container--responsive m-container--xxl m-container--full-height m-page__container\">\n\t\t<div class=\"m-footer__wrapper\">\n\t\t\t<div class=\"m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop\">\n\t\t\t\t<div class=\"m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last\">\n\t\t\t\t\t<span class=\"m-footer__copyright\">\n\t\t\t\t\t\t2017 &copy; Metronic theme by\n\t\t\t\t\t\t<a href=\"#\" class=\"m-link\">\n\t\t\t\t\t\t\tKeenthemes\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first\">\n\t\t\t\t\t<ul class=\"m-footer__nav m-nav m-nav--inline m--pull-right\">\n\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\tAbout\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t<a href=\"#\"  class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\tPrivacy\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\tT&C\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\tPurchase\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-nav__item m-nav__item--last\">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\" data-toggle=\"m-tooltip\" title=\"Support Center\" data-placement=\"left\">\n\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info m--icon-font-size-lg3\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>\n<!-- end::Footer -->\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-footer",
            template: __webpack_require__("../../../../../src/app/theme/layouts/footer/footer.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/header-nav/header-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Navigation Header -->\n<header class=\"m-grid__item\t\tm-header \"  data-minimize=\"minimize\" data-minimize-offset=\"200\" data-minimize-mobile-offset=\"200\" >\n\t<div class=\"m-header__top\">\n\t\t<div class=\"m-container m-container--responsive m-container--xxl m-container--full-height m-page__container\">\n\t\t\t<div class=\"m-stack m-stack--ver m-stack--desktop\">\n\t\t\t\t<!-- begin::Brand -->\n\t\t\t\t<div class=\"m-stack__item m-brand\">\n\t\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general m-stack--inline\">\n\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--middle m-brand__logo\">\n\t\t\t\t\t\t\t<a href=\"index.html\" class=\"m-brand__logo-wrapper\">\n\t\t\t\t\t\t\t\t<img alt=\"\" height=\"40px\" width=\"87px\" src=\"assets/demo/demo2/media/img/logo/logo.png\"/>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--middle m-brand__tools\">\n\t\t\t\t\t\t\t<!-- begin:Responsive Aside Left Menu Toggler -->\n\t\t\t\t\t\t\t<a href=\"javascript:;\" id=\"m_aside_left_offcanvas_toggle\" class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block\">\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<!-- end::Aside Left Menu Toggler -->\n\t\t\t\t\t\t\t<!-- begin::Responsive Header Menu Toggler-->\n\t\t\t\t\t\t\t<a id=\"m_aside_header_menu_mobile_toggle\" href=\"javascript:;\" class=\"m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block\">\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<!-- end::Responsive Header Menu Toggler-->\n<!-- begin::Topbar Toggler-->\n\t\t\t\t\t\t\t<a id=\"m_aside_header_topbar_mobile_toggle\" href=\"javascript:;\" class=\"m-brand__icon m--visible-tablet-and-mobile-inline-block\">\n\t\t\t\t\t\t\t\t<i class=\"flaticon-more\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<!--end::Topbar Toggler-->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- end::Brand -->\t\t\n\t<!-- begin::Topbar -->\n\t\t\t\t\n\t\t\t\t<!-- end::Topbar -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"m-header__bottom\">\n\t\t<div class=\"m-container m-container--responsive m-container--xxl m-container--full-height m-page__container\">\n\t\t\t<div class=\"m-stack m-stack--ver m-stack--desktop\">\n\t\t\t\t<!-- begin::Horizontal Menu -->\n\t\t\t\t<div class=\"m-stack__item m-stack__item--middle m-stack__item--fluid\">\n\t\t\t\t\t<button class=\"m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-light \" id=\"m_aside_header_menu_mobile_close_btn\">\n\t\t\t\t\t\t<i class=\"la la-close\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t\t<div id=\"m_header_menu\" class=\"m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-dark m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-light m-aside-header-menu-mobile--submenu-skin-light \"  >\n\t\t\t\t\t\t<ul class=\"m-menu__nav  m-menu__nav--submenu-arrow \">\n\t\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\"  aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t<a  href=\"index.html\" class=\"m-menu__link \">\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__item-here\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\tHome\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu m-menu__item--rel\"  data-menu-submenu-toggle=\"click\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t<a  href=\"https://docs.google.com/presentation/d/13uEWB22bEqwgcLXDjQ2a84O_RRbxLZDsu4TSuqmm1Do/edit\" class=\"m-menu__link m-menu__toggle\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__item-here\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\tEngagement Programs\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--active m-menu__item--rel\"  data-menu-submenu-toggle=\"click\" data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__item-here\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\tProduct Releases\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\"  data-menu-submenu-toggle=\"click\" data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__item-here\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\tMarketing Resources \n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-down\"></i>\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"m-menu__submenu  m-menu__submenu--fixed m-menu__submenu--center\" style=\"width:600px\" >\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow m-menu__arrow--adjust\"></span>\n\t\t\t\t\t\t\t\t\t<div class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__content\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"m-menu__heading m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tMarketing Messaging\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item \"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a  href=\"inner.html\" class=\"m-menu__link \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-map\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIllustrator CC\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item \"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a  href=\"inner.html\" class=\"m-menu__link \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tInDesign CC\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"m-menu__heading m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tDemo Assets\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item \"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a  href=\"inner.html\" class=\"m-menu__link \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIllustrator CC\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item \"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a  href=\"inner.html\" class=\"m-menu__link \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tInDesign CC\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- end::Horizontal Menu -->\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</header>\n<!-- end::Navigation Header -->"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/header-nav/header-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderNavComponent = (function () {
    function HeaderNavComponent() {
    }
    HeaderNavComponent.prototype.ngOnInit = function () {
    };
    HeaderNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initHeader();
    };
    HeaderNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-header-nav",
            template: __webpack_require__("../../../../../src/app/theme/layouts/header-nav/header-nav.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], HeaderNavComponent);
    return HeaderNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_default_default_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aside_nav_aside_nav_component__ = __webpack_require__("../../../../../src/app/theme/layouts/aside-nav/aside-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_nav_header_nav_component__ = __webpack_require__("../../../../../src/app/theme/layouts/header-nav/header-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_aside_left_display_disabled_aside_left_display_disabled_component__ = __webpack_require__("../../../../../src/app/theme/pages/aside-left-display-disabled/aside-left-display-disabled.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/theme/layouts/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quick_sidebar_quick_sidebar_component__ = __webpack_require__("../../../../../src/app/theme/layouts/quick-sidebar/quick-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scroll_top_scroll_top_component__ = __webpack_require__("../../../../../src/app/theme/layouts/scroll-top/scroll-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tooltips_tooltips_component__ = __webpack_require__("../../../../../src/app/theme/layouts/tooltips/tooltips.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_href_prevent_default_directive__ = __webpack_require__("../../../../../src/app/_directives/href-prevent-default.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_unwrap_tag_directive__ = __webpack_require__("../../../../../src/app/_directives/unwrap-tag.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__pages_default_default_component__["a" /* DefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_2__aside_nav_aside_nav_component__["a" /* AsideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_3__header_nav_header_nav_component__["a" /* HeaderNavComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pages_aside_left_display_disabled_aside_left_display_disabled_component__["a" /* AsideLeftDisplayDisabledComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__quick_sidebar_quick_sidebar_component__["a" /* QuickSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__scroll_top_scroll_top_component__["a" /* ScrollTopComponent */],
                __WEBPACK_IMPORTED_MODULE_8__tooltips_tooltips_component__["a" /* TooltipsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__directives_href_prevent_default_directive__["a" /* HrefPreventDefaultDirective */],
                __WEBPACK_IMPORTED_MODULE_12__directives_unwrap_tag_directive__["a" /* UnwrapTagDirective */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__pages_default_default_component__["a" /* DefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_2__aside_nav_aside_nav_component__["a" /* AsideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_3__header_nav_header_nav_component__["a" /* HeaderNavComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pages_aside_left_display_disabled_aside_left_display_disabled_component__["a" /* AsideLeftDisplayDisabledComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__quick_sidebar_quick_sidebar_component__["a" /* QuickSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__scroll_top_scroll_top_component__["a" /* ScrollTopComponent */],
                __WEBPACK_IMPORTED_MODULE_8__tooltips_tooltips_component__["a" /* TooltipsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__directives_href_prevent_default_directive__["a" /* HrefPreventDefaultDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["e" /* RouterModule */],
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/quick-sidebar/quick-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Quick Sidebar -->\n<div id=\"m_quick_sidebar\" class=\"m-quick-sidebar m-quick-sidebar--tabbed m-quick-sidebar--skin-light\" appunwraptag=\"\">\n\t<div class=\"m-quick-sidebar__content m--hide\">\n\t\t<span id=\"m_quick_sidebar_close\" class=\"m-quick-sidebar__close\">\n\t\t\t<i class=\"la la-close\"></i>\n\t\t</span>\n\t\t<ul id=\"m_quick_sidebar_tabs\" class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\" role=\"tablist\">\n\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t<a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_messenger\" role=\"tab\">\n\t\t\t\t\tMessages\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t<a class=\"nav-link m-tabs__link\" \t\tdata-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_settings\" role=\"tab\">\n\t\t\t\t\tSettings\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t<a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_logs\" role=\"tab\">\n\t\t\t\t\tLogs\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t\t<div class=\"tab-content\">\n\t\t\t<div class=\"tab-pane active m-scrollable\" id=\"m_quick_sidebar_tabs_messenger\" role=\"tabpanel\">\n\t\t\t\t<div class=\"m-messenger m-messenger--message-arrow m-messenger--skin-light\">\n\t\t\t\t\t<div class=\"m-messenger__messages\">\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\" alt=\"\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tHi Bob. What time will be the meeting ?\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tHi Megan. It's at 2.30PM\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\" alt=\"\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tWill the development team be joining ?\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tYes sure. I invited them as well\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__datetime\">\n\t\t\t\t\t\t\t2:30PM\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\"  alt=\"\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tNoted. For the Coca-Cola Mobile App project as well ?\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tYes, sure.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tPlease also prepare the quotation for the Loop CRM project as well.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__datetime\">\n\t\t\t\t\t\t\t3:15PM\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-no-pic m--bg-fill-danger\">\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\tM\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tNoted. I will prepare it.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tThanks Megan. I will see you later.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\"  alt=\"\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tSure. See you in the meeting soon.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-messenger__seperator\"></div>\n\t\t\t\t\t<div class=\"m-messenger__form\">\n\t\t\t\t\t\t<div class=\"m-messenger__form-controls\">\n\t\t\t\t\t\t\t<input type=\"text\" name=\"\" placeholder=\"Type here...\" class=\"m-messenger__form-input\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__form-tools\">\n\t\t\t\t\t\t\t<a href=\"\" class=\"m-messenger__form-attachment\">\n\t\t\t\t\t\t\t\t<i class=\"la la-paperclip\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"tab-pane  m-scrollable\" id=\"m_quick_sidebar_tabs_settings\" role=\"tabpanel\">\n\t\t\t\t<div class=\"m-list-settings\">\n\t\t\t\t\t<div class=\"m-list-settings__group\">\n\t\t\t\t\t\t<div class=\"m-list-settings__heading\">\n\t\t\t\t\t\t\tGeneral Settings\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tEmail Notifications\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tSite Tracking\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tSMS Alerts\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tBackup Storage\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tAudit Logs\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-list-settings__group\">\n\t\t\t\t\t\t<div class=\"m-list-settings__heading\">\n\t\t\t\t\t\t\tSystem Settings\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tSystem Logs\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tError Reporting\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tApplications Logs\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tBackup Servers\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tAudit Logs\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"tab-pane  m-scrollable\" id=\"m_quick_sidebar_tabs_logs\" role=\"tabpanel\">\n\t\t\t\t<div class=\"m-list-timeline\">\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\n\t\t\t\t\t\t\tSystem Logs\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t12 new users registered\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--warning m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\timportant\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem shutdown\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t11 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew invoice received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\tresolved\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t1 hr\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem error\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t2 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server down\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\tpending\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t3 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server up\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t5 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\n\t\t\t\t\t\t\tApplications Logs\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\turgent\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t7 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t12 new users registered\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem shutdown\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t11 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew invoices received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t1 hr\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem error\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\tpending\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t2 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server down\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t3 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\n\t\t\t\t\t\t\tServer Logs\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server up\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t5 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t7 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t12 new users registered\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem shutdown\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t11 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew invoice received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t1 hr\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem error\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t2 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server down\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t3 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server up\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t5 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t1117 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- end::Quick Sidebar -->\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/quick-sidebar/quick-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuickSidebarComponent = (function () {
    function QuickSidebarComponent() {
    }
    QuickSidebarComponent.prototype.ngOnInit = function () {
    };
    QuickSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-quick-sidebar",
            template: __webpack_require__("../../../../../src/app/theme/layouts/quick-sidebar/quick-sidebar.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], QuickSidebarComponent);
    return QuickSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/scroll-top/scroll-top.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Scroll Top -->\n<div class=\"m-scroll-top m-scroll-top--skin-top\" data-toggle=\"m-scroll-top\" data-scroll-offset=\"500\" data-scroll-speed=\"300\" appunwraptag=\"\">\n\t<i class=\"la la-arrow-up\"></i>\n</div>\n<!-- end::Scroll Top -->\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/scroll-top/scroll-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollTopComponent = (function () {
    function ScrollTopComponent() {
    }
    ScrollTopComponent.prototype.ngOnInit = function () {
    };
    ScrollTopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-scroll-top",
            template: __webpack_require__("../../../../../src/app/theme/layouts/scroll-top/scroll-top.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], ScrollTopComponent);
    return ScrollTopComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/tooltips/tooltips.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Quick Nav -->\n<ul class=\"m-nav-sticky\" style=\"margin-top: 30px;\" appunwraptag=\"\">\n\t<!--\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Showcase\" data-placement=\"left\">\n\t\t<a href=\"\">\n\t\t\t<i class=\"la la-eye\"></i>\n\t\t</a>\n\t</li>\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Pre-sale Chat\" data-placement=\"left\">\n\t\t<a href=\"\" >\n\t\t\t<i class=\"la la-comments-o\"></i>\n\t\t</a>\n\t</li>\n\t-->\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Purchase\" data-placement=\"left\">\n\t\t<a href=\"https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes\" >\n\t\t\t<i class=\"la la-cart-arrow-down\"></i>\n\t\t</a>\n\t</li>\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Documentation\" data-placement=\"left\">\n\t\t<a href=\"https://keenthemes.com/metronic/documentation.html\" >\n\t\t\t<i class=\"la la-code-fork\"></i>\n\t\t</a>\n\t</li>\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Support\" data-placement=\"left\">\n\t\t<a href=\"https://keenthemes.com/forums/forum/support/metronic5/\" >\n\t\t\t<i class=\"la la-life-ring\"></i>\n\t\t</a>\n\t</li>\n</ul>\n<!-- begin::Quick Nav -->\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/tooltips/tooltips.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TooltipsComponent = (function () {
    function TooltipsComponent() {
    }
    TooltipsComponent.prototype.ngOnInit = function () {
    };
    TooltipsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-tooltips",
            template: __webpack_require__("../../../../../src/app/theme/layouts/tooltips/tooltips.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], TooltipsComponent);
    return TooltipsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/pages/aside-left-display-disabled/aside-left-display-disabled.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid__item m-grid__item--fluid  m-grid m-grid--ver\tm-container m-container--responsive m-container--xxl m-page__container\">\n\t<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/theme/pages/aside-left-display-disabled/aside-left-display-disabled.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideLeftDisplayDisabledComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsideLeftDisplayDisabledComponent = (function () {
    function AsideLeftDisplayDisabledComponent() {
    }
    AsideLeftDisplayDisabledComponent.prototype.ngOnInit = function () {
    };
    AsideLeftDisplayDisabledComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--hor-desktop.m-grid--desktop.m-body",
            template: __webpack_require__("../../../../../src/app/theme/pages/aside-left-display-disabled/aside-left-display-disabled.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], AsideLeftDisplayDisabledComponent);
    return AsideLeftDisplayDisabledComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/pages/default/default.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid__item m-grid__item--fluid  m-grid m-grid--ver\tm-container m-container--responsive m-container--xxl m-page__container\">\n\t<app-aside-nav></app-aside-nav>\n\t<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultComponent = (function () {
    function DefaultComponent() {
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--hor-desktop.m-grid--desktop.m-body",
            template: __webpack_require__("../../../../../src/app/theme/pages/default/default.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/theme-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_component__ = __webpack_require__("../../../../../src/app/theme/theme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        "path": "",
        "component": __WEBPACK_IMPORTED_MODULE_1__theme_component__["a" /* ThemeComponent */],
        // "canActivate": [AuthGuard],
        "children": [
            {
                "path": "index",
                "loadChildren": ".\/pages\/aside-left-display-disabled\/index\/index.module#IndexModule"
            },
            {
                "path": "inner",
                "loadChildren": ".\/pages\/default\/inner\/inner.module#InnerModule"
            },
            {
                "path": "profile",
                "loadChildren": ".\/pages\/default\/profile\/profile.module#ProfileModule"
            },
            {
                "path": "404",
                "loadChildren": ".\/pages\/default\/not-found\/not-found.module#NotFoundModule"
            },
            {
                "path": "",
                "redirectTo": "index",
                "pathMatch": "full"
            }
        ]
    },
    {
        "path": "**",
        "redirectTo": "404",
        "pathMatch": "full"
    }
];
var ThemeRoutingModule = (function () {
    function ThemeRoutingModule() {
    }
    ThemeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */]]
        })
    ], ThemeRoutingModule);
    return ThemeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/theme.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-nav></app-header-nav>\n<!-- begin::Body -->\n<router-outlet></router-outlet>\n<!-- end::Body -->\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/theme/theme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_script_loader_service__ = __webpack_require__("../../../../../src/app/_services/script-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThemeComponent = (function () {
    function ThemeComponent(_script, _router) {
        this._script = _script;
        this._router = _router;
    }
    ThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js', 'assets/demo/demo2/base/scripts.bundle.js'], true)
            .then(function (result) {
            __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(false);
            // optional js to be loaded once
            _this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js']);
        });
        this._router.events.subscribe(function (route) {
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                mLayout.closeMobileAsideMenuOffcanvas();
                mLayout.closeMobileHorMenuOffcanvas();
                mApp.scrollTop();
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(true);
                // hide visible popover
                $('[data-toggle="m-popover"]').popover('hide');
            }
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                // init required js
                mApp.init();
                mUtil.init();
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(false);
                // content m-wrapper animation
                var animation_1 = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    $('.m-wrapper').removeClass(animation_1);
                }).removeClass(animation_1).addClass(animation_1);
            }
        });
    };
    ThemeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__("../../../../../src/app/theme/theme.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_script_loader_service__["a" /* ScriptLoaderService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], ThemeComponent);
    return ThemeComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
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