(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo-gallery/photo-gallery.component */ "./src/app/photo-gallery/photo-gallery.component.ts");




var routes = [{ path: '', component: _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_3__["PhotoGalleryComponent"] }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"logo\"></div>\n</header>\n<div class=\"main-content\">\n  <router-outlet></router-outlet>\n</div>\n<footer>\n  <div class=\"footerlogo\">©Pralay Saha 2019</div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MaxHuntSite';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photo-gallery/photo-gallery.component */ "./src/app/photo-gallery/photo-gallery.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_5__["PhotoGalleryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/photo-gallery/photo-gallery.component.css":
/*!***********************************************************!*\
  !*** ./src/app/photo-gallery/photo-gallery.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photo-gallery-header {\r\n  padding-top: 35px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.photoClass {\r\n  text-align: center;\r\n  padding: 20px;\r\n  max-height: 400px;\r\n  max-width: 70%;\r\n}\r\n\r\n.fa {\r\n  cursor: pointer;\r\n}\r\n\r\n.loader {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 46%;\r\n  width: 100px;\r\n}\r\n\r\n.loader img {\r\n  width: 100px;\r\n}\r\n\r\n.leftarrow {\r\n  font-size: xx-large;\r\n  opacity: 0.5;\r\n}\r\n\r\n.rightarrow {\r\n  font-size: xx-large;\r\n  opacity: 0.5;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .photoClass {\r\n    text-align: center;\r\n    padding: 10px;\r\n    max-height: 400px;\r\n    max-width: 90%;\r\n  }\r\n\r\n  .loader {\r\n    top: 20%;\r\n    width: 50px;\r\n    left: 40%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 600px)  and (max-width: 1024px){\r\n    .photoClass {\r\n      text-align: center;\r\n      padding: 10px;\r\n      max-height: 400px;\r\n      max-width: 90%;\r\n    }\r\n  \r\n    .loader {\r\n      top: 20%;\r\n      width: 50px;\r\n      left: 45%;\r\n    }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG8tZ2FsbGVyeS9waG90by1nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsV0FBVztJQUNYLFNBQVM7RUFDWDtBQUNGOztBQUVBO0lBQ0k7TUFDRSxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLGlCQUFpQjtNQUNqQixjQUFjO0lBQ2hCOztJQUVBO01BQ0UsUUFBUTtNQUNSLFdBQVc7TUFDWCxTQUFTO0lBQ1g7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvLWdhbGxlcnkvcGhvdG8tZ2FsbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBob3RvLWdhbGxlcnktaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogMzVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5waG90b0NsYXNzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICBtYXgtd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmZhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA0NiU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4ubG9hZGVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4ubGVmdGFycm93IHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLnJpZ2h0YXJyb3cge1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnBob3RvQ2xhc3Mge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgfVxyXG5cclxuICAubG9hZGVyIHtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBsZWZ0OiA0MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSAgYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcbiAgICAucGhvdG9DbGFzcyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmxvYWRlciB7XHJcbiAgICAgIHRvcDogMjAlO1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgbGVmdDogNDUlO1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/photo-gallery/photo-gallery.component.html":
/*!************************************************************!*\
  !*** ./src/app/photo-gallery/photo-gallery.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"photo-gallery-header\">\n    <i class=\"fa fa-arrow-circle-left leftarrow\" *ngIf=\"photoIndex>0\" (click)=\"leftClk()\"></i>\n    &nbsp;&nbsp;&nbsp;\n    <i class=\"fa fa-arrow-circle-right rightarrow\" *ngIf=\"photoIndex < maxCount-1\" (click)=\"rightClk()\"></i>\n    <br/>\n  <img [src]=\"photoUrl\" class=\"photoClass\" (load)=\"onLoad()\">\n</div>\n<div class=\"loader\">\n  <img *ngIf=\"loading\" src=\"/assets/loader.gif\" alt=\"loading\" />\n</div>"

/***/ }),

/***/ "./src/app/photo-gallery/photo-gallery.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/photo-gallery/photo-gallery.component.ts ***!
  \**********************************************************/
/*! exports provided: PhotoGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoGalleryComponent", function() { return PhotoGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PhotoGalleryComponent = /** @class */ (function () {
    function PhotoGalleryComponent() {
        this.photoIndex = 0;
        this.photoUrl = '';
        this.maxCount = 0;
        this.loading = true;
        this.photoUrls = [
            './../../assets/Images/Mountains/Ooty1.jpg',
            './../../assets/Images/Mountains/Ooty2.jpg',
            './../../assets/Images/Mountains/Ooty3.jpg',
            './../../assets/Images/Mountains/Ooty4.jpg',
            './../../assets/Images/Mountains/Ooty5.jpg',
            './../../assets/Images/Mountains/Ooty6.jpg',
            './../../assets/Images/Mountains/Kumaon1.jpg',
        ];
    }
    PhotoGalleryComponent.prototype.ngOnInit = function () {
        this.photoUrl = this.photoUrls[this.photoIndex];
        this.maxCount = this.photoUrls.length;
    };
    PhotoGalleryComponent.prototype.leftClk = function () {
        this.photoIndex = this.photoIndex - 1;
        this.photoUrl = this.photoUrls[this.photoIndex];
        this.loading = true;
    };
    PhotoGalleryComponent.prototype.rightClk = function () {
        this.photoIndex = this.photoIndex + 1;
        this.photoUrl = this.photoUrls[this.photoIndex];
        this.loading = true;
    };
    PhotoGalleryComponent.prototype.onLoad = function () {
        this.loading = false;
    };
    PhotoGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photo-gallery',
            template: __webpack_require__(/*! ./photo-gallery.component.html */ "./src/app/photo-gallery/photo-gallery.component.html"),
            styles: [__webpack_require__(/*! ./photo-gallery.component.css */ "./src/app/photo-gallery/photo-gallery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PhotoGalleryComponent);
    return PhotoGalleryComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MaxHuntSite\MaxHuntSite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map