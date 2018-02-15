webpackJsonp(["inner.module"],{

/***/ "../../../../../src/app/theme/pages/default/inner/inner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-content\">\n\t<!--begin::Section-->\n        <!--begin:: Feature Overview-->\n\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"m-portlet\">\n\t\t\t\t  <div class=\"m-portlet__head\">\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t  <div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\t\t{{currentFeature.featureName}}\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"m-portlet__body\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t  <div class=\"col-md-9\">\n\t\t\t\t\t\t<h6>{{currentFeature.marketingheadline}}</h6>\n\t\t\t\t\t\t<p>{{currentFeature.marketingDescription}}</p>\n\t\t\t\t\t\t<h6>Designer Personas</h6>\n\t\t\t\t\t\t<p class=\"m-badge m-badge--metal m-badge--wide\">{{currentFeature.personas}}</p>\n\t\t\t\t\t\t<h6>Workflows</h6>\n\t\t\t\t\t\t<p class=\"m-badge m-badge--metal m-badge--wide\">{{currentFeature.workflows}}</p>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"col-md-3\">\n\t\t\t\t\t\t<i class=\"flaticon-layers m--font-metal\"></i>&nbsp;&nbsp;<a class=\"m-link m--font-bolder\" href=\"#\">Designs</a>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<i class=\"flaticon-attachment m--font-metal\"></i>&nbsp;&nbsp;<a class=\"m-link m--font-bolder\" href=\"#\">Marketing Assets</a>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<i class=\"flaticon-browser m--font-metal\"></i>&nbsp;&nbsp;<a class=\"m-link m--font-bolder\" href=\"#\">Demo Assets</a>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<i class=\"flaticon-cogwheel-2 m--font-metal\"></i>&nbsp;&nbsp;<a class=\"m-link m--font-bolder\" href=\"#\">JIRA</a>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n  \n  \n  \n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t  <!--end:: Feature Overview-->\n  <!--end::Section-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/inner/inner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__ = __webpack_require__("../../../../../src/app/_services/script-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_feature_service__ = __webpack_require__("../../../../../src/app/_services/feature.service.ts");
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




var InnerComponent = (function () {
    function InnerComponent(_script, _featureService, _route) {
        this._script = _script;
        this._featureService = _featureService;
        this._route = _route;
    }
    InnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._featureService.getFeatures()
            .subscribe(function (myfeatures) {
            _this.myfeatures = myfeatures;
        }, function (error) { return _this.errorMessage = error; });
        this._route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.getFeatureDetails();
        });
    };
    InnerComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-inner', ['assets/app/js/dashboard.js']);
    };
    InnerComponent.prototype.getFeatureDetails = function () {
        var _this = this;
        this._featureService.getFeature(this.id)
            .subscribe(function (currentFeature) {
            _this.currentFeature = currentFeature;
        });
    };
    InnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-inner",
            template: __webpack_require__("../../../../../src/app/theme/pages/default/inner/inner.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__["a" /* ScriptLoaderService */],
            __WEBPACK_IMPORTED_MODULE_2__services_feature_service__["a" /* FeatureService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], InnerComponent);
    return InnerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/pages/default/inner/inner.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerModule", function() { return InnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inner_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/inner/inner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__ = __webpack_require__("../../../../../src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__default_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/default.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        "path": "",
        "component": __WEBPACK_IMPORTED_MODULE_5__default_component__["a" /* DefaultComponent */],
        "children": [
            {
                "path": "feature/:id",
                "component": __WEBPACK_IMPORTED_MODULE_3__inner_component__["a" /* InnerComponent */]
            }
        ]
    }
];
var InnerModule = (function () {
    function InnerModule() {
    }
    InnerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes), __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */]
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_3__inner_component__["a" /* InnerComponent */]
            ]
        })
    ], InnerModule);
    return InnerModule;
}());



/***/ })

});
//# sourceMappingURL=inner.module.chunk.js.map