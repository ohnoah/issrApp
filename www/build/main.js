webpackJsonp([0],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var FirebaseServiceProvider = (function () {
    function FirebaseServiceProvider(afd) {
        this.afd = afd;
    }
    FirebaseServiceProvider.prototype.getText = function () {
        return this.afd.list('/text/');
    };
    FirebaseServiceProvider.prototype.getDishes = function () {
        return this.afd.list('/dishes/');
    };
    return FirebaseServiceProvider;
}());
FirebaseServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], FirebaseServiceProvider);

//# sourceMappingURL=firebase-service.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the StorageServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var StorageServiceProvider = (function () {
    function StorageServiceProvider(storage, afd) {
        this.storage = storage;
        this.afd = afd;
        this.postNames = ['post1', 'post2', 'post3', 'post4', 'post5', 'post6', 'post7', 'post8', 'post9', 'post9', 'post10', 'post11', 'post12', 'post13', 'post14', 'post15', 'post16', 'post17', 'post18', 'post19', 'post20'];
    }
    StorageServiceProvider.prototype.storeLocalDishes = function () {
        var _this = this;
        var offlineDishes = this.afd.list('/dishes/', { preserveSnapshot: true });
        var sub = offlineDishes.take(5).subscribe(function (data) {
            data.forEach(function (element) {
                _this.storage.set(element.key, element.node_.value_).then(function () {
                    console.log(element.key + element.node_.value_);
                    console.log('stored');
                });
            });
        });
    };
    StorageServiceProvider.prototype.getLocalDishes = function () {
        var returnArr = [];
        for (var j = 0; j < 5; j++) {
            this.storage.get((j + 1).toString()).then(function (data) {
                if (data != null) {
                    returnArr.push(data);
                }
                else {
                    returnArr.push('Error occured');
                }
            });
        }
        return returnArr;
    };
    return StorageServiceProvider;
}());
StorageServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], StorageServiceProvider);

