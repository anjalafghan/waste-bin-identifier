webpackJsonp([0],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModalPageModule", function() { return UploadModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_modal__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UploadModalPageModule = (function () {
    function UploadModalPageModule() {
    }
    return UploadModalPageModule;
}());
UploadModalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__upload_modal__["a" /* UploadModalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__upload_modal__["a" /* UploadModalPage */]),
        ],
    })
], UploadModalPageModule);

//# sourceMappingURL=upload-modal.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_images_images__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadModalPage = (function () {
    function UploadModalPage(navCtrl, navParams, viewCtrl, imagesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.imagesProvider = imagesProvider;
        this.imageData = this.navParams.get('data');
    }
    UploadModalPage.prototype.saveImage = function () {
        var _this = this;
        this.imagesProvider.uploadImage(this.imageData, this.desc).then(function (res) {
            _this.viewCtrl.dismiss({ reload: true });
        }, function (err) {
            _this.dismiss();
        });
    };
    UploadModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return UploadModalPage;
}());
UploadModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-upload-modal',template:/*ion-inline-start:"C:\n\devdacticImageUpload\src\pages\upload-modal\upload-modal.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="dismiss()"><ion-icon name="close"></ion-icon></button>\n    </ion-buttons>\n    <ion-title>Upload Image</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <img [src]="imageData" style="width: 100%">\n  <ion-item>\n    <ion-input placeholder="My Awesome Image" [(ngModel)]="desc"></ion-input>\n  </ion-item>\n\n  <button ion-button full icon-left (click)="saveImage()">\n          <ion-icon name="checkmark"></ion-icon>\n          Save & Upload Image\n  </button>\n</ion-content>'/*ion-inline-end:"C:\n\devdacticImageUpload\src\pages\upload-modal\upload-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__providers_images_images__["a" /* ImagesProvider */]])
], UploadModalPage);

//# sourceMappingURL=upload-modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map