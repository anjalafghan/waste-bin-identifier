webpackJsonp([3],{

/***/ 142:
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
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/barcode/barcode.module": [
		413,
		2
	],
	"../pages/main/main.module": [
		414,
		1
	],
	"../pages/welcome/welcome.module": [
		415,
		0
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
webpackAsyncContext.id = 185;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__barcode_barcode__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var url = 'http://192.168.1.118:3000/api/wastebin';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams, fb, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.http = http;
        this.loginform = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['']
        });
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.login = function () {
        var _this = this;
        this.http.post(url + "/authen", this.loginform.value).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__barcode_barcode__["a" /* BarcodePage */]);
        }, 2000);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/anjalafghan/Downloads/waste-bin-identifier-backend-takatak/waste-bin-identifier/src/pages/welcome/welcome.html"*/'\n\n\n<ion-content padding id="login">\n<ion-card id="mycard" class="shadow" >\n  <ion-card-content>\n    <ion-list id="mylist">\n<form [formGroup]="loginform" (ngSubmit)="login()">\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" formControlName="username"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" formControlName="password" ></ion-input>\n    </ion-item>\n<br>\n<button ion-button block type="submit">Submit &nbsp;&nbsp;&nbsp;&nbsp;<ion-icon name="log-in"></ion-icon></button>\n</form>\n    </ion-list>\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/anjalafghan/Downloads/waste-bin-identifier-backend-takatak/waste-bin-identifier/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(260);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_main_main__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_barcode_barcode__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_img_viewer__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer_ngx__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_barcode_barcode__["a" /* BarcodePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_main_main__["a" /* MainPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/barcode/barcode.module#BarcodePageModule', name: 'BarcodePage', segment: 'barcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["e" /* ReactiveFormsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_barcode_barcode__["a" /* BarcodePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_main_main__["a" /* MainPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer_ngx__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_main_main__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { WelcomePage } from '../pages/welcome/welcome';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        // rootPage:any = WelcomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_main_main__["a" /* MainPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/anjalafghan/Downloads/waste-bin-identifier-backend-takatak/waste-bin-identifier/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/anjalafghan/Downloads/waste-bin-identifier-backend-takatak/waste-bin-identifier/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BarcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BarcodePage = /** @class */ (function () {
    function BarcodePage(navCtrl, navParams, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
    }
    BarcodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BarcodePage');
    };
    BarcodePage.prototype.scan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (data) {
            // this is called when a barcode is found
            _this.num = data.text;
            if (_this.num != '') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__main_main__["a" /* MainPage */], {
                    param1: _this.num
                });
            }
        });
    };
    BarcodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-barcode',template:/*ion-inline-start:"/Users/anjalafghan/Downloads/waste-bin-identifier-backend-takatak/waste-bin-identifier/src/pages/barcode/barcode.html"*/'<!--\n  Generated template for the BarcodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Scan Your Bin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-item >\n    <button ion-button id="capture" (click)="scan()">Capture&nbsp;&nbsp;&nbsp;&nbsp; <ion-icon name="barcode"></ion-icon></button>\n  </ion-item>\n  </ion-content>\n'/*ion-inline-end:"/Users/anjalafghan/Downloads/waste-bin-identifier-backend-takatak/waste-bin-identifier/src/pages/barcode/barcode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], BarcodePage);
    return BarcodePage;
}());