//# sourceMappingURL=storage-service.js.map

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 191:
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
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__food_food__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__food_food__["a" /* FoodPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\issrAppv2\issrApp2\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Food" tabIcon="cafe"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="mail"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\issrAppv2\issrApp2\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_storage_service_storage_service__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FoodPage = (function () {
    function FoodPage(storageService, storage, navCtrl, network, fbs, afd) {
        this.storageService = storageService;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.network = network;
        this.fbs = fbs;
        this.afd = afd;
        this.dishes = [];
        this.offlineArr = [];
        this.weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        this.online = true;
        this.offlineOnLoad = false;
    }
    FoodPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.online = true;
        if (this.network.type == 'none') {
            this.online = false;
            this.offlineOnLoad = true;
        }
        setTimeout(function () {
            if (_this.online) {
                //load data from firebase and hide spinner when done
                _this.offlineOnLoad = false;
                var sub_1 = _this.afd.list('/dishes/', { preserveSnapshot: true }).subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        console.log(snapshot.key, snapshot.node_.value_);
                        _this.dishes[snapshot.key - 1] = snapshot.node_.value_;
                        _this.storage.set(snapshot.key, snapshot.node_.value_).then(function () {
                            console.log('stored');
                        });
                    });
                    sub_1.unsubscribe();
                });
                /*let dishSub = this.dishes.subscribe(() => {
                    this.showSpinner = false;
                    //store data into local once its loaded
                    this.storageService.storeLocalDishes();
                    
                })
                  */
            }
            refresher.complete();
        }, 2000);
    };
    FoodPage.prototype.setUp = function () {
        var _this = this;
        /// checks for onlineness and updates local storage
        this.showSpinner = true;
        if (this.network.type == 'none') {
            this.online = false;
        }
        setTimeout(function () {
            if (_this.online) {
                //load data from firebase and hide spinner when done
                //this.dishes = this.fbs.getDishes();
                var sub_2 = _this.afd.list('/dishes/', { preserveSnapshot: true }).subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        console.log(snapshot.key, snapshot.node_.value_);
                        _this.dishes[snapshot.key - 1] = snapshot.node_.value_;
                        _this.storage.set(snapshot.key, snapshot.node_.value_).then(function () {
                            console.log('stored');
                        });
                    });
                    sub_2.unsubscribe();
                    _this.showSpinner = false;
                });
                var b_1 = setInterval(function () {
                    {
                        if (_this.online == false) {
                            clearInterval(b_1);
                        }
                        for (var _i = 0, _a = _this.dishes; _i < _a.length; _i++) {
                            var dish = _a[_i];
                            _this.storage.set(_this.dishes.indexOf(dish).toString(), dish).then(function () {
                                console.log('stored');
                            });
                        }
                    }
                }, 30000);
            }
            else if (_this.online == false) {
                _this.offlineOnLoad = true;
                //get latest data from local storage
                _this.offlineArr = _this.storageService.getLocalDishes();
                _this.showSpinner = false;
            }
        }, 2000);
    };
    FoodPage.prototype.ngOnInit = function () {
        this.setUp();
    };
    return FoodPage;
}());
FoodPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-food',template:/*ion-inline-start:"C:\issrAppv2\issrApp2\src\pages\food\food.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Food\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid>\n    <div class=\'headers\'>\n      <ion-row>\n        <ion-col lines col-5>\n          <h2><ion-icon md=\'md-calendar\' ios=\'ios-calendar-outline\' color=\'primary\'></ion-icon></h2>\n            <h3>Weekday</h3></ion-col>\n        <ion-col col-7>\n          <h2><ion-icon md=\'md-wine\' ios=\'ios-wine\' color=\'primary\'></ion-icon></h2>\n          <h3>Dish</h3></ion-col>\n      </ion-row>\n      </div>\n      \n      <div *ngIf=\'offlineOnLoad; else onlineOnLoad\' class=\'food\'>\n        <ion-row *ngFor = \'let food of offlineArr; let i = index\'>\n            <ion-col col-5 class=\'day\'><p>{{weekdays[i]}}</p></ion-col>\n            <ion-col col-7 class=\'dish\'><p>{{food}}</p></ion-col>\n        </ion-row>\n      </div>\n      <ng-template #onlineOnLoad>\n        <div class=\'food\'>\n        <ion-row *ngFor = \'let dish of dishes; let i = index\'>\n          <ion-col col-5 class=\'day\'><p>{{weekdays[i]}}</p></ion-col>\n          <ion-col col-7 class=\'dish\'><p>{{dish}}</p></ion-col>\n        </ion-row>\n        </div>\n      </ng-template>\n    </ion-grid>\n  <div id=\'spin\'>\n    <ion-spinner *ngIf=\'showSpinner\' ios=\'ios\' md=\'circles\'></ion-spinner>\n  </div>\n\n</ion-content>\n\n      \n\n'/*ion-inline-end:"C:\issrAppv2\issrApp2\src\pages\food\food.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_storage_service_storage_service__["a" /* StorageServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
], FoodPage);

//# sourceMappingURL=food.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\issrAppv2\issrApp2\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n\n <ion-list>\n    <ion-list-header>ISSR Student Union Contact:</ion-list-header>\n      <ion-item no-lines>\n      <ion-icon ios="logo-facebook" md="logo-facebook" item-left></ion-icon>\n      Corporus Studentis\n      </ion-item>\n     \n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>Made Possible By:</ion-list-header>\n      <ion-item no-lines>\n        <ion-icon name="code" item-left></ion-icon>\n        Noah Ö\n      </ion-item>\n      <ion-item no-lines>\n        <ion-icon name="eye" item-left></ion-icon>\n        Sara S\n      </ion-item>\n  </ion-list>\n<ion-list>\n    <ion-list-header>For questions:</ion-list-header>\n      <ion-item no-lines>\n        <ion-icon name="code" item-left></ion-icon>\n        gyelevensapp@gmail.com\n      </ion-item>\n      \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\issrAppv2\issrApp2\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_service_storage_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(alertCtrl, storage, afd, network, platform, navCtrl, fbs, storageService) {
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.afd = afd;
        this.network = network;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.fbs = fbs;
        this.storageService = storageService;
        this.posts = [];
        this.online = true;
        this.offlineOnLoad = false;
    }
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.online = true;
        if (this.network.type == 'none') {
            this.online = false;
            this.offlineOnLoad = true;
        }
        else {
            var sub_1 = this.afd.list('/text/', { preserveSnapshot: true }).subscribe(function (snapshots) {
                snapshots.forEach(function (snapshot) {
                    console.log(snapshot.key, snapshot.node_.value_);
                    _this.posts[snapshot.key - 1] = snapshot.node_.value_;
                });
                sub_1.unsubscribe();
            });
        }
        refresher.complete();
    };
    HomePage.prototype.setUp = function () {
        var _this = this;
        /// checks for onlineness and updates local storage
        this.showSpin = true;
        if (this.network.type == 'none') {
            this.online = false;
        }
        setTimeout(function () {
            if (_this.online) {
                var sub_2 = _this.afd.list('/text/', { preserveSnapshot: true }).subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        console.log(snapshot.key, snapshot.node_.value_);
                        _this.posts[snapshot.key - 1] = snapshot.node_.value_;
                    });
                    _this.showSpin = false;
                    sub_2.unsubscribe();
                });
                /*this.posts.subscribe(() => {
                  this.showSpin = false;
                  
                })*/
            }
            else if (_this.online === false) {
                _this.offlineOnLoad = true;
                _this.showSpin = false;
            }
        }, 2000);
    };
    HomePage.prototype.ngOnInit = function () {
        this.setUp();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\issrAppv2\issrApp2\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home - Latest News</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class=\'scroll-content\'>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div *ngIf = \'offlineOnLoad; else onlineOnLoad\' class=\'offlineErr\'>\n    <h3>No Internet connection was detected. Please reconnect to see the latest news.</h3>\n    <h2><ion-icon ios="ios-alert-outline" md="md-alert"></ion-icon></h2>\n    \n  </div>\n  \n   <ng-template #onlineOnLoad>\n    <div class=\'title\'>\n        <h3 *ngIf=\'!showSpin\' ><ion-icon ios=\'ios-information-circle-outline\' md=\'md-information-circle\' color=\'primary\'></ion-icon></h3>\n        <ion-spinner *ngIf=\'showSpin\' ios=\'ios\' md=\'circles\'></ion-spinner>\n    </div>\n    <ion-card *ngFor=\'let post of posts\'>\n      <ion-card-header><strong>{{ post.split("|")[2] }}</strong></ion-card-header>\n      <div *ngIf=\'post.split("|")[1].length > 170; else fullOnlineText\' class=\'content\'>\n        <ion-card-content >{{  post.split("|")[1].substring(0,170)  }}... </ion-card-content>\n      </div>\n      <ng-template #fullOnlineText class=\'content\'> <ion-card-content>{{  post.split("|")[1]  }}</ion-card-content> </ng-template>\n      <div id=\'postimg\'>\n          <img [src]=\'post.split("|")[0]\'>\n      </div>\n      </ion-card>\n    </ng-template>\n \n</ion-content>\n\n\n\n\n'/*ion-inline-end:"C:\issrAppv2\issrApp2\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_service_storage_service__["a" /* StorageServiceProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(292);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_food_food__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_firebase_service_firebase_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_storage_service_storage_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_network__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var firebaseConfig = {
    apiKey: "AIzaSyCScP4a5jC22czwEwWIFoEj85M52oDrc-w",
    authDomain: "issrappproject.firebaseapp.com",
    databaseURL: "https://issrappproject.firebaseio.com",
    projectId: "issrappproject",
    storageBucket: "issrappproject.appspot.com",
    messagingSenderId: "235338919293"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_food_food__["a" /* FoodPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14__angular_http__["a" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_food_food__["a" /* FoodPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_network__["a" /* Network */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_storage_service_storage_service__["a" /* StorageServiceProvider */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\issrAppv2\issrApp2\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\issrAppv2\issrApp2\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[276]);
//# sourceMappingURL=main.js.map