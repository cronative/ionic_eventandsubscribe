(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["meeting-meeting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/meeting/meeting.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meeting/meeting.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n    <ion-title>meeting</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <iframe class=\"ifrm\" src=\"https://jmeet.testravi.net/\"></iframe>\n</ion-content>");

/***/ }),

/***/ "./src/app/meeting/meeting-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/meeting/meeting-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MeetingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingPageRoutingModule", function() { return MeetingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _meeting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meeting.page */ "./src/app/meeting/meeting.page.ts");




const routes = [
    {
        path: '',
        component: _meeting_page__WEBPACK_IMPORTED_MODULE_3__["MeetingPage"]
    }
];
let MeetingPageRoutingModule = class MeetingPageRoutingModule {
};
MeetingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MeetingPageRoutingModule);



/***/ }),

/***/ "./src/app/meeting/meeting.module.ts":
/*!*******************************************!*\
  !*** ./src/app/meeting/meeting.module.ts ***!
  \*******************************************/
/*! exports provided: MeetingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingPageModule", function() { return MeetingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _meeting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meeting-routing.module */ "./src/app/meeting/meeting-routing.module.ts");
/* harmony import */ var _meeting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meeting.page */ "./src/app/meeting/meeting.page.ts");







let MeetingPageModule = class MeetingPageModule {
};
MeetingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _meeting_routing_module__WEBPACK_IMPORTED_MODULE_5__["MeetingPageRoutingModule"]
        ],
        declarations: [_meeting_page__WEBPACK_IMPORTED_MODULE_6__["MeetingPage"]]
    })
], MeetingPageModule);



/***/ }),

/***/ "./src/app/meeting/meeting.page.scss":
/*!*******************************************!*\
  !*** ./src/app/meeting/meeting.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ifrm {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVldGluZy9tZWV0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tZWV0aW5nL21lZXRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlmcm0ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/meeting/meeting.page.ts":
/*!*****************************************!*\
  !*** ./src/app/meeting/meeting.page.ts ***!
  \*****************************************/
/*! exports provided: MeetingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingPage", function() { return MeetingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MeetingPage = class MeetingPage {
    constructor() { }
    ngOnInit() {
    }
};
MeetingPage.ctorParameters = () => [];
MeetingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meeting',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./meeting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/meeting/meeting.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./meeting.page.scss */ "./src/app/meeting/meeting.page.scss")).default]
    })
], MeetingPage);



/***/ })

}]);
//# sourceMappingURL=meeting-meeting-module-es2015.js.map