//# sourceMappingURL=barcode.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer_ngx__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_barcode_barcode__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var url = 'http://192.168.1.118:3000/api/wastebin';
var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, navParams, camera, geo, alertCtrl, barcodeScanner, fb, http, ft) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.geo = geo;
        this.alertCtrl = alertCtrl;
        this.barcodeScanner = barcodeScanner;
        this.fb = fb;
        this.http = http;
        this.ft = ft;
        this.geo.getCurrentPosition().then(function (pos) {
            _this.Latitude = pos.coords.latitude;
            _this.Longitude = pos.coords.longitude;
        }).catch(function (err) { return console.log(err); });
        this.param1 = navParams.get('param1');
        this.tito = this.fb.group({
            qrdata: [this.param1, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            latitude: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            longitude: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            asset: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            condition: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            date: [Date(), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            pic: [''],
            pic1: [''],
            pic2: [''],
            pic3: [''],
            damage: ['']
        });
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage.prototype.ngOnInit = function () {
        this.photo = [];
    };
    MainPage.prototype.sub = function () {
        var _this = this;
        this.http.post(url + "/bindata", this.tito.value).subscribe(function (data) {
            console.log(data);
            var alert = _this.alertCtrl.create({
                title: 'Success',
                message: 'Submited successfully',
                buttons: ['OK']
            });
            alert.present();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_barcode_barcode__["a" /* BarcodePage */], {});
        }, function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'Failed',
                message: 'Data Cannot Submitted',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    MainPage.prototype.opencamera = function () {
        var _this = this;
        if (this.photo.length <= 3) {
            var options = {
                quality: 70,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                saveToPhotoAlbum: true,
                mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64 (DATA_URL):
                _this.myphoto = 'data:image/jpg;base64,' + imageData;
                _this.photo.push(_this.myphoto);
                _this.photo.reverse();
            }, function (err) {
                // Handle error
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Max Limit Reached',
                message: 'Cannot take more than 4 pictures ',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    MainPage.prototype.deletephoto = function (index) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Delete ?',
            message: 'Do you want to Delete the Picture?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.photo.splice(index, 1);
                    }
                }
            ]
        });
        confirm.present();
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"/Users/anjalafghan/Downloads/waste-bin-identifier-backend-takatak/waste-bin-identifier/src/pages/main/main.html"*/'\n<ion-header>\n  <ion-navbar  color="primary">\n    <ion-title>Bin Information</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="main">\n      <ion-card class="shadow">\n         <ion-card-header>\n           <ion-card-title text-center>\n             Your Bin : {{param1}}\n           </ion-card-title>\n         </ion-card-header>\n         <ion-card-content>\n           <form [formGroup]="tito">\n              <ion-grid>\n            <ion-row>\n              <ion-col col-6>\n                <ion-item id = "gray">\n                  <ion-label>Latitude:&nbsp;</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-6>\n                <ion-item id = "gray">\n                  <ion-input value="{{ Latitude }}"  readonly type="Number" formControlName="latitude">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ion-icon name="pin"></ion-icon></ion-input>\n                </ion-item>\n              </ion-col>\n              </ion-row>\n                  <ion-row>\n                    <ion-col col-6>\n                      <ion-item id = "gray">\n                        <ion-label>Longitude:&nbsp;</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                      <ion-item id = "gray">\n                        <ion-input value="{{ Longitude }}"  readonly type="Number" formControlName="longitude">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ion-icon name="pin"></ion-icon></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-list>\n                      <ion-item>\n                        <ion-label>Asset Type:</ion-label>\n                            <ion-select  formControlName="asset" id="asset" placeholder="Select Asset Type">\n                              <ion-option>Steel Bin</ion-option>\n                              <ion-option>Plastic Green</ion-option>\n                              <ion-option>Plastic Yellow</ion-option>\n                              <ion-option>Plastic Blue</ion-option>\n                              <ion-option>OCC age</ion-option>\n                          </ion-select>\n                      </ion-item>\n                    </ion-list>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-list>\n                      <ion-item>\n                        <ion-label>Condition:</ion-label>\n                        <ion-select [(ngModel)]="Condition" formControlName="condition" placeholder="Select Condition">\n                            <ion-option value="0">Good</ion-option>\n                            <ion-option value="1">Damaged</ion-option>\n                        </ion-select>\n                      </ion-item>\n                    </ion-list>\n                  </ion-col>\n                </ion-row>\n                <br>\n                <br>\n                <ion-row>\n                 <button ion-button block type="submit" *ngIf="Condition==0" (click)="sub()">Submit &nbsp;&nbsp;&nbsp;&nbsp;<ion-icon name="log-in"></ion-icon></button>\n                </ion-row>\n                <ion-row *ngIf="Condition==1">\n                   <button ion-button block  (click)="opencamera()" >Capture Image &nbsp;&nbsp;&nbsp;&nbsp;<ion-icon name="camera"></ion-icon> </button>\n                   <ion-grid>\n                       <ion-row>\n                   <ion-col col-6 *ngFor="let pic of photo; let id = index">\n                     <ion-icon name="close" class="deleteicon" (click)="deletephoto(id)"></ion-icon>\n                       <img src="{{ pic }}" *ngIf="pic" imageViewer  />\n\n                     </ion-col>\n                     <ion-input type="hidden" value="{{ photo[0] }}" formControlName="pic"></ion-input>\n                     <ion-input  type="hidden" value="{{ photo[1] }}" formControlName="pic1"></ion-input>\n                     <ion-input  type="hidden" value="{{ photo[2] }}" formControlName="pic2"></ion-input>\n                     <ion-input  type="hidden" value="{{ photo[3] }}" formControlName="pic3"></ion-input>\n\n                     </ion-row>\n                 </ion-grid>\n                   <ion-textarea class="borderText" formControlName="damage" placeholder="Explain the bin\'s Damage here"></ion-textarea>\n                 <button ion-button block type="submit" (click)="sub()">Submit &nbsp;&nbsp;&nbsp;&nbsp;<ion-icon name="log-in"></ion-icon></button>\n                 </ion-row>\n              </ion-grid>\n           </form>\n         </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/anjalafghan/Downloads/waste-bin-identifier-backend-takatak/waste-bin-identifier/src/pages/main/main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer_ngx__["a" /* FileTransfer */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ })

},[252]);
//# sourceMappingURL=main.js.map