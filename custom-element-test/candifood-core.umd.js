(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common/http'), require('@angular/router'), require('@angular/forms'), require('@ng-bootstrap/ng-bootstrap'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/free-brands-svg-icons'), require('@angular/common'), require('@fortawesome/angular-fontawesome'), require('@angular/elements')) :
    typeof define === 'function' && define.amd ? define('@candifood/core', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common/http', '@angular/router', '@angular/forms', '@ng-bootstrap/ng-bootstrap', '@fortawesome/free-solid-svg-icons', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-brands-svg-icons', '@angular/common', '@fortawesome/angular-fontawesome', '@angular/elements'], factory) :
    (factory((global.candifood = global.candifood || {}, global.candifood.core = {}),global.ng.core,global.rxjs,global.rxjs.operators,global.ng.common.http,global.ng.router,global.ng.forms,null,null,null,null,global.ng.common,null,global.ng.elements));
}(this, (function (exports,i0,rxjs,operators,http,router,forms,ngBootstrap,freeSolidSvgIcons,fontawesomeSvgCore,freeBrandsSvgIcons,common,angularFontawesome,elements) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SuccessAlert = (function () {
        function SuccessAlert(title, subTitle, text, closeDelay) {
            this.title = title;
            this.subTitle = subTitle;
            this.text = text;
            this.closeDelay = closeDelay;
            this.type = 'success';
        }
        return SuccessAlert;
    }());
    var InfoAlert = (function () {
        function InfoAlert(title, subTitle, text, closeDelay) {
            this.title = title;
            this.subTitle = subTitle;
            this.text = text;
            this.closeDelay = closeDelay;
            this.type = 'info';
        }
        return InfoAlert;
    }());
    var WarningAlert = (function () {
        function WarningAlert(title, subTitle, text, closeDelay) {
            this.title = title;
            this.subTitle = subTitle;
            this.text = text;
            this.closeDelay = closeDelay;
            this.type = 'warning';
        }
        return WarningAlert;
    }());
    var DangerAlert = (function () {
        function DangerAlert(title, subTitle, text, closeDelay) {
            this.title = title;
            this.subTitle = subTitle;
            this.text = text;
            this.closeDelay = closeDelay;
            this.type = 'danger';
        }
        return DangerAlert;
    }());
    var AlertService = (function () {
        function AlertService() {
            this._alerts = new rxjs.ReplaySubject();
        }
        /**
         * Sends a message to be seen globally.
         * @param {?} m
         * @return {?}
         */
        AlertService.prototype.alert = /**
         * Sends a message to be seen globally.
         * @param {?} m
         * @return {?}
         */
            function (m) {
                this._alerts.next(m);
            };
        Object.defineProperty(AlertService.prototype, "alerts", {
            get: /**
             * @return {?}
             */ function () {
                return this._alerts.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        AlertService.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        AlertService.ctorParameters = function () { return []; };
        return AlertService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AppService = (function () {
        function AppService() {
        }
        AppService.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        AppService.ctorParameters = function () { return []; };
        return AppService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} init
     * @return {?}
     */
    function appInitFactory(init) {
        return function () { return init.load().toPromise(); };
    }
    var AppInitService = (function () {
        function AppInitService() {
        }
        /**
         * @return {?}
         */
        AppInitService.prototype.load = /**
         * @return {?}
         */
            function () {
                return rxjs.Observable.create()
                    .pipe(operators.map(function (res) {
                    // can run other app initializations here that must be run after the config has been loaded
                    // can also run then in other APP_INITIALIZERS
                    return res;
                }));
            };
        AppInitService.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        AppInitService.ctorParameters = function () { return []; };
        return AppInitService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EncryptionService = (function () {
        function EncryptionService() {
        }
        /**
         * @param {?} userId
         * @return {?}
         */
        EncryptionService.prototype.encryptAndGet = /**
         * @param {?} userId
         * @return {?}
         */
            function (userId) {
                // Pads a given string with whitespace to make it 16 chars. long
                var /** @type {?} */ padString = function (source) {
                    var /** @type {?} */ paddingChar = ' ';
                    var /** @type {?} */ size = 16;
                    var /** @type {?} */ padLength = size - source.length;
                    for (var /** @type {?} */ i = 0; i < padLength; i++) {
                        source += paddingChar;
                    }
                    return source;
                };
                // Get key and IV from configuration
                //    const key = CryptoJS.enc.Hex.parse(environment.ga.key);
                //    const iv = CryptoJS.enc.Hex.parse(environment.ga.iv);
                // Get padded value
                var /** @type {?} */ padMsg = padString(userId);
                // Encrypt with a constant IV to always get a deterministic output
                /*const encrypted = CryptoJS.AES.encrypt(
                      padMsg,
                      key,
                      {
                        iv: iv,
                        padding: CryptoJS.pad.Pkcs7,
                        mode: CryptoJS.mode.CBC
                      }
                    );*/
                // return the cipher-text
                // return encrypted.toString();
                return userId;
            };
        EncryptionService.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        EncryptionService.ctorParameters = function () { return []; };
        return EncryptionService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UserService = (function () {
        function UserService(encryptionService, httpClient) {
            this.encryptionService = encryptionService;
            this.httpClient = httpClient;
            this._user = new rxjs.ReplaySubject();
        }
        Object.defineProperty(UserService.prototype, "user", {
            get: /**
             * @return {?}
             */ function () {
                return this._user.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserService.prototype, "isAuthenticated", {
            get: /**
             * @return {?}
             */ function () {
                return this.userAuthorizations;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} url
         * @param {?=} email
         * @param {?=} password
         * @return {?}
         */
        UserService.prototype.getCurrentUser = /**
         * @param {?} url
         * @param {?=} email
         * @param {?=} password
         * @return {?}
         */
            function (url, email, password) {
                var _this = this;
                return this.httpClient
                    .post(url, { 'email': email, 'password': password })
                    .pipe(operators.map(function (response) {
                    if (response[0]['email'] != null) {
                        _this.userAuthorizations = response[0];
                        _this._user.next(response[0]);
                    }
                    return response;
                }));
            };
        UserService.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        UserService.ctorParameters = function () {
            return [
                { type: EncryptionService },
                { type: http.HttpClient }
            ];
        };
        return UserService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AuthGuardService = (function () {
        function AuthGuardService(userService, router$$1) {
            this.userService = userService;
            this.router = router$$1;
        }
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        AuthGuardService.prototype.canActivate = /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
            function (route, state) {
                // if logged in
                if (this.userService.isAuthenticated) {
                    return true;
                    // If not logged in but we want to attempt to initialize the user information
                    // due to APP_INITIALIZER based authentication happening
                }
                else {
                    this.router.navigate(['/login'], {
                        replaceUrl: true,
                        queryParams: {
                            returnUrl: state.url
                        }
                    });
                    return false;
                }
            };
        AuthGuardService.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        AuthGuardService.ctorParameters = function () {
            return [
                { type: UserService },
                { type: router.Router }
            ];
        };
        return AuthGuardService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CoreService = (function () {
        function CoreService() {
        }
        CoreService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        CoreService.ctorParameters = function () { return []; };
        /** @nocollapse */ CoreService.ngInjectableDef = i0.defineInjectable({ factory: function CoreService_Factory() { return new CoreService(); }, token: CoreService, providedIn: "root" });
        return CoreService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FilterPipe = (function () {
        function FilterPipe() {
        }
        /**
         * @param {?} items
         * @param {?} searchText
         * @return {?}
         */
        FilterPipe.prototype.transform = /**
         * @param {?} items
         * @param {?} searchText
         * @return {?}
         */
            function (items, searchText) {
                if (!items) {
                    return [];
                }
                if (!searchText) {
                    return items;
                }
                searchText = searchText.toLowerCase();
                return items.filter(function (it) {
                    return it.name.toLowerCase().includes(searchText);
                });
            };
        FilterPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'filter'
                    },] },
        ];
        return FilterPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GoogleAnalyticsService = (function () {
        /**
         * This is first initialized in the app shell (app component)
         * therefore it is fine to put the ga('create') in its constructor.
         */
        function GoogleAnalyticsService(cu) {
            this.cu = cu;
            if (this.trackAnalytics && this.ga.trackingId) {
                ga('create', this.ga.trackingId, 'auto');
            }
            else {
                console.warn("Google Analytics has not been configured for this deployment.\n      Either trackAnalytics has not been set in the configuration.json or ga.trackingId has not been provided in the configuration.");
            }
        }
        /**
         * @param {?} url
         * @return {?}
         */
        GoogleAnalyticsService.prototype.sendPageViewData = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                if (this.trackAnalytics) {
                    ga('set', 'page', url);
                    ga('set', 'dimension1', this.cu.encryptedUserIdentifier);
                    ga('set', 'userId', this.cu.encryptedUserIdentifier);
                    ga('send', 'pageview');
                }
            };
        /**
         * @param {?} eventCategory
         * @param {?} eventAction
         * @param {?} eventLabel
         * @return {?}
         */
        GoogleAnalyticsService.prototype.sendEventData = /**
         * @param {?} eventCategory
         * @param {?} eventAction
         * @param {?} eventLabel
         * @return {?}
         */
            function (eventCategory, eventAction, eventLabel) {
                if (this.trackAnalytics) {
                    // ga send event with encrypted  user id. GA generated the term 'dimension1'. This cannot be modified.
                    ga('send', 'event', eventCategory, eventAction, eventLabel, { 'dimension1': this.cu.encryptedUserIdentifier });
                }
            };
        GoogleAnalyticsService.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        GoogleAnalyticsService.ctorParameters = function () {
            return [
                { type: UserService }
            ];
        };
        return GoogleAnalyticsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ GEOLOCATION_ERRORS = {
        'errors.location.unsupportedBrowser': 'Browser does not support location services',
        'errors.location.permissionDenied': 'You have rejected access to your location',
        'errors.location.positionUnavailable': 'Unable to determine your location',
        'errors.location.timeout': 'Service timeout has been reached'
    };
    var MapService = (function () {
        function MapService(ngZone) {
            this.ngZone = ngZone;
            this.locationBehaviorSubject = new rxjs.Subject();
            this.coordinatesBehaviorSubject = new rxjs.Subject();
            this.type = 'restaurant';
            this.keyword = 'restaurant';
        }
        /**
         * @param {?} opts
         * @return {?}
         */
        MapService.prototype.getBrowserCoordinates = /**
         * @param {?} opts
         * @return {?}
         */
            function (opts) {
                var _this = this;
                return new rxjs.Observable(function (observer) {
                    if (window.navigator && window.navigator.geolocation) {
                        window.navigator.geolocation.getCurrentPosition(function (coordinates) {
                            _this.coordinates = coordinates.coords;
                            observer.next(coordinates);
                            _this.coordinatesBehaviorSubject.next(coordinates);
                            // we are not completing the observable as we will call it multiple time
                            observer.complete();
                        }, function (error) {
                            switch (error.code) {
                                case 1:
                                    observer.error(GEOLOCATION_ERRORS['errors.location.permissionDenied']);
                                    break;
                                case 2:
                                    observer.error(GEOLOCATION_ERRORS['errors.location.positionUnavailable']);
                                    break;
                                case 3:
                                    observer.error(GEOLOCATION_ERRORS['errors.location.timeout']);
                                    break;
                            }
                        }, opts);
                    }
                    else {
                        observer.error(GEOLOCATION_ERRORS['errors.location.unsupportedBrowser']);
                    }
                });
            };
        /**
         * @param {?} latLngValue
         * @return {?}
         */
        MapService.prototype.getAddressFromCoordinates = /**
         * @param {?} latLngValue
         * @return {?}
         */
            function (latLngValue) {
                var _this = this;
                return new rxjs.Observable(function (observer) {
                    _this.geocoder = _this.geocoder || new ((window)).google.maps.Geocoder();
                    _this.latLng = _this.latLng || new ((window)).google.maps.LatLng(latLngValue.latitude, latLngValue.longitude);
                    _this.geocoder.geocode({ 'latLng': _this.latLng }, function (results, status) {
                        if (status === ((window)).google.maps.GeocoderStatus.OK) {
                            var /** @type {?} */ newLocation = _this.processFullLocation(results[0]);
                            newLocation.latitude = latLngValue.latitude;
                            newLocation.longitude = latLngValue.longitude;
                            _this.location = newLocation;
                            _this.locationBehaviorSubject.next(newLocation);
                            observer.next(newLocation);
                            observer.complete();
                        }
                        else {
                            observer.error('LatLng: ' + JSON.stringify(latLngValue) + ', status : ' + status);
                        }
                    });
                });
            };
        /**
         * @param {?} userLocation
         * @return {?}
         */
        MapService.prototype.getRestaurantsFromGoogleMap = /**
         * @param {?} userLocation
         * @return {?}
         */
            function (userLocation) {
                var _this = this;
                return new rxjs.Observable(function (observer) {
                    var /** @type {?} */ keyword = 'restaurant';
                    var /** @type {?} */ search = {
                        keyword: '',
                        radius: '',
                        location: {},
                        types: [],
                    };
                    var /** @type {?} */ restaurants = [];
                    var /** @type {?} */ mapOptions = {
                        zoom: 8,
                        center: new ((window)).google.maps.LatLng(userLocation.latitude, userLocation.longitude),
                        mapTypeId: ((window)).google.maps.MapTypeId.ROADMAP
                    };
                    var /** @type {?} */ places = new ((window)).google.maps.places.PlacesService(_this.map);
                    {
                        search.keyword = keyword;
                        console.log('keyword found and setting it to filter that particular types of restaurant!');
                    }
                    search.types = ['restaurant'];
                    if (search.types || search.keyword) {
                        // search.rankBy = (<any>window).google.maps.places.RankBy.DISTANCE;
                        search.location = new ((window)).google.maps.LatLng(userLocation.latitude, userLocation.longitude);
                        var /** @type {?} */ centerMarker = new ((window)).google.maps.Marker({
                            position: search.location,
                            animation: ((window)).google.maps.Animation.DROP,
                            map: ((window)).google.maps.map
                        });
                    }
                    else {
                        console.log('nearbyrestaurant: setting the laglng:%o', userLocation);
                        // search.bounds = (<any>window).google.map.getBounds();
                    }
                    search.location = { lat: userLocation.latitude, lng: userLocation.longitude };
                    search.radius = '10000';
                    places.nearbySearch(search, function (results, status) {
                        if (status === ((window)).google.maps.places.PlacesServiceStatus.OK) {
                            for (var /** @type {?} */ i = 0; i < results.length; i++) {
                                var /** @type {?} */ location_1 = results[i].vicinity.split(',');
                                var /** @type {?} */ restaurant = {
                                    name: results[i].name,
                                    types: results[i].types,
                                    rating: results[i].rating,
                                    googlePlaceId: results[i].place_id,
                                    latitude: results[i].geometry.location.lat(),
                                    longitude: results[i].geometry.location.lng(),
                                    owner: 'google',
                                    openTime: '11:00 AM',
                                    closeTime: '11:00 PM',
                                    address: location_1[0] + ', ' + location_1[1],
                                    locality1: location_1[location_1.length - 3],
                                    locality2: location_1[location_1.length - 2],
                                    city: location_1[location_1.length - 1]
                                };
                                restaurants.push(restaurant);
                            }
                            observer.next(restaurants);
                        }
                        else {
                            var /** @type {?} */ restaurant = { 'name': null };
                            restaurants.push(restaurant);
                            observer.next(restaurants);
                        }
                        observer.complete();
                    });
                });
            };
        /**
         * @param {?} googlePlaceId
         * @return {?}
         */
        MapService.prototype.getGoogleMapPlaceDetail = /**
         * @param {?} googlePlaceId
         * @return {?}
         */
            function (googlePlaceId) {
                var _this = this;
                return new rxjs.Observable(function (observer) {
                    // console.log('getGoogleMapPlaceDetail|parameter:%o', googlePlaceId);
                    var /** @type {?} */ places = new ((window)).google.maps.places.PlacesService(_this.map);
                    places.getDetails({ placeId: googlePlaceId }, function (place, status) {
                        console.log('_mapService|fetched from map|place::::%o and status: %o', place, status);
                        if (status === ((window)).google.maps.places.PlacesServiceStatus.OK) {
                            var /** @type {?} */ phone = void 0;
                            if (typeof place.international_phone_number !== 'undefined') {
                                phone = place.international_phone_number;
                            }
                            else if (typeof place.formatted_phone_number !== 'undefined') {
                                phone = place.formatted_phone_number;
                            }
                            else {
                                phone = '+14156509102';
                            }
                            var /** @type {?} */ restro = {
                                place_id: place.place_id,
                                phone: phone,
                                website: place.website,
                                url: place.url
                            };
                            observer.next(restro);
                        }
                        else {
                            console.log('Unable to get phone number, email, url, website from google. error: %o', status);
                            observer.error('Unable to get phone number, email, url, website from google. error:' + status);
                        }
                    });
                });
            };
        /**
         * @param {?} googlePlaceId
         * @return {?}
         */
        MapService.prototype.getGoogleMapPhotos = /**
         * @param {?} googlePlaceId
         * @return {?}
         */
            function (googlePlaceId) {
                return new rxjs.Observable(function (observer) {
                    // console.log('getGoogleMapPlaceDetail|parameter:%o', googlePlaceId);
                    var /** @type {?} */ map = new ((window)).google.maps.Map(document.getElementById('map-canvas'));
                    var /** @type {?} */ places = new ((window)).google.maps.places.PlacesService(map);
                    places.getDetails({ placeId: googlePlaceId }, function (place, status) {
                        console.log('mapService|fetched from map|place::::%o and status: %o', place, status);
                        if (status === ((window)).google.maps.places.PlacesServiceStatus.OK) {
                            var /** @type {?} */ phone = void 0;
                            if (typeof place.international_phone_number !== 'undefined') {
                                phone = place.international_phone_number;
                            }
                            else if (typeof place.formatted_phone_number !== 'undefined') {
                                phone = place.formatted_phone_number;
                            }
                            else {
                                phone = '+1 415 650 9102';
                            }
                            var /** @type {?} */ restro = {
                                place_id: place.place_id,
                                phone: phone,
                                website: place.website,
                                url: place.url
                            };
                            observer.next(restro);
                        }
                        else {
                            console.log('Unable to get phone number, email, url, website from google. error: %o', status);
                            observer.error('Unable to get phone number, email, url, website from google. error:' + status);
                        }
                    });
                });
            };
        /**
         * @param {?} searchElementRef
         * @param {?} output
         * @return {?}
         */
        MapService.prototype.autoComplete = /**
         * @param {?} searchElementRef
         * @param {?} output
         * @return {?}
         */
            function (searchElementRef, output) {
                var _this = this;
                // load Places Autocomplete
                // this.mapsAPILoader.load().then(() => {
                var /** @type {?} */ autoComplete = new ((window)).google.maps.places.Autocomplete(searchElementRef.nativeElement, {
                    types: ['address']
                });
                autoComplete.addListener('place_changed', function () {
                    _this.ngZone.run(function () {
                        // get the place result
                        var /** @type {?} */ place = autoComplete.getPlace();
                        // verify result
                        if (place.geometry === undefined || place.geometry === null) {
                            return;
                        }
                        place = _this.processFullLocation(place);
                        // change the location to new location
                        // change the location to new location
                        _this.location = new rxjs.Observable(function (observer) {
                            observer.next(place);
                        });
                        // send changed address back
                        output.emit(place);
                    });
                });
                // });
            };
        /**
         * @param {?} userLocation
         * @return {?}
         */
        MapService.prototype.storeAndUpdateRestaurantsManual = /**
         * @param {?} userLocation
         * @return {?}
         */
            function (userLocation) {
                var _this = this;
                return rxjs.Observable.create(function (observer) {
                    _this.getRestaurantsFromGoogleMap(userLocation).subscribe(function (userNearbyRestaurants) {
                        console.log('storeAndUpdateRestaurantsManual|userNearbyRestaurants:%o', userNearbyRestaurants);
                        for (var /** @type {?} */ i = 0; i < userNearbyRestaurants.restaurant.length; i++) {
                            // $rootScope.restaurant.items.splice(0, 0, userNearbyRestaurants.restaurant[i]);
                            // console.log("map restaurant added:%0", userNearbyRestaurants.restaurant[i]);
                        }
                        /*this.httpClient.post('restaurant/addList', userNearbyRestaurants).sunscribe( (results) => {
                                  observer.resolve(results.data);
                                }, (error) => {
                                  console.log('Error while storing fetched restaurants from google map! :: ' + error);
                                  observer.reject(error);
                                });*/
                    });
                });
            };
        /**
         * @param {?} googleLocation
         * @return {?}
         */
        MapService.prototype.processFullLocation = /**
         * @param {?} googleLocation
         * @return {?}
         */
            function (googleLocation) {
                var /** @type {?} */ candifoodLocation = {};
                var /** @type {?} */ gAddress = googleLocation.address_components;
                for (var /** @type {?} */ prop in googleLocation) {
                    if (typeof googleLocation[prop] === 'string') {
                        candifoodLocation[prop] = googleLocation[prop];
                    }
                }
                candifoodLocation['latitude'] = googleLocation.geometry.location.lat();
                candifoodLocation['longitude'] = googleLocation.geometry.location.lng();
                for (var /** @type {?} */ i = 0; i < gAddress.length; i++) {
                    candifoodLocation[gAddress[i].types[0]] = String(gAddress[i].long_name).trim();
                }
                if (typeof googleLocation.photos === 'object') {
                    for (var /** @type {?} */ photo in googleLocation.photos) {
                    }
                }
                return candifoodLocation;
            };
        MapService.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        MapService.ctorParameters = function () {
            return [
                { type: i0.NgZone }
            ];
        };
        return MapService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NoAuthGuardService = (function () {
        function NoAuthGuardService(currentUserService, router$$1) {
            this.currentUserService = currentUserService;
            this.router = router$$1;
        }
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        NoAuthGuardService.prototype.canActivate = /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
            function (route, state) {
                if (this.useBasicAuth) {
                    return true;
                }
                else {
                    this.router.navigate(['/'], {
                        replaceUrl: true,
                    });
                    return false;
                }
            };
        NoAuthGuardService.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        NoAuthGuardService.ctorParameters = function () {
            return [
                { type: UserService },
                { type: router.Router }
            ];
        };
        return NoAuthGuardService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AlertsComponent = (function () {
        function AlertsComponent(alerter) {
            this.alerter = alerter;
            this.alerts = [];
        }
        /**
         * @return {?}
         */
        AlertsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.alerter.alerts.subscribe(function (a) {
                    _this.delay = (a.closeDelay) * 1000;
                    // push it on to show
                    // push it on to show
                    _this.alerts = _this.alerts.concat(a);
                    // close the alert after 5 seconds by default
                    // have to use timer -> map instead of delay because delay can't currently
                    // be properly unit tested due to fakeAsync issues.
                    rxjs.timer(_this.delay).pipe(operators.take(1), operators.map(function () { return a; })).subscribe(function (al) { return _this.closeAlert(al); });
                });
            };
        /**
         * @param {?} al
         * @return {?}
         */
        AlertsComponent.prototype.closeAlert = /**
         * @param {?} al
         * @return {?}
         */
            function (al) {
                var /** @type {?} */ index = this.alerts.indexOf(al);
                this.alerts.splice(index, 1);
            };
        AlertsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cfs-alerts',
                        template: "<div class=\"sd-alerts\">\n  <ngb-alert *ngFor=\"let alert of alerts\" [type]=\"alert.type\" (close)=\"closeAlert(alert)\">\n    <h4> {{ alert.title }} </h4>\n    <h6> {{ alert.subTitle }} </h6>\n    <p> {{ alert.text }} </p>\n  </ngb-alert>\n</div>\n",
                        styles: [".sd-alerts{position:fixed;top:0;left:50%;z-index:10000000;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);margin-top:1rem;max-width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        AlertsComponent.ctorParameters = function () {
            return [
                { type: AlertService }
            ];
        };
        AlertsComponent.propDecorators = {
            alerts: [{ type: i0.Input }]
        };
        return AlertsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ChangeLocationModelComponent = (function () {
        function ChangeLocationModelComponent(activeModal, mapService) {
            this.activeModal = activeModal;
            this.mapService = mapService;
            this.output = new i0.EventEmitter();
            // add fontawesome icons to use
            fontawesomeSvgCore.library.add(freeSolidSvgIcons.faStreetView, freeSolidSvgIcons.faUtensilSpoon);
            this.searchForm = new forms.FormGroup({
                term: new forms.FormControl('', [forms.Validators.required]),
            });
        }
        /**
         * @return {?}
         */
        ChangeLocationModelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                // create search FormControl
                this.searchControl = new forms.FormControl();
                this.mapService.autoComplete(this.searchElementRef, this.output);
            };
        /**
         * @return {?}
         */
        ChangeLocationModelComponent.prototype.onSubmit = /**
         * @return {?}
         */
            function () {
                if (this.searchForm.valid) ;
            };
        ChangeLocationModelComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cfs-change-location-model',
                        template: "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Change Location</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n            <fa-icon [icon]=\"['fas', 'street-view']\"></fa-icon>\n          </div>\n        </div>\n        <input type=\"text\" name=\"term\" placeholder=\"Start typing address...\"\n               autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" class=\"form-control\"\n               #search [formControl]=\"searchControl\">\n\n      </div>\n      <small><b>Current location:</b> {{input && input.formatted_address || 'Please select your location'}}</small>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button class=\"btn btn-warning\" (click)=\"activeModal.dismiss('Done')\">Done</button>\n</div>\n",
                        styles: [".location-change-modal .modal-content{background-color:#f78639;border-radius:0}.location-change-modal .modal-content .close{color:#fff}.location-change-modal .modal-content .modal-header{background-color:#f78639;color:#fff}.location-change-modal .modal-content .modal-body{background-color:#fff;color:#000}.location-change-modal .modal-content .modal-footer{background-color:#f6f7f6;color:#6d6d6d}.full-width{width:100%}agm-map{height:300px}.pac-container{z-index:9999}"],
                        encapsulation: i0.ViewEncapsulation.None
                    },] },
        ];
        /** @nocollapse */
        ChangeLocationModelComponent.ctorParameters = function () {
            return [
                { type: ngBootstrap.NgbActiveModal },
                { type: MapService }
            ];
        };
        ChangeLocationModelComponent.propDecorators = {
            searchElementRef: [{ type: i0.ViewChild, args: ['search',] }],
            input: [{ type: i0.Input }],
            output: [{ type: i0.Output }]
        };
        return ChangeLocationModelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ContentLoadingComponent = (function () {
        function ContentLoadingComponent() {
            this.repeats = 1;
        }
        /**
         * @return {?}
         */
        ContentLoadingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.iterates = Array(this.repeats).fill(0);
            };
        ContentLoadingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cfs-content-loading',
                        template: "<div class=\"timeline-wrapper\">\n  <div class=\"timeline-item\" *ngFor=\"let iterate of iterates\">\n    <div class=\"animated-background\">\n      <div class=\"background-masker header-top\"></div>\n      <div class=\"background-masker header-left\"></div>\n      <div class=\"background-masker header-right\"></div>\n      <div class=\"background-masker header-bottom\"></div>\n      <div class=\"background-masker subheader-left\"></div>\n      <div class=\"background-masker subheader-right\"></div>\n      <div class=\"background-masker subheader-bottom\"></div>\n      <div class=\"background-masker content-top\"></div>\n      <div class=\"background-masker content-first-end\"></div>\n      <div class=\"background-masker content-second-line\"></div>\n      <div class=\"background-masker content-second-end\"></div>\n      <div class=\"background-masker content-third-line\"></div>\n      <div class=\"background-masker content-third-end\"></div>\n    </div>\n  </div>\n</div>\n",
                        styles: [".timeline-item{background:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;padding:12px;margin-bottom:5px}@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}100%{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}100%{background-position:468px 0}}.animated-background{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:#f6f7f8;background:linear-gradient(to right,#eee 8%,#ddd 18%,#eee 33%);background-size:800px 104px;height:96px;position:relative}.background-masker{background:#fff;position:absolute}.background-masker.header-bottom,.background-masker.header-top,.background-masker.subheader-bottom{top:0;left:40px;right:0;height:10px}.background-masker.header-left,.background-masker.header-right,.background-masker.subheader-left,.background-masker.subheader-right{top:10px;left:40px;height:8px;width:10px}.background-masker.header-bottom{top:18px;height:6px}.background-masker.subheader-left,.background-masker.subheader-right{top:24px;height:6px}.background-masker.header-right,.background-masker.subheader-right{width:auto;left:300px;right:0}.background-masker.subheader-right{left:230px}.background-masker.subheader-bottom{top:30px;height:10px}.background-masker.content-first-end,.background-masker.content-second-end,.background-masker.content-second-line,.background-masker.content-third-end,.background-masker.content-third-line,.background-masker.content-top{top:40px;left:0;right:0;height:6px}.background-masker.content-top{height:20px}.background-masker.content-first-end,.background-masker.content-second-end,.background-masker.content-third-end{width:auto;left:380px;right:0;top:60px;height:8px}.background-masker.content-second-line{top:68px}.background-masker.content-second-end{left:420px;top:74px}.background-masker.content-third-line{top:82px}.background-masker.content-third-end{left:300px;top:88px}"]
                    },] },
        ];
        /** @nocollapse */
        ContentLoadingComponent.ctorParameters = function () { return []; };
        ContentLoadingComponent.propDecorators = {
            repeats: [{ type: i0.Input }],
            iterates: [{ type: i0.Input }]
        };
        return ContentLoadingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CorouselComponent = (function () {
        function CorouselComponent(ngbCarouselConfig) {
            ngbCarouselConfig.interval = 3000;
            ngbCarouselConfig.wrap = true;
        }
        /**
         * @return {?}
         */
        CorouselComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CorouselComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cfs-corousel',
                        template: "<ngb-carousel>\n  <ng-template ngbSlide *ngFor=\"let slide of slides\">\n    <img [src]=\"slide.url\"  alt=\"slide.alt\">\n    <div class=\"carousel-caption\">\n      <h3>{{slide.header}}</h3>\n      <p>{{slide.desc}}</p>\n    </div>\n  </ng-template>\n</ngb-carousel>\n",
                        styles: ["img{margin:auto;height:auto;width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        CorouselComponent.ctorParameters = function () {
            return [
                { type: ngBootstrap.NgbCarouselConfig }
            ];
        };
        CorouselComponent.propDecorators = {
            slides: [{ type: i0.Input }]
        };
        return CorouselComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FooterComponent = (function () {
        function FooterComponent() {
            fontawesomeSvgCore.library.add(freeSolidSvgIcons.faUser, freeSolidSvgIcons.faHome, freeSolidSvgIcons.faFax, freeSolidSvgIcons.faPhone, freeSolidSvgIcons.faEnvelope, freeBrandsSvgIcons.faTwitter, freeBrandsSvgIcons.faFacebook, freeBrandsSvgIcons.faGooglePlus, freeBrandsSvgIcons.faLinkedin);
        }
        /**
         * @return {?}
         */
        FooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        FooterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cfs-footer',
                        template: "<footer class=\"page-footer stylish-color-dark\">\n\n  <div class=\"container\">\n\n    <div class=\"row text-center text-md-left mt-3 pb-3\">\n\n      <div class=\"col-md-3 col-lg-3 col-xl-3 mx-auto mt-3\">\n        <h6 class=\"title mb-4 font-bold\">candifood</h6>\n        <p>{{message.heading}}</p>\n          <p>{{message.desc}}</p>\n      </div>\n\n      <hr class=\"w-100 clearfix d-md-none\">\n\n      <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto mt-3\">\n        <h6 class=\"title mb-4 font-bold\">More</h6>\n        <p *ngFor=\"let link of columnOneLinks\"><a [routerLink]=\"link.url\">{{link.label}}</a></p>\n      </div>\n\n      <hr class=\"w-100 clearfix d-md-none\">\n\n      <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto mt-3\">\n        <h6 class=\"title mb-4 font-bold\">Useful links</h6>\n        <p *ngFor=\"let link of columnTwoLinks\"><a [routerLink]=\"link.url\">{{link.label}}</a></p>\n      </div>\n\n      <hr class=\"w-100 clearfix d-md-none\">\n\n      <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mt-3\">\n        <h6 class=\"title mb-4 font-bold\">Contact</h6>\n        <p><fa-icon [icon]=\"['fas','home']\"></fa-icon>{{contact.name}}</p>\n        <p><fa-icon [icon]=\"['fas','envelope']\"></fa-icon>{{contact.email}}</p>\n        <p><fa-icon [icon]=\"['fas','phone']\"></fa-icon>{{contact.phone}}</p>\n        <p><fa-icon [icon]=\"['fas','fax']\"></fa-icon>{{contact.fax}}</p>\n      </div>\n\n    </div>\n\n    <hr>\n\n    <div class=\"row py-3 d-flex align-items-center\">\n\n      <div class=\"col-md-8 col-lg-9\">\n        <p class=\"text-center text-md-left grey-text\">\n          \u00A9 {{year}} Copyright:\n          <a href=\"{{brand.url}}\">\n            <strong>{{brand.label}}</strong>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-md-4 col-lg-3 ml-lg-0\">\n\n        <div class=\"social-section text-center text-md-left\">\n          <ul class=\"list-inline\">\n            <li class=\"list-inline-item\">\n              <a class=\"btn-floating btn-sm rgba-white-slight mr-xl-4\" href=\"{{social.facebook}}\">\n                <fa-icon [icon]=\"['fab','facebook']\"></fa-icon>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a class=\"btn-floating btn-sm rgba-white-slight mr-xl-4\" href=\"{{social.twitter}}\">\n                <fa-icon [icon]=\"['fab','twitter']\"></fa-icon>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a class=\"btn-floating btn-sm rgba-white-slight mr-xl-4\" href=\"{{social.googlePlus}}\">\n                <fa-icon [icon]=\"['fab','google-plus']\"></fa-icon>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a class=\"btn-floating btn-sm rgba-white-slight mr-xl-4\" href=\"{{social.linkedin}}\">\n                <fa-icon [icon]=\"['fab','linkedin']\"></fa-icon>\n              </a>\n            </li>\n          </ul>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</footer>\n",
                        styles: [".page-footer{background-color:#9d8986}footer.page-footer{margin-top:20px;padding-top:20px;color:#fff}a,a:active,a:hover,a:visited{color:#ffbc31;text-decoration:none}a:active,a:hover{color:#ff8219}"]
                    },] },
        ];
        /** @nocollapse */
        FooterComponent.ctorParameters = function () { return []; };
        FooterComponent.propDecorators = {
            social: [{ type: i0.Input }],
            year: [{ type: i0.Input }],
            brand: [{ type: i0.Input }],
            copyright: [{ type: i0.Input }],
            contact: [{ type: i0.Input }],
            message: [{ type: i0.Input }],
            columnOneLinks: [{ type: i0.Input }],
            columnTwoLinks: [{ type: i0.Input }]
        };
        return FooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var HeaderComponent = (function () {
        function HeaderComponent() {
            this.middleButtonClick = new i0.EventEmitter();
            this.isCollapsed = true;
            this.location = [];
            // add fontawesome icons to use
            fontawesomeSvgCore.library.add(freeSolidSvgIcons.faStreetView, freeSolidSvgIcons.faUtensilSpoon);
            this.searchForm = new forms.FormGroup({
                term: new forms.FormControl('', [forms.Validators.required]),
            });
            this.term = this.searchForm.controls['term'];
        }
        /**
         * @return {?}
         */
        HeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        HeaderComponent.prototype.open = /**
         * @return {?}
         */
            function () {
                this.middleButtonClick.emit('click');
            };
        HeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cfs-header',
                        template: "<div class=\"header\">\n\n  <cfs-alerts></cfs-alerts>\n\n  <div class=\"container\">\n\n    <nav class=\"navbar navbar-light navbar-expand-md bg-faded justify-content-center\">\n\n      <a [routerLink]=\"brand.url\" class=\"navbar-brand d-flex w-50 mr-auto\">\n        <img src=\"/assets/{{logo}}\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">{{brand.label}}\n      </a>\n\n      <button\n        class=\"navbar-toggler btn btn-outline-primary\" type=\"button\" data-toggle=\"collapse\"\n        data-target=\"#candifoodtoggle\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n        (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"candifoodtoggle\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"navbar-collapse collapse w-100\" id=\"candifoodtoggle\"  [ngbCollapse]=\"isCollapsed\">\n\n        <ul class=\"navbar-nav w-100 justify-content-center\">\n          <li class=\"nav-item active\" *ngIf=\"middleButton.display\">\n            <button type=\"button\" class=\"btn btn-warning ng-binding street-button\" (click)=\"open()\">\n              <fa-icon [hidden]=\"middleButton.loading\" [icon]=\"['fas', 'street-view']\"></fa-icon>\n              <fa-icon [hidden]=\"!middleButton.loading\" [icon]=\"['fas', 'utensil-spoon']\" [spin]=\"true\"></fa-icon>\n              {{location.formatted_address || middleButton.label}}\n            </button>\n          </li>\n        </ul>\n\n        <ul class=\"nav navbar-nav ml-auto w-100 justify-content-end\">\n          <li class=\"nav-item\" *ngFor=\"let link of leftLinks\">\n            <a class=\"nav-link\" [routerLink]=\"link.url\" routerLinkActive=\"active\">{{link.label}}</a>\n          </li>\n          <!--<li class=\"nav-item\">\n            <div ngbDropdown class=\"d-inline-block\">\n              <a class=\"nav-link\" ngbDropdownToggle\n\n                 routerLinkActive=\"active\">Admin</a>\n              <div ngbDropdownMenu aria-labelledby=\"profile\">\n                <button class=\"dropdown-item\" [routerLink]=\"'/user-manage'\">Manage user</button>\n                <button class=\"dropdown-item\" [routerLink]=\"'/holi-statics'\">Event statics</button>\n                <button class=\"dropdown-item\" [routerLink]=\"'/holi'\">Holi 2018 guest entry</button>\n                <button class=\"dropdown-item\" [routerLink]=\"'/holi-manage'\">Name search</button>\n                <button class=\"dropdown-item\" [routerLink]=\"'/csv-upload'\">Upload CSV file</button>\n              </div>\n            </div>\n          </li>-->\n        </ul>\n      </div>\n    </nav>\n\n  </div>\n\n</div>\n",
                        styles: [".header{background-color:#ec8e49}.header .gauramarg-left{position:absolute;top:0}.header .gauramarg-right{position:absolute;top:0;right:0}.header .container,nav{background-color:#ec8e49}.street-button{color:#fff;padding:0 5px;font-size:16px}.street-view{color:#ec8e49;vertical-align:baseline;margin:5px;font-size:18px}"],
                        encapsulation: i0.ViewEncapsulation.None,
                    },] },
        ];
        /** @nocollapse */
        HeaderComponent.ctorParameters = function () { return []; };
        HeaderComponent.propDecorators = {
            logo: [{ type: i0.Input }],
            brand: [{ type: i0.Input }],
            leftLinks: [{ type: i0.Input }],
            rightLinks: [{ type: i0.Input }],
            middleButton: [{ type: i0.Input }],
            middleButtonClick: [{ type: i0.Output }]
        };
        return HeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LoginComponent = (function () {
        function LoginComponent(activatedRoute, alertService, router$$1, userService) {
            this.activatedRoute = activatedRoute;
            this.alertService = alertService;
            this.router = router$$1;
            this.userService = userService;
            this.loading = false;
            this.loginForm = new forms.FormGroup({
                username: new forms.FormControl('', [forms.Validators.required]),
                password: new forms.FormControl('', [forms.Validators.required])
            });
            this.username = this.loginForm.controls['username'];
            this.password = this.loginForm.controls['password'];
        }
        /**
         * @return {?}
         */
        LoginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
            };
        /**
         * @return {?}
         */
        LoginComponent.prototype.onSubmit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.loginForm.valid) {
                    this.loading = true;
                    this.userService.getCurrentUser(this.loginForm.value.username, this.loginForm.value.password)
                        .subscribe(function (response) {
                        // navigate by url is used due to the fact that the returnUrl may have optional params which need to be parsed.
                        // same is true for query params
                        // navigate by url is used due to the fact that the returnUrl may have optional params which need to be parsed.
                        // same is true for query params
                        _this.router.navigateByUrl(_this.returnUrl, { replaceUrl: true });
                    }, function (error) {
                        _this.alertService.alert({
                            title: 'Login failure!',
                            subTitle: 'Unable to login! Please try again or contact support team.',
                            text: error,
                            type: 'danger'
                        });
                    });
                }
            };
        LoginComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cfs-login',
                        template: "<div class='splash'>\n</div>\n\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    <h2>Login</h2>\n  </div>\n  <div class=\"card-block\">\n    <div class=\"container\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" oninvalid=\"\">\n\n        <div class=\"form-row\">\n\n          <div class=\"form-group\" [ngClass]=\"{'has-danger': username.invalid && (username.dirty || username.touched)}\">\n            <label for=\"username\">User ID</label>\n            <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n              </div>\n\n              <input type=\"text\" name=\"username\" formControlName=\"username\"\n                     class=\"form-control form-control-danger\" id=\"username\"\n                     placeholder=\"Username\" required\n                     autofocus>\n            </div>\n            <span *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"text-danger align-middle\">\n                <i class=\"fa fa-close\"></i> Username is required\n              </span>\n          </div>\n        </div>\n\n        <div class=\"form-row\">\n\n          <div class=\"form-group\" [ngClass]=\"{'has-danger': password.invalid && (password.dirty || password.touched)}\">\n            <label for=\"password\">Password</label>\n\n            <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"fa fa-key\"></i></span>\n              </div>\n\n              <input type=\"password\" name=\"password\" formControlName=\"password\" class=\"form-control form-control-danger\"\n                     id=\"password\" placeholder=\"Password\"\n                     required>\n            </div>\n            <span *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"text-danger align-middle\">\n                <i class=\"fa fa-close\"></i> Password is required\n              </span>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" [disabled]=\"loginForm.invalid || loading\" class=\"btn btn-success\">\n            <i class=\"fa fa-sign-in\"></i>Login<i class=\"fa fa-spinner fa-spin fa-fw\" *ngIf=\"loading\"></i>\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n",
                        styles: ["body{background-color:#eab90d}.card-header{color:#fff;background-color:#e2670e}.card{border-color:#d09992;box-shadow:1px 4px 7px 0 #e2b682,0 4px 17px 0 #e2caac;position:fixed;top:50%;left:50%;width:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:101}.splash{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#696dea85;opacity:1;pointer-events:none;transition:opacity .8s ease-in-out,z-index .1s linear .8s;z-index:100}.splash>svg{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:50vw;height:50vh}sd-root:empty+.splash{opacity:1;z-index:100}"]
                    },] },
        ];
        /** @nocollapse */
        LoginComponent.ctorParameters = function () {
            return [
                { type: router.ActivatedRoute },
                { type: AlertService },
                { type: router.Router },
                { type: UserService }
            ];
        };
        return LoginComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PrivacyComponent = (function () {
        function PrivacyComponent() {
        }
        /**
         * @return {?}
         */
        PrivacyComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        PrivacyComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cfs-privacy',
                        template: "<div class=\"jumbotron\">\n  <div class=\"container\">\n    <h5>Privacy Policy</h5>\n    <h6>operates the website, which provides the SERVICE.</h6>\n\n    <p>This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of\n      Personal Information if anyone decided to use our Service.\n    </p>\n\n    <p>If you choose to use our Service, then you agree to the collection and use of information in relation with this\n      policy. The Personal Information that we collect are used for providing and improving the Service. We will not use\n      or\n      share your information with anyone except as described in this Privacy Policy.\n    </p>\n\n    <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible\n      at ,\n      unless otherwise defined in this Privacy Policy.\n    </p>\n\n    <h5>Information Collection and Use</h5>\n\n    <p>For a better experience while using our Service, we may require you to provide us with certain personally\n      identifiable\n      information, including but not limited to your name, phone number, and postal address. The information that we\n      collect\n      will be used to contact or identify you.</p>\n\n    <h5>Log Data</h5>\n\n    <p>We want to inform you that whenever you visit our Service, we collect information that your browser sends to us\n      that\n      is called Log Data. This Log Data may include information such as your computer\u2019s Internet Protocol (\u201CIP\u201D)\n      address,\n      browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those\n      pages,\n      and other statistics.</p>\n\n    <h5>Cookies</h5>\n\n    <p>Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent\n      to\n      your browser from the website that you visit and are stored on your computer\u2019s hard drive.</p>\n\n    <p>Our website uses these \u201Ccookies\u201D to collection information and to improve our Service. You have the option to\n      either\n      accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our\n      cookies, you may not be able to use some portions of our Service.</p>\n\n    <h5>Service Providers</h5>\n\n    <h6>We may employ third-party companies and individuals due to the following reasons:</h6>\n\n    <p>To facilitate our Service;\n      To provide the Service on our behalf;\n      To perform Service-related services; or\n      To assist us in analyzing how our Service is used.\n      We want to inform our Service users that these third parties have access to your Personal Information. The reason\n      is\n      to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the\n      information for any other purpose.</p>\n\n    <h5>Security</h5>\n\n    <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially\n      acceptable\n      means of protecting it. But remember that no method of transmission over the internet, or method of electronic\n      storage\n      is 100% secure and reliable, and we cannot guarantee its absolute security.</p>\n\n    <h5>Links to Other Sites</h5>\n\n    <p>Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that\n      site.\n      Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy\n      Policy\n      of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or\n      practices of any third-party sites or services.</p>\n\n    <h5>Children\u2019s Privacy</h5>\n\n    <p>Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable\n      information\n      from children under 13. In the case we discover that a child under 13 has provided us with personal information,\n      we\n      immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has\n      provided us with personal information, please contact us so that we will be able to do necessary actions.</p>\n\n    <h5>Changes to This Privacy Policy</h5>\n\n    <p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any\n      changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are\n      effective\n      immediately, after they are posted on this page.</p>\n\n    <h5>Contact Us</h5>\n\n    <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>\n\n    <p>This Privacy Policy page was created at Privacy Policy Template.net.</p>\n  </div>\n</div>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        PrivacyComponent.ctorParameters = function () { return []; };
        return PrivacyComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ProfileComponent = (function () {
        function ProfileComponent(userService) {
            this.userService = userService;
        }
        /**
         * @return {?}
         */
        ProfileComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        ProfileComponent.prototype.logout = /**
         * @return {?}
         */
            function () {
                this.userService.userAuthorizations = null;
            };
        ProfileComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cfs-profile',
                        template: "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <div *ngIf=\"userService.isAuthenticated\" class=\"card\">\n      <div class=\"card-header d-flex justify-content-between\">\n        <h6>{{userService.isAuthenticated.firstName}} {{userService.isAuthenticated.lastName}}</h6>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\">\n                  Email: {{userService.isAuthenticated.email}}\n                </li>\n                <li class=\"list-group-item\">\n                  Phone: {{userService.isAuthenticated.phone}}\n                </li>\n                <li class=\"list-group-item\">\n                  Type: {{userService.isAuthenticated.type}}\n                </li>\n                <li class=\"list-group-item\">\n                  <button type=\"button\" class=\"btn btn-success mb-2\" (click)=\"logout()\">\n                    Log out<i class=\"fa fa-spinner fa-spin fa-fw\" *ngIf=\"loading\"></i>\n                  </button>\n                </li>\n              </ul>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        ProfileComponent.ctorParameters = function () {
            return [
                { type: UserService }
            ];
        };
        return ProfileComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AutoScrollDirective = (function () {
        function AutoScrollDirective(element) {
            this.lockYOffset = 10;
            this.observeAttributes = 'false';
            this._isLocked = false;
            this.nativeElement = element.nativeElement;
        }
        /**
         * @return {?}
         */
        AutoScrollDirective.prototype.getObserveAttributes = /**
         * @return {?}
         */
            function () {
                return this.observeAttributes !== '' && this.observeAttributes.toLowerCase() !== 'false';
            };
        /**
         * @return {?}
         */
        AutoScrollDirective.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.mutationObserver = new MutationObserver(function () {
                    if (!_this._isLocked) {
                        _this.scrollDown();
                    }
                });
                this.mutationObserver.observe(this.nativeElement, {
                    childList: true,
                    subtree: true,
                    attributes: this.getObserveAttributes(),
                });
            };
        /**
         * @return {?}
         */
        AutoScrollDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.mutationObserver.disconnect();
            };
        /**
         * @return {?}
         */
        AutoScrollDirective.prototype.forceScrollDown = /**
         * @return {?}
         */
            function () {
                this.scrollDown();
            };
        /**
         * @return {?}
         */
        AutoScrollDirective.prototype.isLocked = /**
         * @return {?}
         */
            function () {
                return this._isLocked;
            };
        /**
         * @return {?}
         */
        AutoScrollDirective.prototype.scrollDown = /**
         * @return {?}
         */
            function () {
                this.nativeElement.scrollTop = this.nativeElement.scrollHeight;
            };
        /**
         * @return {?}
         */
        AutoScrollDirective.prototype.scrollHandler = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ scrollFromBottom = this.nativeElement.scrollHeight - this.nativeElement.scrollTop - this.nativeElement.clientHeight;
                this._isLocked = scrollFromBottom > this.lockYOffset;
            };
        AutoScrollDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[cfsAutoScroll]'
                    },] },
        ];
        /** @nocollapse */
        AutoScrollDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        AutoScrollDirective.propDecorators = {
            lockYOffset: [{ type: i0.Input, args: ['lock-y-offset',] }],
            observeAttributes: [{ type: i0.Input, args: ['observe-attributes',] }],
            scrollHandler: [{ type: i0.HostListener, args: ['scroll',] }]
        };
        return AutoScrollDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ routes = [
        {
            path: 'privacy',
            component: PrivacyComponent
        },
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'profile',
            component: ProfileComponent,
            canActivate: [AuthGuardService]
        },
    ];
    var CoreRoutingModule = (function () {
        function CoreRoutingModule() {
        }
        CoreRoutingModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            router.RouterModule.forRoot(routes)
                        ],
                        exports: [
                            router.RouterModule
                        ]
                    },] },
        ];
        return CoreRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ModelComponent = (function () {
        function ModelComponent(activeModal) {
            this.activeModal = activeModal;
        }
        /**
         * @return {?}
         */
        ModelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ModelComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cfs-model',
                        template: "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{title}}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <ng-content></ng-content>\n</div>\n<div class=\"modal-footer\">\n  <button class=\"btn btn-warning\" (click)=\"activeModal.dismiss('Done')\">Done</button>\n</div>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        ModelComponent.ctorParameters = function () {
            return [
                { type: ngBootstrap.NgbActiveModal }
            ];
        };
        ModelComponent.propDecorators = {
            title: [{ type: i0.Input }]
        };
        return ModelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ WINDOW = new i0.InjectionToken('A reference to the window');
    /**
     * @return {?}
     */
    function windowFactory() {
        return window;
    }
    var CoreModule = (function () {
        function CoreModule(parentModule, injector) {
            this.injector = injector;
            if (parentModule) {
                throw new Error('CoreModule is already loaded. Import it in the AppModule only');
            }
            this.registerCustomElements();
        }
        /**
         * @return {?}
         */
        CoreModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: CoreModule,
                    providers: [
                        AppService,
                        AlertService,
                        AppInitService,
                        AuthGuardService,
                        CoreService,
                        EncryptionService,
                        MapService,
                        NoAuthGuardService,
                        {
                            provide: WINDOW,
                            useFactory: windowFactory
                        },
                        UserService,
                        GoogleAnalyticsService
                    ]
                };
            };
        /**
         * @return {?}
         */
        CoreModule.prototype.ngDoBootstrap = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        CoreModule.prototype.registerCustomElements = /**
         * @return {?}
         */
            function () {
                customElements.define('cf-header', elements.createCustomElement(HeaderComponent, { injector: this.injector }));
                customElements.define('cf-footer', elements.createCustomElement(FooterComponent, { injector: this.injector }));
                customElements.define('cf-alert', elements.createCustomElement(AlertsComponent, { injector: this.injector }));
                customElements.define('cf-login', elements.createCustomElement(LoginComponent, { injector: this.injector }));
                customElements.define('cf-profile', elements.createCustomElement(ProfileComponent, { injector: this.injector }));
                customElements.define('cf-privacy', elements.createCustomElement(PrivacyComponent, { injector: this.injector }));
                customElements.define('cf-change-location-model', elements.createCustomElement(ChangeLocationModelComponent, { injector: this.injector }));
                customElements.define('cf-corousel', elements.createCustomElement(CorouselComponent, { injector: this.injector }));
                customElements.define('cf-content-loading', elements.createCustomElement(ContentLoadingComponent, { injector: this.injector }));
                customElements.define('cf-model', elements.createCustomElement(ModelComponent, { injector: this.injector }));
            };
        CoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            router.RouterModule,
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            ngBootstrap.NgbModule.forRoot(),
                            CoreRoutingModule,
                            angularFontawesome.FontAwesomeModule
                        ],
                        declarations: [
                            HeaderComponent,
                            FooterComponent,
                            AlertsComponent,
                            LoginComponent,
                            ProfileComponent,
                            PrivacyComponent,
                            ChangeLocationModelComponent,
                            CorouselComponent,
                            FilterPipe,
                            ContentLoadingComponent,
                            AutoScrollDirective,
                            ModelComponent
                        ],
                        exports: [
                            HeaderComponent,
                            FooterComponent,
                            AlertsComponent,
                            LoginComponent,
                            ProfileComponent,
                            PrivacyComponent,
                            ChangeLocationModelComponent,
                            CorouselComponent,
                            ContentLoadingComponent,
                            AutoScrollDirective,
                        ],
                        entryComponents: [
                            HeaderComponent,
                            FooterComponent,
                            AlertsComponent,
                            LoginComponent,
                            ProfileComponent,
                            PrivacyComponent,
                            ChangeLocationModelComponent,
                            CorouselComponent,
                            ContentLoadingComponent,
                            ModelComponent
                        ]
                    },] },
        ];
        /** @nocollapse */
        CoreModule.ctorParameters = function () {
            return [
                { type: CoreModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] },
                { type: i0.Injector }
            ];
        };
        return CoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.SuccessAlert = SuccessAlert;
    exports.InfoAlert = InfoAlert;
    exports.WarningAlert = WarningAlert;
    exports.DangerAlert = DangerAlert;
    exports.AlertService = AlertService;
    exports.AppService = AppService;
    exports.appInitFactory = appInitFactory;
    exports.AppInitService = AppInitService;
    exports.AuthGuardService = AuthGuardService;
    exports.CoreService = CoreService;
    exports.EncryptionService = EncryptionService;
    exports.FilterPipe = FilterPipe;
    exports.GoogleAnalyticsService = GoogleAnalyticsService;
    exports.MapService = MapService;
    exports.NoAuthGuardService = NoAuthGuardService;
    exports.UserService = UserService;
    exports.AlertsComponent = AlertsComponent;
    exports.ChangeLocationModelComponent = ChangeLocationModelComponent;
    exports.ContentLoadingComponent = ContentLoadingComponent;
    exports.CorouselComponent = CorouselComponent;
    exports.FooterComponent = FooterComponent;
    exports.HeaderComponent = HeaderComponent;
    exports.LoginComponent = LoginComponent;
    exports.PrivacyComponent = PrivacyComponent;
    exports.ProfileComponent = ProfileComponent;
    exports.AutoScrollDirective = AutoScrollDirective;
    exports.CoreRoutingModule = CoreRoutingModule;
    exports.WINDOW = WINDOW;
    exports.windowFactory = windowFactory;
    exports.CoreModule = CoreModule;
    exports.ɵa = ModelComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuZGlmb29kLWNvcmUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY2FuZGlmb29kL2NvcmUvbGliL3NlcnZpY2VzL2FsZXJ0LnNlcnZpY2UudHMiLCJuZzovL0BjYW5kaWZvb2QvY29yZS9saWIvc2VydmljZXMvYXBwLnNlcnZpY2UudHMiLCJuZzovL0BjYW5kaWZvb2QvY29yZS9saWIvc2VydmljZXMvYXBwLWluaXQuc2VydmljZS50cyIsIm5nOi8vQGNhbmRpZm9vZC9jb3JlL2xpYi9zZXJ2aWNlcy9lbmNyeXB0aW9uLnNlcnZpY2UudHMiLCJuZzovL0BjYW5kaWZvb2QvY29yZS9saWIvc2VydmljZXMvdXNlci5zZXJ2aWNlLnRzIiwibmc6Ly9AY2FuZGlmb29kL2NvcmUvbGliL3NlcnZpY2VzL2F1dGgtZ3VhcmQuc2VydmljZS50cyIsIm5nOi8vQGNhbmRpZm9vZC9jb3JlL2xpYi9zZXJ2aWNlcy9jb3JlLnNlcnZpY2UudHMiLCJuZzovL0BjYW5kaWZvb2QvY29yZS9saWIvc2VydmljZXMvZmlsdGVyLXBpcGUuc2VydmljZS50cyIsIm5nOi8vQGNhbmRpZm9vZC9jb3JlL2xpYi9zZXJ2aWNlcy9nb29nbGUtYW5hbHl0aWNzLnNlcnZpY2UudHMiLCJuZzovL0BjYW5kaWZvb2QvY29yZS9saWIvc2VydmljZXMvbWFwLnNlcnZpY2UudHMiLCJuZzovL0BjYW5kaWZvb2QvY29yZS9saWIvc2VydmljZXMvbm8tYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIiwibmc6Ly9AY2FuZGlmb29kL2NvcmUvbGliL2NvbXBvbmVudHMvYWxlcnRzL2FsZXJ0cy5jb21wb25lbnQudHMiLCJuZzovL0BjYW5kaWZvb2QvY29yZS9saWIvY29tcG9uZW50cy9jaGFuZ2UtbG9jYXRpb24tbW9kZWwvY2hhbmdlLWxvY2F0aW9uLW1vZGVsLmNvbXBvbmVudC50cyIsIm5nOi8vQGNhbmRpZm9vZC9jb3JlL2xpYi9jb21wb25lbnRzL2NvbnRlbnQtbG9hZGluZy9jb250ZW50LWxvYWRpbmcuY29tcG9uZW50LnRzIiwibmc6Ly9AY2FuZGlmb29kL2NvcmUvbGliL2NvbXBvbmVudHMvY29yb3VzZWwvY29yb3VzZWwuY29tcG9uZW50LnRzIiwibmc6Ly9AY2FuZGlmb29kL2NvcmUvbGliL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJuZzovL0BjYW5kaWZvb2QvY29yZS9saWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNhbmRpZm9vZC9jb3JlL2xpYi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIm5nOi8vQGNhbmRpZm9vZC9jb3JlL2xpYi9jb21wb25lbnRzL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQudHMiLCJuZzovL0BjYW5kaWZvb2QvY29yZS9saWIvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnRzIiwibmc6Ly9AY2FuZGlmb29kL2NvcmUvbGliL2RpcmVjdGl2ZXMvYXV0by1zY3JvbGwuZGlyZWN0aXZlLnRzIiwibmc6Ly9AY2FuZGlmb29kL2NvcmUvbGliL2NvcmUtcm91dGluZy5tb2R1bGUudHMiLCJuZzovL0BjYW5kaWZvb2QvY29yZS9saWIvY29tcG9uZW50cy9tb2RlbC9tb2RlbC5jb21wb25lbnQudHMiLCJuZzovL0BjYW5kaWZvb2QvY29yZS9saWIvY29yZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc3ViVGl0bGU6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICB0eXBlOiBBbGVydFR5cGU7XG4gIGNsb3NlRGVsYXk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBTdWNjZXNzQWxlcnQgaW1wbGVtZW50cyBBbGVydCB7XG4gIHJlYWRvbmx5IHR5cGU6IEFsZXJ0VHlwZTtcbiAgY29uc3RydWN0b3IgKHB1YmxpYyB0aXRsZTogc3RyaW5nLCBwdWJsaWMgc3ViVGl0bGUsIHB1YmxpYyB0ZXh0LCBwdWJsaWMgY2xvc2VEZWxheT86IG51bWJlcikge1xuICAgIHRoaXMudHlwZSA9ICdzdWNjZXNzJztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW5mb0FsZXJ0IGltcGxlbWVudHMgQWxlcnQge1xuICByZWFkb25seSB0eXBlOiBBbGVydFR5cGU7XG4gIGNvbnN0cnVjdG9yIChwdWJsaWMgdGl0bGU6IHN0cmluZywgcHVibGljIHN1YlRpdGxlLCBwdWJsaWMgdGV4dCwgcHVibGljIGNsb3NlRGVsYXk/OiBudW1iZXIpIHtcbiAgICB0aGlzLnR5cGUgPSAnaW5mbyc7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBXYXJuaW5nQWxlcnQgaW1wbGVtZW50cyBBbGVydCB7XG4gIHJlYWRvbmx5IHR5cGU6IEFsZXJ0VHlwZTtcbiAgY29uc3RydWN0b3IgKHB1YmxpYyB0aXRsZTogc3RyaW5nLCBwdWJsaWMgc3ViVGl0bGUsIHB1YmxpYyB0ZXh0LCBwdWJsaWMgY2xvc2VEZWxheT86IG51bWJlcikge1xuICAgIHRoaXMudHlwZSA9ICd3YXJuaW5nJztcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhbmdlckFsZXJ0IGltcGxlbWVudHMgQWxlcnQge1xuICByZWFkb25seSB0eXBlOiBBbGVydFR5cGU7XG4gIGNvbnN0cnVjdG9yIChwdWJsaWMgdGl0bGU6IHN0cmluZywgcHVibGljIHN1YlRpdGxlLCBwdWJsaWMgdGV4dCwgcHVibGljIGNsb3NlRGVsYXk/OiBudW1iZXIpIHtcbiAgICB0aGlzLnR5cGUgPSAnZGFuZ2VyJztcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBBbGVydFR5cGUgPSAnc3VjY2VzcycgfCAnaW5mbycgfCAnd2FybmluZycgfCAnZGFuZ2VyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWxlcnRTZXJ2aWNlIHtcblxuICBwcml2YXRlIF9hbGVydHM6IFJlcGxheVN1YmplY3Q8QWxlcnQ+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2FsZXJ0cyA9IG5ldyBSZXBsYXlTdWJqZWN0KCk7XG4gICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgbWVzc2FnZSB0byBiZSBzZWVuIGdsb2JhbGx5LlxuICAgKi9cbiAgcHVibGljIGFsZXJ0KG06IEFsZXJ0KSB7XG4gICAgdGhpcy5fYWxlcnRzLm5leHQobSk7XG4gIH1cblxuICBnZXQgYWxlcnRzKCk6IE9ic2VydmFibGU8QWxlcnQ+IHtcbiAgICByZXR1cm4gdGhpcy5fYWxlcnRzLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwU2VydmljZSB7XG5cbiAgcHVibGljIHBvc2l0aW9uOiBPYnNlcnZhYmxlPFBvc2l0aW9uPjtcbiAgcHVibGljIGxvY2F0aW9uOiBPYnNlcnZhYmxlPExvY2F0aW9uPjtcbiAgcHVibGljIHJlc3RhdXJhbnRzOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwSW5pdEZhY3RvcnkoaW5pdDogQXBwSW5pdFNlcnZpY2UpOiAoKSA9PiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gKCkgPT4gaW5pdC5sb2FkKCkudG9Qcm9taXNlKCk7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBJbml0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBwdWJsaWMgbG9hZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXMpID0+IHtcbiAgICAgICAgICAvLyBjYW4gcnVuIG90aGVyIGFwcCBpbml0aWFsaXphdGlvbnMgaGVyZSB0aGF0IG11c3QgYmUgcnVuIGFmdGVyIHRoZSBjb25maWcgaGFzIGJlZW4gbG9hZGVkXG4gICAgICAgICAgLy8gY2FuIGFsc28gcnVuIHRoZW4gaW4gb3RoZXIgQVBQX0lOSVRJQUxJWkVSU1xuXG4gICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgKiBhcyBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW5jcnlwdGlvblNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cblxuICBwdWJsaWMgZW5jcnlwdEFuZEdldCh1c2VySWQ6IHN0cmluZykge1xuXG4gICAgLy8gUGFkcyBhIGdpdmVuIHN0cmluZyB3aXRoIHdoaXRlc3BhY2UgdG8gbWFrZSBpdCAxNiBjaGFycy4gbG9uZ1xuICAgIGNvbnN0IHBhZFN0cmluZyA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIGNvbnN0IHBhZGRpbmdDaGFyID0gJyAnO1xuICAgICAgY29uc3Qgc2l6ZSA9IDE2O1xuICAgICAgY29uc3QgcGFkTGVuZ3RoID0gc2l6ZSAtIHNvdXJjZS5sZW5ndGg7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFkTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc291cmNlICs9IHBhZGRpbmdDaGFyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc291cmNlO1xuICAgIH07XG5cbiAgICAvLyBHZXQga2V5IGFuZCBJViBmcm9tIGNvbmZpZ3VyYXRpb25cbiAvLyAgICBjb25zdCBrZXkgPSBDcnlwdG9KUy5lbmMuSGV4LnBhcnNlKGVudmlyb25tZW50LmdhLmtleSk7XG4gLy8gICAgY29uc3QgaXYgPSBDcnlwdG9KUy5lbmMuSGV4LnBhcnNlKGVudmlyb25tZW50LmdhLml2KTtcblxuICAgIC8vIEdldCBwYWRkZWQgdmFsdWVcbiAgICBjb25zdCBwYWRNc2cgPSBwYWRTdHJpbmcodXNlcklkKTtcblxuICAgIC8vIEVuY3J5cHQgd2l0aCBhIGNvbnN0YW50IElWIHRvIGFsd2F5cyBnZXQgYSBkZXRlcm1pbmlzdGljIG91dHB1dFxuICAgIC8qY29uc3QgZW5jcnlwdGVkID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoXG4gICAgICBwYWRNc2csXG4gICAgICBrZXksXG4gICAgICB7XG4gICAgICAgIGl2OiBpdixcbiAgICAgICAgcGFkZGluZzogQ3J5cHRvSlMucGFkLlBrY3M3LFxuICAgICAgICBtb2RlOiBDcnlwdG9KUy5tb2RlLkNCQ1xuICAgICAgfVxuICAgICk7Ki9cblxuICAgIC8vIHJldHVybiB0aGUgY2lwaGVyLXRleHRcbiAgICAvLyByZXR1cm4gZW5jcnlwdGVkLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIHVzZXJJZDtcbiAgfVxuXG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7UmVwbGF5U3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0VuY3J5cHRpb25TZXJ2aWNlfSBmcm9tICcuL2VuY3J5cHRpb24uc2VydmljZSc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdXNlciA9IG5ldyBSZXBsYXlTdWJqZWN0KCk7XG4gIGdldCB1c2VyKCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZ2V0IGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy51c2VyQXV0aG9yaXphdGlvbnM7XG4gIH1cblxuICAvLyBVc2VyIGluZm8gcmV0dXJuZWQgZnJvbSBIZXJkXG4gIHVzZXJBdXRob3JpemF0aW9ucztcbiAgLy8gZW5jcnlwdGVkIHVzZXIgaWRcbiAgZW5jcnlwdGVkVXNlcklkZW50aWZpZXI6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRVc2VyQXBpLFxuICAgIHByaXZhdGUgZW5jcnlwdGlvblNlcnZpY2U6IEVuY3J5cHRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudFxuICAgIC8vICBwcml2YXRlIGFwaUNvbmZcbiAgKSB7XG4gIH1cblxuICBnZXRDdXJyZW50VXNlcih1cmw6IHN0cmluZywgZW1haWw/OiBzdHJpbmcsIHBhc3N3b3JkPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50XG4gICAgICAucG9zdCh1cmwsIHsnZW1haWwnOiBlbWFpbCwgJ3Bhc3N3b3JkJzogcGFzc3dvcmR9KVxuICAgICAgLnBpcGUoIG1hcCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlWzBdWydlbWFpbCddICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnVzZXJBdXRob3JpemF0aW9ucyA9IHJlc3BvbnNlWzBdO1xuICAgICAgICAgIHRoaXMuX3VzZXIubmV4dChyZXNwb25zZVswXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSkpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NhbkFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkU2VydmljZSBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge1xuICB9XG5cbiAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB8IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHtcblxuICAgIC8vIGlmIGxvZ2dlZCBpblxuICAgIGlmICh0aGlzLnVzZXJTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAvLyBJZiBub3QgbG9nZ2VkIGluIGJ1dCB3ZSB3YW50IHRvIGF0dGVtcHQgdG8gaW5pdGlhbGl6ZSB0aGUgdXNlciBpbmZvcm1hdGlvblxuICAgICAgLy8gZHVlIHRvIEFQUF9JTklUSUFMSVpFUiBiYXNlZCBhdXRoZW50aWNhdGlvbiBoYXBwZW5pbmdcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSwge1xuICAgICAgICByZXBsYWNlVXJsOiB0cnVlLFxuICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgIHJldHVyblVybDogc3RhdGUudXJsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb3JlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2ZpbHRlcidcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaXRlbXM6IGFueVtdLCBzZWFyY2hUZXh0OiBzdHJpbmcpOiBhbnlbXSB7XG4gICAgaWYgKCFpdGVtcykgeyByZXR1cm4gW107IH1cbiAgICBpZiAoIXNlYXJjaFRleHQpIHsgcmV0dXJuIGl0ZW1zOyB9XG4gICAgc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGl0ID0+IHtcbiAgICAgIHJldHVybiBpdC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGV4dCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcblxuZGVjbGFyZSBsZXQgZ2E6IEZ1bmN0aW9uO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlQW5hbHl0aWNzU2VydmljZSB7XG5cbiAgZ2E7XG4gIHRyYWNrQW5hbHl0aWNzO1xuICAvKipcbiAgICogVGhpcyBpcyBmaXJzdCBpbml0aWFsaXplZCBpbiB0aGUgYXBwIHNoZWxsIChhcHAgY29tcG9uZW50KVxuICAgKiB0aGVyZWZvcmUgaXQgaXMgZmluZSB0byBwdXQgdGhlIGdhKCdjcmVhdGUnKSBpbiBpdHMgY29uc3RydWN0b3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGN1OiBVc2VyU2VydmljZSkge1xuICAgIGlmICggdGhpcy50cmFja0FuYWx5dGljcyAmJiB0aGlzLmdhLnRyYWNraW5nSWQpIHtcbiAgICAgIGdhKCdjcmVhdGUnLCB0aGlzLmdhLnRyYWNraW5nSWQsICdhdXRvJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihgR29vZ2xlIEFuYWx5dGljcyBoYXMgbm90IGJlZW4gY29uZmlndXJlZCBmb3IgdGhpcyBkZXBsb3ltZW50LlxuICAgICAgRWl0aGVyIHRyYWNrQW5hbHl0aWNzIGhhcyBub3QgYmVlbiBzZXQgaW4gdGhlIGNvbmZpZ3VyYXRpb24uanNvbiBvciBnYS50cmFja2luZ0lkIGhhcyBub3QgYmVlbiBwcm92aWRlZCBpbiB0aGUgY29uZmlndXJhdGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2VuZFBhZ2VWaWV3RGF0YSh1cmw6IHN0cmluZykge1xuICAgIGlmICggdGhpcy50cmFja0FuYWx5dGljcykge1xuICAgICAgICBnYSgnc2V0JywgJ3BhZ2UnLCB1cmwpO1xuICAgICAgICBnYSgnc2V0JywgJ2RpbWVuc2lvbjEnLCB0aGlzLmN1LmVuY3J5cHRlZFVzZXJJZGVudGlmaWVyICk7XG4gICAgICAgIGdhKCdzZXQnLCAndXNlcklkJywgdGhpcy5jdS5lbmNyeXB0ZWRVc2VySWRlbnRpZmllcik7XG4gICAgICAgIGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNlbmRFdmVudERhdGEoZXZlbnRDYXRlZ29yeTogc3RyaW5nLCBldmVudEFjdGlvbjogc3RyaW5nLCBldmVudExhYmVsOiBzdHJpbmcpIHtcbiAgICBpZiAoIHRoaXMudHJhY2tBbmFseXRpY3MpIHtcbiAgICAgLy8gZ2Egc2VuZCBldmVudCB3aXRoIGVuY3J5cHRlZCAgdXNlciBpZC4gR0EgZ2VuZXJhdGVkIHRoZSB0ZXJtICdkaW1lbnNpb24xJy4gVGhpcyBjYW5ub3QgYmUgbW9kaWZpZWQuXG4gICAgICBnYSgnc2VuZCcsICdldmVudCcsIGV2ZW50Q2F0ZWdvcnksIGV2ZW50QWN0aW9uICwgZXZlbnRMYWJlbCxcbiAgICAgICB7J2RpbWVuc2lvbjEnOiB0aGlzLmN1LmVuY3J5cHRlZFVzZXJJZGVudGlmaWVyfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge0VsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdCc7XG5cbmNvbnN0IEdFT0xPQ0FUSU9OX0VSUk9SUyA9IHtcbiAgJ2Vycm9ycy5sb2NhdGlvbi51bnN1cHBvcnRlZEJyb3dzZXInOiAnQnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGxvY2F0aW9uIHNlcnZpY2VzJyxcbiAgJ2Vycm9ycy5sb2NhdGlvbi5wZXJtaXNzaW9uRGVuaWVkJzogJ1lvdSBoYXZlIHJlamVjdGVkIGFjY2VzcyB0byB5b3VyIGxvY2F0aW9uJyxcbiAgJ2Vycm9ycy5sb2NhdGlvbi5wb3NpdGlvblVuYXZhaWxhYmxlJzogJ1VuYWJsZSB0byBkZXRlcm1pbmUgeW91ciBsb2NhdGlvbicsXG4gICdlcnJvcnMubG9jYXRpb24udGltZW91dCc6ICdTZXJ2aWNlIHRpbWVvdXQgaGFzIGJlZW4gcmVhY2hlZCdcbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNYXBTZXJ2aWNlIHtcblxuICBwdWJsaWMgY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVzO1xuICBwdWJsaWMgbWFwOiBhbnk7XG4gIHB1YmxpYyBnZW9jb2RlcjtcbiAgcHVibGljIGxhdExuZztcbiAgcHVibGljIGxvY2F0aW9uOiBPYnNlcnZhYmxlPGFueT47XG4gIHB1YmxpYyBsb2NhdGlvbkJlaGF2aW9yU3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHVibGljIGNvb3JkaW5hdGVzQmVoYXZpb3JTdWJqZWN0ID0gbmV3ICBTdWJqZWN0PGFueT4oKTtcbiAgcHVibGljIG5lYXJCeVBsYWNlczogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdWJsaWMgdHlwZSA9ICdyZXN0YXVyYW50JztcbiAgcHVibGljIGtleXdvcmQgPSAncmVzdGF1cmFudCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gcHJpdmF0ZSBtYXBzQVBJTG9hZGVyOiBNYXBzQVBJTG9hZGVyLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gIH1cblxuICBwdWJsaWMgZ2V0QnJvd3NlckNvb3JkaW5hdGVzKG9wdHMpOiBPYnNlcnZhYmxlPFBvc2l0aW9uPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcbiAgICAgIGlmICh3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAgICAgKGNvb3JkaW5hdGVzOiBQb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzLmNvb3JkcztcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgdGhpcy5jb29yZGluYXRlc0JlaGF2aW9yU3ViamVjdC5uZXh0KGNvb3JkaW5hdGVzKTtcblxuICAgICAgICAgICAgLy8gd2UgYXJlIG5vdCBjb21wbGV0aW5nIHRoZSBvYnNlcnZhYmxlIGFzIHdlIHdpbGwgY2FsbCBpdCBtdWx0aXBsZSB0aW1lXG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGVycm9yLmNvZGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKEdFT0xPQ0FUSU9OX0VSUk9SU1snZXJyb3JzLmxvY2F0aW9uLnBlcm1pc3Npb25EZW5pZWQnXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihHRU9MT0NBVElPTl9FUlJPUlNbJ2Vycm9ycy5sb2NhdGlvbi5wb3NpdGlvblVuYXZhaWxhYmxlJ10pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoR0VPTE9DQVRJT05fRVJST1JTWydlcnJvcnMubG9jYXRpb24udGltZW91dCddKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wdHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoR0VPTE9DQVRJT05fRVJST1JTWydlcnJvcnMubG9jYXRpb24udW5zdXBwb3J0ZWRCcm93c2VyJ10pO1xuICAgICAgfVxuXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWRkcmVzc0Zyb21Db29yZGluYXRlcyhsYXRMbmdWYWx1ZSkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG4gICAgICB0aGlzLmdlb2NvZGVyID0gdGhpcy5nZW9jb2RlciB8fCBuZXcgKDxhbnk+d2luZG93KS5nb29nbGUubWFwcy5HZW9jb2RlcigpO1xuICAgICAgdGhpcy5sYXRMbmcgPSB0aGlzLmxhdExuZyB8fCBuZXcgKDxhbnk+d2luZG93KS5nb29nbGUubWFwcy5MYXRMbmcobGF0TG5nVmFsdWUubGF0aXR1ZGUsIGxhdExuZ1ZhbHVlLmxvbmdpdHVkZSk7XG4gICAgICB0aGlzLmdlb2NvZGVyLmdlb2NvZGUoeydsYXRMbmcnOiB0aGlzLmxhdExuZ30sIChyZXN1bHRzLCBzdGF0dXMpID0+IHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gKDxhbnk+d2luZG93KS5nb29nbGUubWFwcy5HZW9jb2RlclN0YXR1cy5PSykge1xuICAgICAgICAgIGNvbnN0IG5ld0xvY2F0aW9uOiBhbnkgPSB0aGlzLnByb2Nlc3NGdWxsTG9jYXRpb24ocmVzdWx0c1swXSk7XG4gICAgICAgICAgbmV3TG9jYXRpb24ubGF0aXR1ZGUgPSBsYXRMbmdWYWx1ZS5sYXRpdHVkZTtcbiAgICAgICAgICBuZXdMb2NhdGlvbi5sb25naXR1ZGUgPSBsYXRMbmdWYWx1ZS5sb25naXR1ZGU7XG4gICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG5ld0xvY2F0aW9uO1xuICAgICAgICAgIHRoaXMubG9jYXRpb25CZWhhdmlvclN1YmplY3QubmV4dChuZXdMb2NhdGlvbik7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChuZXdMb2NhdGlvbik7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYnNlcnZlci5lcnJvcignTGF0TG5nOiAnICsgSlNPTi5zdHJpbmdpZnkobGF0TG5nVmFsdWUpICsgJywgc3RhdHVzIDogJyArIHN0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuICBwdWJsaWMgZ2V0UmVzdGF1cmFudHNGcm9tR29vZ2xlTWFwKHVzZXJMb2NhdGlvbikge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG4gICAgICBjb25zdCBrZXl3b3JkID0gJ3Jlc3RhdXJhbnQnO1xuICAgICAgY29uc3QgcmFua0J5ID0gJ2Rpc3RhbmNlJztcbiAgICAgIGNvbnN0IHNlYXJjaCA9IHtcbiAgICAgICAga2V5d29yZDogJycsXG4gICAgICAgIHJhZGl1czogJycsXG4gICAgICAgIGxvY2F0aW9uOiB7fSxcbiAgICAgICAgdHlwZXM6IFtdLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlc3RhdXJhbnRzID0gW107XG5cbiAgICAgIGNvbnN0IG1hcE9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgem9vbTogOCxcbiAgICAgICAgY2VudGVyOiBuZXcgKDxhbnk+d2luZG93KS5nb29nbGUubWFwcy5MYXRMbmcodXNlckxvY2F0aW9uLmxhdGl0dWRlLCB1c2VyTG9jYXRpb24ubG9uZ2l0dWRlKSxcbiAgICAgICAgbWFwVHlwZUlkOiAoPGFueT53aW5kb3cpLmdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBwbGFjZXMgPSBuZXcgKDxhbnk+d2luZG93KS5nb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZSh0aGlzLm1hcCk7XG4gICAgICBpZiAoa2V5d29yZCkge1xuICAgICAgICBzZWFyY2gua2V5d29yZCA9IGtleXdvcmQ7XG4gICAgICAgIGNvbnNvbGUubG9nKCdrZXl3b3JkIGZvdW5kIGFuZCBzZXR0aW5nIGl0IHRvIGZpbHRlciB0aGF0IHBhcnRpY3VsYXIgdHlwZXMgb2YgcmVzdGF1cmFudCEnKTtcbiAgICAgIH1cblxuICAgICAgc2VhcmNoLnR5cGVzID0gWydyZXN0YXVyYW50J107XG5cbiAgICAgIGlmIChyYW5rQnkgPT09ICdkaXN0YW5jZScgJiYgKHNlYXJjaC50eXBlcyB8fCBzZWFyY2gua2V5d29yZCkpIHtcbiAgICAgICAgLy8gc2VhcmNoLnJhbmtCeSA9ICg8YW55PndpbmRvdykuZ29vZ2xlLm1hcHMucGxhY2VzLlJhbmtCeS5ESVNUQU5DRTtcbiAgICAgICAgc2VhcmNoLmxvY2F0aW9uID0gbmV3ICg8YW55PndpbmRvdykuZ29vZ2xlLm1hcHMuTGF0TG5nKHVzZXJMb2NhdGlvbi5sYXRpdHVkZSwgdXNlckxvY2F0aW9uLmxvbmdpdHVkZSk7XG4gICAgICAgIGNvbnN0IGNlbnRlck1hcmtlciA9IG5ldyAoPGFueT53aW5kb3cpLmdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgcG9zaXRpb246IHNlYXJjaC5sb2NhdGlvbixcbiAgICAgICAgICBhbmltYXRpb246ICg8YW55PndpbmRvdykuZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsXG4gICAgICAgICAgbWFwOiAoPGFueT53aW5kb3cpLmdvb2dsZS5tYXBzLm1hcFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCduZWFyYnlyZXN0YXVyYW50OiBzZXR0aW5nIHRoZSBsYWdsbmc6JW8nLCB1c2VyTG9jYXRpb24pO1xuICAgICAgICAvLyBzZWFyY2guYm91bmRzID0gKDxhbnk+d2luZG93KS5nb29nbGUubWFwLmdldEJvdW5kcygpO1xuICAgICAgfVxuICAgICAgc2VhcmNoLmxvY2F0aW9uID0ge2xhdDogdXNlckxvY2F0aW9uLmxhdGl0dWRlLCBsbmc6IHVzZXJMb2NhdGlvbi5sb25naXR1ZGV9O1xuICAgICAgc2VhcmNoLnJhZGl1cyA9ICcxMDAwMCc7XG5cbiAgICAgIHBsYWNlcy5uZWFyYnlTZWFyY2goc2VhcmNoLCAocmVzdWx0cywgc3RhdHVzKSA9PiB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09ICg8YW55PndpbmRvdykuZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2VTdGF0dXMuT0spIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gcmVzdWx0c1tpXS52aWNpbml0eS5zcGxpdCgnLCcpO1xuXG4gICAgICAgICAgICBjb25zdCByZXN0YXVyYW50ID0ge1xuICAgICAgICAgICAgICBuYW1lOiByZXN1bHRzW2ldLm5hbWUsXG4gICAgICAgICAgICAgIHR5cGVzOiByZXN1bHRzW2ldLnR5cGVzLFxuICAgICAgICAgICAgICByYXRpbmc6IHJlc3VsdHNbaV0ucmF0aW5nLFxuICAgICAgICAgICAgICBnb29nbGVQbGFjZUlkOiByZXN1bHRzW2ldLnBsYWNlX2lkLFxuICAgICAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0c1tpXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKSxcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHRzW2ldLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpLFxuICAgICAgICAgICAgICBvd25lcjogJ2dvb2dsZScsXG4gICAgICAgICAgICAgIG9wZW5UaW1lOiAnMTE6MDAgQU0nLFxuICAgICAgICAgICAgICBjbG9zZVRpbWU6ICcxMTowMCBQTScsXG4gICAgICAgICAgICAgIGFkZHJlc3M6IGxvY2F0aW9uWzBdICsgJywgJyArIGxvY2F0aW9uWzFdLFxuICAgICAgICAgICAgICBsb2NhbGl0eTE6IGxvY2F0aW9uW2xvY2F0aW9uLmxlbmd0aCAtIDNdLFxuICAgICAgICAgICAgICBsb2NhbGl0eTI6IGxvY2F0aW9uW2xvY2F0aW9uLmxlbmd0aCAtIDJdLFxuICAgICAgICAgICAgICBjaXR5OiBsb2NhdGlvbltsb2NhdGlvbi5sZW5ndGggLSAxXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlc3RhdXJhbnRzLnB1c2gocmVzdGF1cmFudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdGF1cmFudHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHJlc3RhdXJhbnQgPSB7J25hbWUnOiBudWxsfTtcbiAgICAgICAgICByZXN0YXVyYW50cy5wdXNoKHJlc3RhdXJhbnQpO1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdGF1cmFudHMpO1xuICAgICAgICB9XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KTtcblxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEdvb2dsZU1hcFBsYWNlRGV0YWlsKGdvb2dsZVBsYWNlSWQpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2dldEdvb2dsZU1hcFBsYWNlRGV0YWlsfHBhcmFtZXRlcjolbycsIGdvb2dsZVBsYWNlSWQpO1xuICAgICAgY29uc3QgcGxhY2VzID0gbmV3ICg8YW55PndpbmRvdykuZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2UodGhpcy5tYXApO1xuICAgICAgcGxhY2VzLmdldERldGFpbHMoe3BsYWNlSWQ6IGdvb2dsZVBsYWNlSWR9LCBmdW5jdGlvbiAocGxhY2UsIHN0YXR1cykge1xuICAgICAgICBjb25zb2xlLmxvZygnX21hcFNlcnZpY2V8ZmV0Y2hlZCBmcm9tIG1hcHxwbGFjZTo6OjolbyBhbmQgc3RhdHVzOiAlbycsIHBsYWNlLCBzdGF0dXMpO1xuICAgICAgICBpZiAoc3RhdHVzID09PSAoPGFueT53aW5kb3cpLmdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlU3RhdHVzLk9LKSB7XG4gICAgICAgICAgbGV0IHBob25lO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBwbGFjZS5pbnRlcm5hdGlvbmFsX3Bob25lX251bWJlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHBob25lID0gcGxhY2UuaW50ZXJuYXRpb25hbF9waG9uZV9udW1iZXI7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGxhY2UuZm9ybWF0dGVkX3Bob25lX251bWJlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHBob25lID0gcGxhY2UuZm9ybWF0dGVkX3Bob25lX251bWJlcjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGhvbmUgPSAnKzE0MTU2NTA5MTAyJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByZXN0cm8gPSB7XG4gICAgICAgICAgICBwbGFjZV9pZDogcGxhY2UucGxhY2VfaWQsXG4gICAgICAgICAgICBwaG9uZTogcGhvbmUsXG4gICAgICAgICAgICB3ZWJzaXRlOiBwbGFjZS53ZWJzaXRlLFxuICAgICAgICAgICAgdXJsOiBwbGFjZS51cmxcbiAgICAgICAgICB9O1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdHJvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnVW5hYmxlIHRvIGdldCBwaG9uZSBudW1iZXIsIGVtYWlsLCB1cmwsIHdlYnNpdGUgZnJvbSBnb29nbGUuIGVycm9yOiAlbycsIHN0YXR1cyk7XG4gICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoJ1VuYWJsZSB0byBnZXQgcGhvbmUgbnVtYmVyLCBlbWFpbCwgdXJsLCB3ZWJzaXRlIGZyb20gZ29vZ2xlLiBlcnJvcjonICsgc3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIHB1YmxpYyBnZXRHb29nbGVNYXBQaG90b3MoZ29vZ2xlUGxhY2VJZCkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZ2V0R29vZ2xlTWFwUGxhY2VEZXRhaWx8cGFyYW1ldGVyOiVvJywgZ29vZ2xlUGxhY2VJZCk7XG4gICAgICBjb25zdCBtYXAgPSBuZXcgKDxhbnk+d2luZG93KS5nb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcC1jYW52YXMnKSk7XG4gICAgICBjb25zdCBwbGFjZXMgPSBuZXcgKDxhbnk+d2luZG93KS5nb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZShtYXApO1xuICAgICAgcGxhY2VzLmdldERldGFpbHMoe3BsYWNlSWQ6IGdvb2dsZVBsYWNlSWR9LCBmdW5jdGlvbiAocGxhY2UsIHN0YXR1cykge1xuICAgICAgICBjb25zb2xlLmxvZygnbWFwU2VydmljZXxmZXRjaGVkIGZyb20gbWFwfHBsYWNlOjo6OiVvIGFuZCBzdGF0dXM6ICVvJywgcGxhY2UsIHN0YXR1cyk7XG4gICAgICAgIGlmIChzdGF0dXMgPT09ICg8YW55PndpbmRvdykuZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2VTdGF0dXMuT0spIHtcbiAgICAgICAgICBsZXQgcGhvbmU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHBsYWNlLmludGVybmF0aW9uYWxfcGhvbmVfbnVtYmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcGhvbmUgPSBwbGFjZS5pbnRlcm5hdGlvbmFsX3Bob25lX251bWJlcjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwbGFjZS5mb3JtYXR0ZWRfcGhvbmVfbnVtYmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcGhvbmUgPSBwbGFjZS5mb3JtYXR0ZWRfcGhvbmVfbnVtYmVyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwaG9uZSA9ICcrMSA0MTUgNjUwIDkxMDInO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHJlc3RybyA9IHtcbiAgICAgICAgICAgIHBsYWNlX2lkOiBwbGFjZS5wbGFjZV9pZCxcbiAgICAgICAgICAgIHBob25lOiBwaG9uZSxcbiAgICAgICAgICAgIHdlYnNpdGU6IHBsYWNlLndlYnNpdGUsXG4gICAgICAgICAgICB1cmw6IHBsYWNlLnVybFxuICAgICAgICAgIH07XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN0cm8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdVbmFibGUgdG8gZ2V0IHBob25lIG51bWJlciwgZW1haWwsIHVybCwgd2Vic2l0ZSBmcm9tIGdvb2dsZS4gZXJyb3I6ICVvJywgc3RhdHVzKTtcbiAgICAgICAgICBvYnNlcnZlci5lcnJvcignVW5hYmxlIHRvIGdldCBwaG9uZSBudW1iZXIsIGVtYWlsLCB1cmwsIHdlYnNpdGUgZnJvbSBnb29nbGUuIGVycm9yOicgKyBzdGF0dXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qcHVibGljIHN0b3JlQW5kVXBkYXRlUmVzdGF1cmFudHNCeU1hcCgpIHtcbiAgICB0aGlzLmdldExhdExuZygpLm1lcmdlTWFwKCAgKGxhdExuZykgPT4ge1xuICAgICAgY29uc3QgZGVmZXJyZWQgPSBwcm9taXNlLmRlZmVyKCk7XG4gICAgICAkcS53aGVuKHRoaXMuZ2V0TGF0TG5nKCkpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChsYXRMbmcpIHtcbiAgICAgICAgICAvLyBsYXRMbmcgPSB7bGF0aXR1ZGU6IDI4LjYyODkzMzIsIGxvbmdpdHVkZTogNzcuMjA2NTMyMn07IC8vMjguNjI4OTMzMiw3Ny4yMDY1MzIyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VXNlckxvY2F0aW9uKGxhdExuZyk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHVzZXJMb2NhdGlvbikge1xuICAgICAgICB0aGlzLmFwcFNlcnZpY2UudXNlckxvY2F0aW9uID0gdXNlckxvY2F0aW9uO1xuICAgICAgICAvLyBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgndXNlckxvY2F0aW9uJywgdXNlckxvY2F0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlclJlc3RhdXJhbnRzKHVzZXJMb2NhdGlvbik7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh1c2VyTmVhcmJ5UmVzdGF1cmFudHMpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N0b3JlQW5kVXBkYXRlUmVzdGF1cmFudHNCeU1hcHx1c2VyTmVhcmJ5UmVzdGF1cmFudHM6JW8nLCB1c2VyTmVhcmJ5UmVzdGF1cmFudHMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJOZWFyYnlSZXN0YXVyYW50cy5yZXN0YXVyYW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5hcHBTZXJ2aWNlLnVzZXJOZWFyYnlSZXN0YXVyYW50cy5yZXN0YXVyYW50Lml0ZW1zLnNwbGljZSgwLCAwLCB1c2VyTmVhcmJ5UmVzdGF1cmFudHMucmVzdGF1cmFudFtpXSk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJtYXAgcmVzdGF1cmFudCBhZGRlZDolMFwiLCB1c2VyTmVhcmJ5UmVzdGF1cmFudHMucmVzdGF1cmFudFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwaWNrZWQgdXAgcmVzdGF1cmFudHMgYW5kIGxvY2F0aW9uZnJvbSBtYXA6ICVvXCIsIHVzZXJOZWFyYnlSZXN0YXVyYW50cyk7XG4gICAgICAgIHRoaXMuaHR0cENsaWVudC5wb3N0KCdyZXN0YXVyYW50L2FkZExpc3QnLCB1c2VyTmVhcmJ5UmVzdGF1cmFudHMpLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0cy5kYXRhKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHdoaWxlIHN0b3JpbmcgZmV0Y2hlZCByZXN0YXVyYW50cyBmcm9tIGdvb2dsZSBtYXAhIDo6ICcgKyBlcnJvcik7XG4gICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0pOyAvLyAudGhlbihmdW5jdGlvbigpe3JldHVybiB0aGlzLnVzZXJSZXN0YXVyYW50RGV0YWlsKCl9KTtcbiAgICAgIC8vIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH0pO1xuICB9Ki9cblxuXG4gIHB1YmxpYyBhdXRvQ29tcGxldGUoc2VhcmNoRWxlbWVudFJlZjogRWxlbWVudFJlZiwgb3V0cHV0OiBFdmVudEVtaXR0ZXI8c3RyaW5nPikge1xuICAgIC8vIGxvYWQgUGxhY2VzIEF1dG9jb21wbGV0ZVxuICAgIC8vIHRoaXMubWFwc0FQSUxvYWRlci5sb2FkKCkudGhlbigoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZSA9IG5ldyAoPGFueT53aW5kb3cpLmdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGUoc2VhcmNoRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XG4gICAgICAgIHR5cGVzOiBbJ2FkZHJlc3MnXVxuICAgICAgfSk7XG5cbiAgICAgIGF1dG9Db21wbGV0ZS5hZGRMaXN0ZW5lcigncGxhY2VfY2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAvLyBnZXQgdGhlIHBsYWNlIHJlc3VsdFxuICAgICAgICAgIGxldCBwbGFjZSA9IGF1dG9Db21wbGV0ZS5nZXRQbGFjZSgpO1xuXG4gICAgICAgICAgLy8gdmVyaWZ5IHJlc3VsdFxuICAgICAgICAgIGlmIChwbGFjZS5nZW9tZXRyeSA9PT0gdW5kZWZpbmVkIHx8IHBsYWNlLmdlb21ldHJ5ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHBsYWNlID0gdGhpcy5wcm9jZXNzRnVsbExvY2F0aW9uKHBsYWNlKTtcblxuICAgICAgICAgIC8vIGNoYW5nZSB0aGUgbG9jYXRpb24gdG8gbmV3IGxvY2F0aW9uXG4gICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChwbGFjZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gc2VuZCBjaGFuZ2VkIGFkZHJlc3MgYmFja1xuICAgICAgICAgIG91dHB1dC5lbWl0KHBsYWNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzdG9yZUFuZFVwZGF0ZVJlc3RhdXJhbnRzTWFudWFsKHVzZXJMb2NhdGlvbikge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICB0aGlzLmdldFJlc3RhdXJhbnRzRnJvbUdvb2dsZU1hcCh1c2VyTG9jYXRpb24pLnN1YnNjcmliZSggKHVzZXJOZWFyYnlSZXN0YXVyYW50czogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdG9yZUFuZFVwZGF0ZVJlc3RhdXJhbnRzTWFudWFsfHVzZXJOZWFyYnlSZXN0YXVyYW50czolbycsIHVzZXJOZWFyYnlSZXN0YXVyYW50cyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlck5lYXJieVJlc3RhdXJhbnRzLnJlc3RhdXJhbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAvLyAkcm9vdFNjb3BlLnJlc3RhdXJhbnQuaXRlbXMuc3BsaWNlKDAsIDAsIHVzZXJOZWFyYnlSZXN0YXVyYW50cy5yZXN0YXVyYW50W2ldKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1hcCByZXN0YXVyYW50IGFkZGVkOiUwXCIsIHVzZXJOZWFyYnlSZXN0YXVyYW50cy5yZXN0YXVyYW50W2ldKTtcbiAgICAgICAgfVxuICAgICAgICAvKnRoaXMuaHR0cENsaWVudC5wb3N0KCdyZXN0YXVyYW50L2FkZExpc3QnLCB1c2VyTmVhcmJ5UmVzdGF1cmFudHMpLnN1bnNjcmliZSggKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICBvYnNlcnZlci5yZXNvbHZlKHJlc3VsdHMuZGF0YSk7XG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB3aGlsZSBzdG9yaW5nIGZldGNoZWQgcmVzdGF1cmFudHMgZnJvbSBnb29nbGUgbWFwISA6OiAnICsgZXJyb3IpO1xuICAgICAgICAgIG9ic2VydmVyLnJlamVjdChlcnJvcik7XG4gICAgICAgIH0pOyovXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBwcm9jZXNzRnVsbExvY2F0aW9uKGdvb2dsZUxvY2F0aW9uKSB7XG4gICAgY29uc3QgY2FuZGlmb29kTG9jYXRpb24gPSB7fTtcbiAgICBjb25zdCBnQWRkcmVzcyA9IGdvb2dsZUxvY2F0aW9uLmFkZHJlc3NfY29tcG9uZW50cztcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gZ29vZ2xlTG9jYXRpb24pIHtcbiAgICAgIGlmICh0eXBlb2YgZ29vZ2xlTG9jYXRpb25bcHJvcF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNhbmRpZm9vZExvY2F0aW9uW3Byb3BdID0gZ29vZ2xlTG9jYXRpb25bcHJvcF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FuZGlmb29kTG9jYXRpb25bJ2xhdGl0dWRlJ10gPSBnb29nbGVMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKTtcbiAgICBjYW5kaWZvb2RMb2NhdGlvblsnbG9uZ2l0dWRlJ10gPSBnb29nbGVMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ0FkZHJlc3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhbmRpZm9vZExvY2F0aW9uW2dBZGRyZXNzW2ldLnR5cGVzWzBdXSA9IFN0cmluZyhnQWRkcmVzc1tpXS5sb25nX25hbWUpLnRyaW0oKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBnb29nbGVMb2NhdGlvbi5waG90b3MgPT09ICdvYmplY3QnKSB7XG4gICAgICBmb3IgKGNvbnN0IHBob3RvIGluIGdvb2dsZUxvY2F0aW9uLnBob3Rvcykge1xuXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjYW5kaWZvb2RMb2NhdGlvbjtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm9BdXRoR3VhcmRTZXJ2aWNlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICB1c2VCYXNpY0F1dGg6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY3VycmVudFVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gIH1cblxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICh0aGlzLnVzZUJhc2ljQXV0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddLCB7XG4gICAgICAgIHJlcGxhY2VVcmw6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZSwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7QWxlcnQsIEFsZXJ0U2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWxlcnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nmcy1hbGVydHMnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzZC1hbGVydHNcIj5cbiAgPG5nYi1hbGVydCAqbmdGb3I9XCJsZXQgYWxlcnQgb2YgYWxlcnRzXCIgW3R5cGVdPVwiYWxlcnQudHlwZVwiIChjbG9zZSk9XCJjbG9zZUFsZXJ0KGFsZXJ0KVwiPlxuICAgIDxoND4ge3sgYWxlcnQudGl0bGUgfX0gPC9oND5cbiAgICA8aDY+IHt7IGFsZXJ0LnN1YlRpdGxlIH19IDwvaDY+XG4gICAgPHA+IHt7IGFsZXJ0LnRleHQgfX0gPC9wPlxuICA8L25nYi1hbGVydD5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC5zZC1hbGVydHN7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDo1MCU7ei1pbmRleDoxMDAwMDAwMDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNTAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01MCUsMCwwKTttYXJnaW4tdG9wOjFyZW07bWF4LXdpZHRoOjEwMCV9YF1cbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgcHVibGljIGFsZXJ0czogQXJyYXk8QWxlcnQ+ID0gW107XG4gIHB1YmxpYyBkZWxheTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRlcjogQWxlcnRTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFsZXJ0ZXIuYWxlcnRzLnN1YnNjcmliZSgoYTogQWxlcnQpID0+IHtcbiAgICAgIHRoaXMuZGVsYXkgPSAoYS5jbG9zZURlbGF5KSAqIDEwMDA7XG4gICAgICAvLyBwdXNoIGl0IG9uIHRvIHNob3dcbiAgICAgIHRoaXMuYWxlcnRzID0gdGhpcy5hbGVydHMuY29uY2F0KGEpO1xuXG4gICAgICAvLyBjbG9zZSB0aGUgYWxlcnQgYWZ0ZXIgNSBzZWNvbmRzIGJ5IGRlZmF1bHRcbiAgICAgIC8vIGhhdmUgdG8gdXNlIHRpbWVyIC0+IG1hcCBpbnN0ZWFkIG9mIGRlbGF5IGJlY2F1c2UgZGVsYXkgY2FuJ3QgY3VycmVudGx5XG4gICAgICAvLyBiZSBwcm9wZXJseSB1bml0IHRlc3RlZCBkdWUgdG8gZmFrZUFzeW5jIGlzc3Vlcy5cbiAgICAgIHRpbWVyKHRoaXMuZGVsYXkpLnBpcGUodGFrZSgxKSwgbWFwKCgpID0+IGEpKS5zdWJzY3JpYmUoKGFsKSA9PiB0aGlzLmNsb3NlQWxlcnQoYWwpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZUFsZXJ0KGFsOiBBbGVydCkge1xuICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLmFsZXJ0cy5pbmRleE9mKGFsKTtcbiAgICB0aGlzLmFsZXJ0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TmdiQWN0aXZlTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7TWFwU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWFwLnNlcnZpY2UnO1xuaW1wb3J0IHtmYVN0cmVldFZpZXcsIGZhVXRlbnNpbFNwb29ufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHtsaWJyYXJ5fSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZnMtY2hhbmdlLWxvY2F0aW9uLW1vZGVsJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+Q2hhbmdlIExvY2F0aW9uPC9oND5cbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJhY3RpdmVNb2RhbC5kaXNtaXNzKCdDcm9zcyBjbGljaycpXCI+XG4gICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgPC9idXR0b24+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwic2VhcmNoRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XG4gICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJbJ2ZhcycsICdzdHJlZXQtdmlldyddXCI+PC9mYS1pY29uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRlcm1cIiBwbGFjZWhvbGRlcj1cIlN0YXJ0IHR5cGluZyBhZGRyZXNzLi4uXCJcbiAgICAgICAgICAgICAgIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwib2ZmXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgI3NlYXJjaCBbZm9ybUNvbnRyb2xdPVwic2VhcmNoQ29udHJvbFwiPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxzbWFsbD48Yj5DdXJyZW50IGxvY2F0aW9uOjwvYj4ge3tpbnB1dCAmJiBpbnB1dC5mb3JtYXR0ZWRfYWRkcmVzcyB8fCAnUGxlYXNlIHNlbGVjdCB5b3VyIGxvY2F0aW9uJ319PC9zbWFsbD5cbiAgICA8L2Rpdj5cbiAgPC9mb3JtPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIiAoY2xpY2spPVwiYWN0aXZlTW9kYWwuZGlzbWlzcygnRG9uZScpXCI+RG9uZTwvYnV0dG9uPlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLmxvY2F0aW9uLWNoYW5nZS1tb2RhbCAubW9kYWwtY29udGVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmNzg2Mzk7Ym9yZGVyLXJhZGl1czowfS5sb2NhdGlvbi1jaGFuZ2UtbW9kYWwgLm1vZGFsLWNvbnRlbnQgLmNsb3Nle2NvbG9yOiNmZmZ9LmxvY2F0aW9uLWNoYW5nZS1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtaGVhZGVye2JhY2tncm91bmQtY29sb3I6I2Y3ODYzOTtjb2xvcjojZmZmfS5sb2NhdGlvbi1jaGFuZ2UtbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHl7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMwMDB9LmxvY2F0aW9uLWNoYW5nZS1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZm9vdGVye2JhY2tncm91bmQtY29sb3I6I2Y2ZjdmNjtjb2xvcjojNmQ2ZDZkfS5mdWxsLXdpZHRoe3dpZHRoOjEwMCV9YWdtLW1hcHtoZWlnaHQ6MzAwcHh9LnBhYy1jb250YWluZXJ7ei1pbmRleDo5OTk5fWBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENoYW5nZUxvY2F0aW9uTW9kZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBzZWFyY2hGb3JtOiBGb3JtR3JvdXA7XG5cbiAgQFZpZXdDaGlsZCgnc2VhcmNoJylcbiAgcHVibGljIHNlYXJjaEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gIHB1YmxpYyBzZWFyY2hDb250cm9sOiBGb3JtQ29udHJvbDtcblxuICBASW5wdXQoKSBpbnB1dDogYW55O1xuICBAT3V0cHV0KCkgb3V0cHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCxcbiAgICBwcml2YXRlIG1hcFNlcnZpY2U6IE1hcFNlcnZpY2UsXG4gICkge1xuICAgIC8vIGFkZCBmb250YXdlc29tZSBpY29ucyB0byB1c2VcbiAgICBsaWJyYXJ5LmFkZChmYVN0cmVldFZpZXcsIGZhVXRlbnNpbFNwb29uKTtcbiAgICB0aGlzLnNlYXJjaEZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgIHRlcm06IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcbiAgICB9KTtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY3JlYXRlIHNlYXJjaCBGb3JtQ29udHJvbFxuICAgIHRoaXMuc2VhcmNoQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICAgIHRoaXMubWFwU2VydmljZS5hdXRvQ29tcGxldGUodGhpcy5zZWFyY2hFbGVtZW50UmVmLCB0aGlzLm91dHB1dCk7XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5zZWFyY2hGb3JtLnZhbGlkKSB7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2ZzLWNvbnRlbnQtbG9hZGluZycsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInRpbWVsaW5lLXdyYXBwZXJcIj5cbiAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlcmF0ZSBvZiBpdGVyYXRlc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJhbmltYXRlZC1iYWNrZ3JvdW5kXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1tYXNrZXIgaGVhZGVyLXRvcFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJhY2tncm91bmQtbWFza2VyIGhlYWRlci1sZWZ0XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1tYXNrZXIgaGVhZGVyLXJpZ2h0XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1tYXNrZXIgaGVhZGVyLWJvdHRvbVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJhY2tncm91bmQtbWFza2VyIHN1YmhlYWRlci1sZWZ0XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1tYXNrZXIgc3ViaGVhZGVyLXJpZ2h0XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1tYXNrZXIgc3ViaGVhZGVyLWJvdHRvbVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJhY2tncm91bmQtbWFza2VyIGNvbnRlbnQtdG9wXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1tYXNrZXIgY29udGVudC1maXJzdC1lbmRcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJiYWNrZ3JvdW5kLW1hc2tlciBjb250ZW50LXNlY29uZC1saW5lXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1tYXNrZXIgY29udGVudC1zZWNvbmQtZW5kXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1tYXNrZXIgY29udGVudC10aGlyZC1saW5lXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1tYXNrZXIgY29udGVudC10aGlyZC1lbmRcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2AudGltZWxpbmUtaXRlbXtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyOjFweCBzb2xpZDtib3JkZXItY29sb3I6I2U1ZTZlOSAjZGZlMGU0ICNkMGQxZDU7Ym9yZGVyLXJhZGl1czozcHg7cGFkZGluZzoxMnB4O21hcmdpbi1ib3R0b206NXB4fUAtd2Via2l0LWtleWZyYW1lcyBwbGFjZUhvbGRlclNoaW1tZXJ7MCV7YmFja2dyb3VuZC1wb3NpdGlvbjotNDY4cHggMH0xMDAle2JhY2tncm91bmQtcG9zaXRpb246NDY4cHggMH19QGtleWZyYW1lcyBwbGFjZUhvbGRlclNoaW1tZXJ7MCV7YmFja2dyb3VuZC1wb3NpdGlvbjotNDY4cHggMH0xMDAle2JhY2tncm91bmQtcG9zaXRpb246NDY4cHggMH19LmFuaW1hdGVkLWJhY2tncm91bmR7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7YW5pbWF0aW9uLWR1cmF0aW9uOjFzOy13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkczthbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6cGxhY2VIb2xkZXJTaGltbWVyO2FuaW1hdGlvbi1uYW1lOnBsYWNlSG9sZGVyU2hpbW1lcjstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO2JhY2tncm91bmQ6I2Y2ZjdmODtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwjZWVlIDglLCNkZGQgMTglLCNlZWUgMzMlKTtiYWNrZ3JvdW5kLXNpemU6ODAwcHggMTA0cHg7aGVpZ2h0Ojk2cHg7cG9zaXRpb246cmVsYXRpdmV9LmJhY2tncm91bmQtbWFza2Vye2JhY2tncm91bmQ6I2ZmZjtwb3NpdGlvbjphYnNvbHV0ZX0uYmFja2dyb3VuZC1tYXNrZXIuaGVhZGVyLWJvdHRvbSwuYmFja2dyb3VuZC1tYXNrZXIuaGVhZGVyLXRvcCwuYmFja2dyb3VuZC1tYXNrZXIuc3ViaGVhZGVyLWJvdHRvbXt0b3A6MDtsZWZ0OjQwcHg7cmlnaHQ6MDtoZWlnaHQ6MTBweH0uYmFja2dyb3VuZC1tYXNrZXIuaGVhZGVyLWxlZnQsLmJhY2tncm91bmQtbWFza2VyLmhlYWRlci1yaWdodCwuYmFja2dyb3VuZC1tYXNrZXIuc3ViaGVhZGVyLWxlZnQsLmJhY2tncm91bmQtbWFza2VyLnN1YmhlYWRlci1yaWdodHt0b3A6MTBweDtsZWZ0OjQwcHg7aGVpZ2h0OjhweDt3aWR0aDoxMHB4fS5iYWNrZ3JvdW5kLW1hc2tlci5oZWFkZXItYm90dG9te3RvcDoxOHB4O2hlaWdodDo2cHh9LmJhY2tncm91bmQtbWFza2VyLnN1YmhlYWRlci1sZWZ0LC5iYWNrZ3JvdW5kLW1hc2tlci5zdWJoZWFkZXItcmlnaHR7dG9wOjI0cHg7aGVpZ2h0OjZweH0uYmFja2dyb3VuZC1tYXNrZXIuaGVhZGVyLXJpZ2h0LC5iYWNrZ3JvdW5kLW1hc2tlci5zdWJoZWFkZXItcmlnaHR7d2lkdGg6YXV0bztsZWZ0OjMwMHB4O3JpZ2h0OjB9LmJhY2tncm91bmQtbWFza2VyLnN1YmhlYWRlci1yaWdodHtsZWZ0OjIzMHB4fS5iYWNrZ3JvdW5kLW1hc2tlci5zdWJoZWFkZXItYm90dG9te3RvcDozMHB4O2hlaWdodDoxMHB4fS5iYWNrZ3JvdW5kLW1hc2tlci5jb250ZW50LWZpcnN0LWVuZCwuYmFja2dyb3VuZC1tYXNrZXIuY29udGVudC1zZWNvbmQtZW5kLC5iYWNrZ3JvdW5kLW1hc2tlci5jb250ZW50LXNlY29uZC1saW5lLC5iYWNrZ3JvdW5kLW1hc2tlci5jb250ZW50LXRoaXJkLWVuZCwuYmFja2dyb3VuZC1tYXNrZXIuY29udGVudC10aGlyZC1saW5lLC5iYWNrZ3JvdW5kLW1hc2tlci5jb250ZW50LXRvcHt0b3A6NDBweDtsZWZ0OjA7cmlnaHQ6MDtoZWlnaHQ6NnB4fS5iYWNrZ3JvdW5kLW1hc2tlci5jb250ZW50LXRvcHtoZWlnaHQ6MjBweH0uYmFja2dyb3VuZC1tYXNrZXIuY29udGVudC1maXJzdC1lbmQsLmJhY2tncm91bmQtbWFza2VyLmNvbnRlbnQtc2Vjb25kLWVuZCwuYmFja2dyb3VuZC1tYXNrZXIuY29udGVudC10aGlyZC1lbmR7d2lkdGg6YXV0bztsZWZ0OjM4MHB4O3JpZ2h0OjA7dG9wOjYwcHg7aGVpZ2h0OjhweH0uYmFja2dyb3VuZC1tYXNrZXIuY29udGVudC1zZWNvbmQtbGluZXt0b3A6NjhweH0uYmFja2dyb3VuZC1tYXNrZXIuY29udGVudC1zZWNvbmQtZW5ke2xlZnQ6NDIwcHg7dG9wOjc0cHh9LmJhY2tncm91bmQtbWFza2VyLmNvbnRlbnQtdGhpcmQtbGluZXt0b3A6ODJweH0uYmFja2dyb3VuZC1tYXNrZXIuY29udGVudC10aGlyZC1lbmR7bGVmdDozMDBweDt0b3A6ODhweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50TG9hZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcmVwZWF0cyA9IDE7XG4gIEBJbnB1dCgpIGl0ZXJhdGVzOiBBcnJheTxudW1iZXI+O1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXRlcmF0ZXMgPSBBcnJheSh0aGlzLnJlcGVhdHMpLmZpbGwoMCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ2JDYXJvdXNlbENvbmZpZ30gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZnMtY29yb3VzZWwnLFxuICB0ZW1wbGF0ZTogYDxuZ2ItY2Fyb3VzZWw+XG4gIDxuZy10ZW1wbGF0ZSBuZ2JTbGlkZSAqbmdGb3I9XCJsZXQgc2xpZGUgb2Ygc2xpZGVzXCI+XG4gICAgPGltZyBbc3JjXT1cInNsaWRlLnVybFwiICBhbHQ9XCJzbGlkZS5hbHRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvblwiPlxuICAgICAgPGgzPnt7c2xpZGUuaGVhZGVyfX08L2gzPlxuICAgICAgPHA+e3tzbGlkZS5kZXNjfX08L3A+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG48L25nYi1jYXJvdXNlbD5cbmAsXG4gIHN0eWxlczogW2BpbWd7bWFyZ2luOmF1dG87aGVpZ2h0OmF1dG87d2lkdGg6MTAwJX1gXVxufSlcbmV4cG9ydCBjbGFzcyBDb3JvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgc2xpZGVzOiB7XG4gICAgaGVhZGVyOiBzdHJpbmcsXG4gICAgZGVzYzogc3RyaW5nLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFsdDogc3RyaW5nXG4gIH07XG4gIGNvbnN0cnVjdG9yKG5nYkNhcm91c2VsQ29uZmlnOiBOZ2JDYXJvdXNlbENvbmZpZykge1xuICAgIG5nYkNhcm91c2VsQ29uZmlnLmludGVydmFsID0gMzAwMDtcbiAgICBuZ2JDYXJvdXNlbENvbmZpZy53cmFwID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7bGlicmFyeX0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7ZmFGYWNlYm9vaywgZmFHb29nbGVQbHVzLCBmYUxpbmtlZGluLCBmYVR3aXR0ZXJ9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xuXG5pbXBvcnQge2ZhVXNlciwgZmFIb21lLCBmYUZheCwgZmFQaG9uZSwgZmFFbnZlbG9wZX0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZnMtZm9vdGVyJyxcbiAgdGVtcGxhdGU6IGA8Zm9vdGVyIGNsYXNzPVwicGFnZS1mb290ZXIgc3R5bGlzaC1jb2xvci1kYXJrXCI+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXG4gICAgPGRpdiBjbGFzcz1cInJvdyB0ZXh0LWNlbnRlciB0ZXh0LW1kLWxlZnQgbXQtMyBwYi0zXCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2wtbGctMyBjb2wteGwtMyBteC1hdXRvIG10LTNcIj5cbiAgICAgICAgPGg2IGNsYXNzPVwidGl0bGUgbWItNCBmb250LWJvbGRcIj5jYW5kaWZvb2Q8L2g2PlxuICAgICAgICA8cD57e21lc3NhZ2UuaGVhZGluZ319PC9wPlxuICAgICAgICAgIDxwPnt7bWVzc2FnZS5kZXNjfX08L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGhyIGNsYXNzPVwidy0xMDAgY2xlYXJmaXggZC1tZC1ub25lXCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMiBjb2wtbGctMiBjb2wteGwtMiBteC1hdXRvIG10LTNcIj5cbiAgICAgICAgPGg2IGNsYXNzPVwidGl0bGUgbWItNCBmb250LWJvbGRcIj5Nb3JlPC9oNj5cbiAgICAgICAgPHAgKm5nRm9yPVwibGV0IGxpbmsgb2YgY29sdW1uT25lTGlua3NcIj48YSBbcm91dGVyTGlua109XCJsaW5rLnVybFwiPnt7bGluay5sYWJlbH19PC9hPjwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aHIgY2xhc3M9XCJ3LTEwMCBjbGVhcmZpeCBkLW1kLW5vbmVcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbC1sZy0yIGNvbC14bC0yIG14LWF1dG8gbXQtM1wiPlxuICAgICAgICA8aDYgY2xhc3M9XCJ0aXRsZSBtYi00IGZvbnQtYm9sZFwiPlVzZWZ1bCBsaW5rczwvaDY+XG4gICAgICAgIDxwICpuZ0Zvcj1cImxldCBsaW5rIG9mIGNvbHVtblR3b0xpbmtzXCI+PGEgW3JvdXRlckxpbmtdPVwibGluay51cmxcIj57e2xpbmsubGFiZWx9fTwvYT48L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGhyIGNsYXNzPVwidy0xMDAgY2xlYXJmaXggZC1tZC1ub25lXCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wtbGctMyBjb2wteGwtMyBteC1hdXRvIG10LTNcIj5cbiAgICAgICAgPGg2IGNsYXNzPVwidGl0bGUgbWItNCBmb250LWJvbGRcIj5Db250YWN0PC9oNj5cbiAgICAgICAgPHA+PGZhLWljb24gW2ljb25dPVwiWydmYXMnLCdob21lJ11cIj48L2ZhLWljb24+e3tjb250YWN0Lm5hbWV9fTwvcD5cbiAgICAgICAgPHA+PGZhLWljb24gW2ljb25dPVwiWydmYXMnLCdlbnZlbG9wZSddXCI+PC9mYS1pY29uPnt7Y29udGFjdC5lbWFpbH19PC9wPlxuICAgICAgICA8cD48ZmEtaWNvbiBbaWNvbl09XCJbJ2ZhcycsJ3Bob25lJ11cIj48L2ZhLWljb24+e3tjb250YWN0LnBob25lfX08L3A+XG4gICAgICAgIDxwPjxmYS1pY29uIFtpY29uXT1cIlsnZmFzJywnZmF4J11cIj48L2ZhLWljb24+e3tjb250YWN0LmZheH19PC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICAgIDxocj5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3cgcHktMyBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbGctOVwiPlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtbWQtbGVmdCBncmV5LXRleHRcIj5cbiAgICAgICAgICDDgsKpIHt7eWVhcn19IENvcHlyaWdodDpcbiAgICAgICAgICA8YSBocmVmPVwie3ticmFuZC51cmx9fVwiPlxuICAgICAgICAgICAgPHN0cm9uZz57e2JyYW5kLmxhYmVsfX08L3N0cm9uZz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLWxnLTMgbWwtbGctMFwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzb2NpYWwtc2VjdGlvbiB0ZXh0LWNlbnRlciB0ZXh0LW1kLWxlZnRcIj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWlubGluZVwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pbmxpbmUtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0bi1mbG9hdGluZyBidG4tc20gcmdiYS13aGl0ZS1zbGlnaHQgbXIteGwtNFwiIGhyZWY9XCJ7e3NvY2lhbC5mYWNlYm9va319XCI+XG4gICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiWydmYWInLCdmYWNlYm9vayddXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pbmxpbmUtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0bi1mbG9hdGluZyBidG4tc20gcmdiYS13aGl0ZS1zbGlnaHQgbXIteGwtNFwiIGhyZWY9XCJ7e3NvY2lhbC50d2l0dGVyfX1cIj5cbiAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJbJ2ZhYicsJ3R3aXR0ZXInXVwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtaW5saW5lLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4tZmxvYXRpbmcgYnRuLXNtIHJnYmEtd2hpdGUtc2xpZ2h0IG1yLXhsLTRcIiBocmVmPVwie3tzb2NpYWwuZ29vZ2xlUGx1c319XCI+XG4gICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiWydmYWInLCdnb29nbGUtcGx1cyddXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pbmxpbmUtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0bi1mbG9hdGluZyBidG4tc20gcmdiYS13aGl0ZS1zbGlnaHQgbXIteGwtNFwiIGhyZWY9XCJ7e3NvY2lhbC5saW5rZWRpbn19XCI+XG4gICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiWydmYWInLCdsaW5rZWRpbiddXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuXG48L2Zvb3Rlcj5cbmAsXG4gIHN0eWxlczogW2AucGFnZS1mb290ZXJ7YmFja2dyb3VuZC1jb2xvcjojOWQ4OTg2fWZvb3Rlci5wYWdlLWZvb3RlcnttYXJnaW4tdG9wOjIwcHg7cGFkZGluZy10b3A6MjBweDtjb2xvcjojZmZmfWEsYTphY3RpdmUsYTpob3ZlcixhOnZpc2l0ZWR7Y29sb3I6I2ZmYmMzMTt0ZXh0LWRlY29yYXRpb246bm9uZX1hOmFjdGl2ZSxhOmhvdmVye2NvbG9yOiNmZjgyMTl9YF1cbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBzb2NpYWw6IHtcbiAgICBmYWNlYm9vazogc3RyaW5nLFxuICAgIGdvb2dsZVBsdXM6IHN0cmluZyxcbiAgICB0d2l0dGVyOiBzdHJpbmcsXG4gICAgbGlua2VkaW46IHN0cmluZyxcbiAgfTtcbiAgQElucHV0KCkgeWVhcjogc3RyaW5nO1xuICBASW5wdXQoKSBicmFuZDoge2xhYmVsOiBzdHJpbmcsIHVybDogc3RyaW5nfTtcbiAgQElucHV0KCkgY29weXJpZ2h0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbnRhY3Q6IHtuYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIHBob25lOiBzdHJpbmcsIGZheDogc3RyaW5nfTtcbiAgQElucHV0KCkgbWVzc2FnZToge2hlYWRpbmc6IHN0cmluZywgZGVzYzogc3RyaW5nfTtcbiAgQElucHV0KCkgY29sdW1uT25lTGlua3M6IEFycmF5PHtsYWJlbDogc3RyaW5nLCB1cmw6IHN0cmluZ30+O1xuICBASW5wdXQoKSBjb2x1bW5Ud29MaW5rczogQXJyYXk8e2xhYmVsOiBzdHJpbmcsIHVybDogc3RyaW5nfT47XG5cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsaWJyYXJ5LmFkZChmYVVzZXIsIGZhSG9tZSwgZmFGYXgsIGZhUGhvbmUsIGZhRW52ZWxvcGUsIGZhVHdpdHRlciwgZmFGYWNlYm9vaywgZmFHb29nbGVQbHVzLCBmYUxpbmtlZGluKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7ZmFTdHJlZXRWaWV3LCBmYVV0ZW5zaWxTcG9vbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7bGlicmFyeX0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2ZzLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuXG4gIDxjZnMtYWxlcnRzPjwvY2ZzLWFsZXJ0cz5cblxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cbiAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1saWdodCBuYXZiYXItZXhwYW5kLW1kIGJnLWZhZGVkIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cblxuICAgICAgPGEgW3JvdXRlckxpbmtdPVwiYnJhbmQudXJsXCIgY2xhc3M9XCJuYXZiYXItYnJhbmQgZC1mbGV4IHctNTAgbXItYXV0b1wiPlxuICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMve3tsb2dvfX1cIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiBjbGFzcz1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRvcFwiIGFsdD1cIlwiPnt7YnJhbmQubGFiZWx9fVxuICAgICAgPC9hPlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXIgYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgIGRhdGEtdGFyZ2V0PVwiI2NhbmRpZm9vZHRvZ2dsZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXG4gICAgICAgIChjbGljayk9XCJpc0NvbGxhcHNlZCA9ICFpc0NvbGxhcHNlZFwiIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiIWlzQ29sbGFwc2VkXCIgYXJpYS1jb250cm9scz1cImNhbmRpZm9vZHRvZ2dsZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSB3LTEwMFwiIGlkPVwiY2FuZGlmb29kdG9nZ2xlXCIgIFtuZ2JDb2xsYXBzZV09XCJpc0NvbGxhcHNlZFwiPlxuXG4gICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXYgdy0xMDAganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIGFjdGl2ZVwiICpuZ0lmPVwibWlkZGxlQnV0dG9uLmRpc3BsYXlcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIG5nLWJpbmRpbmcgc3RyZWV0LWJ1dHRvblwiIChjbGljayk9XCJvcGVuKClcIj5cbiAgICAgICAgICAgICAgPGZhLWljb24gW2hpZGRlbl09XCJtaWRkbGVCdXR0b24ubG9hZGluZ1wiIFtpY29uXT1cIlsnZmFzJywgJ3N0cmVldC12aWV3J11cIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgIDxmYS1pY29uIFtoaWRkZW5dPVwiIW1pZGRsZUJ1dHRvbi5sb2FkaW5nXCIgW2ljb25dPVwiWydmYXMnLCAndXRlbnNpbC1zcG9vbiddXCIgW3NwaW5dPVwidHJ1ZVwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAge3tsb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcyB8fCBtaWRkbGVCdXR0b24ubGFiZWx9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdiBtbC1hdXRvIHctMTAwIGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiICpuZ0Zvcj1cImxldCBsaW5rIG9mIGxlZnRMaW5rc1wiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIFtyb3V0ZXJMaW5rXT1cImxpbmsudXJsXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPnt7bGluay5sYWJlbH19PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPCEtLTxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IG5nYkRyb3Bkb3duIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIG5nYkRyb3Bkb3duVG9nZ2xlXG5cbiAgICAgICAgICAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPkFkbWluPC9hPlxuICAgICAgICAgICAgICA8ZGl2IG5nYkRyb3Bkb3duTWVudSBhcmlhLWxhYmVsbGVkYnk9XCJwcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBbcm91dGVyTGlua109XCInL3VzZXItbWFuYWdlJ1wiPk1hbmFnZSB1c2VyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBbcm91dGVyTGlua109XCInL2hvbGktc3RhdGljcydcIj5FdmVudCBzdGF0aWNzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBbcm91dGVyTGlua109XCInL2hvbGknXCI+SG9saSAyMDE4IGd1ZXN0IGVudHJ5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBbcm91dGVyTGlua109XCInL2hvbGktbWFuYWdlJ1wiPk5hbWUgc2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBbcm91dGVyTGlua109XCInL2Nzdi11cGxvYWQnXCI+VXBsb2FkIENTViBmaWxlPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT4tLT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuXG4gIDwvZGl2PlxuXG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2AuaGVhZGVye2JhY2tncm91bmQtY29sb3I6I2VjOGU0OX0uaGVhZGVyIC5nYXVyYW1hcmctbGVmdHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MH0uaGVhZGVyIC5nYXVyYW1hcmctcmlnaHR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MH0uaGVhZGVyIC5jb250YWluZXIsbmF2e2JhY2tncm91bmQtY29sb3I6I2VjOGU0OX0uc3RyZWV0LWJ1dHRvbntjb2xvcjojZmZmO3BhZGRpbmc6MCA1cHg7Zm9udC1zaXplOjE2cHh9LnN0cmVldC12aWV3e2NvbG9yOiNlYzhlNDk7dmVydGljYWwtYWxpZ246YmFzZWxpbmU7bWFyZ2luOjVweDtmb250LXNpemU6MThweH1gXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBsb2dvO1xuICBASW5wdXQoKSBicmFuZDogeyBsYWJlbDogc3RyaW5nLCB1cmw6IHN0cmluZyB9O1xuICBASW5wdXQoKSBsZWZ0TGlua3M6IEFycmF5PHsgbGFiZWw6IHN0cmluZywgdXJsOiBzdHJpbmcsIGRpc3BsYXk6IGJvb2xlYW4gfT47XG4gIEBJbnB1dCgpIHJpZ2h0TGlua3M6IEFycmF5PHsgbGFiZWw6IHN0cmluZywgdXJsOiBzdHJpbmcsIGRpc3BsYXk6IGJvb2xlYW4gfT47XG4gIEBJbnB1dCgpIG1pZGRsZUJ1dHRvbjogeyBkaXNwbGF5OiBib29sZWFuLCBsYWJlbDogc3RyaW5nLCBsb2FkaW5nOiBib29sZWFufTtcbiAgQE91dHB1dCgpIG1pZGRsZUJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgcHVibGljIGlzQ29sbGFwc2VkID0gdHJ1ZTtcbiAgcHVibGljIGxvY2F0aW9uOiBhbnkgPSBbXTtcbiAgcHVibGljIHNlYXJjaEZvcm06IEZvcm1Hcm91cDtcbiAgcHJpdmF0ZSB0ZXJtOiBBYnN0cmFjdENvbnRyb2w7XG4gIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuO1xuICBwdWJsaWMgbW9kYWxSZWY7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gYWRkIGZvbnRhd2Vzb21lIGljb25zIHRvIHVzZVxuICAgIGxpYnJhcnkuYWRkKGZhU3RyZWV0VmlldywgZmFVdGVuc2lsU3Bvb24pO1xuXG4gICAgdGhpcy5zZWFyY2hGb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICB0ZXJtOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXG4gICAgfSk7XG4gICAgdGhpcy50ZXJtID0gdGhpcy5zZWFyY2hGb3JtLmNvbnRyb2xzWyd0ZXJtJ107XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5taWRkbGVCdXR0b25DbGljay5lbWl0KCdjbGljaycpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FsZXJ0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZnMtbG9naW4nLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9J3NwbGFzaCc+XG48L2Rpdj5cblxuXG48ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICA8aDI+TG9naW48L2gyPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNhcmQtYmxvY2tcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImxvZ2luRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCIgb25pbnZhbGlkPVwiXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIFtuZ0NsYXNzXT1cInsnaGFzLWRhbmdlcic6IHVzZXJuYW1lLmludmFsaWQgJiYgKHVzZXJuYW1lLmRpcnR5IHx8IHVzZXJuYW1lLnRvdWNoZWQpfVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+VXNlciBJRDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItMiBtci1zbS0yIG1iLXNtLTBcIj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPjxpIGNsYXNzPVwiZmEgZmEtdXNlclwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIGZvcm1Db250cm9sTmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1kYW5nZXJcIiBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInVzZXJuYW1lLmludmFsaWQgJiYgKHVzZXJuYW1lLmRpcnR5IHx8IHVzZXJuYW1lLnRvdWNoZWQpXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlciBhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNsb3NlXCI+PC9pPiBVc2VybmFtZSBpcyByZXF1aXJlZFxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBbbmdDbGFzc109XCJ7J2hhcy1kYW5nZXInOiBwYXNzd29yZC5pbnZhbGlkICYmIChwYXNzd29yZC5kaXJ0eSB8fCBwYXNzd29yZC50b3VjaGVkKX1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTIgbXItc20tMiBtYi1zbS0wXCI+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj48aSBjbGFzcz1cImZhIGZhLWtleVwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwicGFzc3dvcmQuaW52YWxpZCAmJiAocGFzc3dvcmQuZGlydHkgfHwgcGFzc3dvcmQudG91Y2hlZClcIiBjbGFzcz1cInRleHQtZGFuZ2VyIGFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2xvc2VcIj48L2k+IFBhc3N3b3JkIGlzIHJlcXVpcmVkXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cImxvZ2luRm9ybS5pbnZhbGlkIHx8IGxvYWRpbmdcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zaWduLWluXCI+PC9pPkxvZ2luPGkgY2xhc3M9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gZmEtZndcIiAqbmdJZj1cImxvYWRpbmdcIj48L2k+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5gLFxuICBzdHlsZXM6IFtgYm9keXtiYWNrZ3JvdW5kLWNvbG9yOiNlYWI5MGR9LmNhcmQtaGVhZGVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojZTI2NzBlfS5jYXJke2JvcmRlci1jb2xvcjojZDA5OTkyO2JveC1zaGFkb3c6MXB4IDRweCA3cHggMCAjZTJiNjgyLDAgNHB4IDE3cHggMCAjZTJjYWFjO3Bvc2l0aW9uOmZpeGVkO3RvcDo1MCU7bGVmdDo1MCU7d2lkdGg6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt6LWluZGV4OjEwMX0uc3BsYXNoe3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQtY29sb3I6IzY5NmRlYTg1O29wYWNpdHk6MTtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246b3BhY2l0eSAuOHMgZWFzZS1pbi1vdXQsei1pbmRleCAuMXMgbGluZWFyIC44czt6LWluZGV4OjEwMH0uc3BsYXNoPnN2Z3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt3aWR0aDo1MHZ3O2hlaWdodDo1MHZofXNkLXJvb3Q6ZW1wdHkrLnNwbGFzaHtvcGFjaXR5OjE7ei1pbmRleDoxMDB9YF1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBsb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBsb2dpbkZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIHVzZXJuYW1lOiBBYnN0cmFjdENvbnRyb2w7XG4gIHB1YmxpYyBwYXNzd29yZDogQWJzdHJhY3RDb250cm9sO1xuICBwdWJsaWMgcmV0dXJuVXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5sb2dpbkZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgIHVzZXJuYW1lOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXG4gICAgICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXG4gICAgfSk7XG5cbiAgICB0aGlzLnVzZXJuYW1lID0gdGhpcy5sb2dpbkZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ107XG4gICAgdGhpcy5wYXNzd29yZCA9IHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzWydwYXNzd29yZCddO1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMucmV0dXJuVXJsID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1sncmV0dXJuVXJsJ10gfHwgJy8nO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMubG9naW5Gb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy51c2VyU2VydmljZS5nZXRDdXJyZW50VXNlcih0aGlzLmxvZ2luRm9ybS52YWx1ZS51c2VybmFtZSwgdGhpcy5sb2dpbkZvcm0udmFsdWUucGFzc3dvcmQpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgLy8gbmF2aWdhdGUgYnkgdXJsIGlzIHVzZWQgZHVlIHRvIHRoZSBmYWN0IHRoYXQgdGhlIHJldHVyblVybCBtYXkgaGF2ZSBvcHRpb25hbCBwYXJhbXMgd2hpY2ggbmVlZCB0byBiZSBwYXJzZWQuXG4gICAgICAgICAgLy8gc2FtZSBpcyB0cnVlIGZvciBxdWVyeSBwYXJhbXNcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMucmV0dXJuVXJsLCB7IHJlcGxhY2VVcmw6IHRydWUgfSk7XG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnTG9naW4gZmFpbHVyZSEnLFxuICAgICAgICAgICAgc3ViVGl0bGU6ICdVbmFibGUgdG8gbG9naW4hIFBsZWFzZSB0cnkgYWdhaW4gb3IgY29udGFjdCBzdXBwb3J0IHRlYW0uJyxcbiAgICAgICAgICAgIHRleHQ6IGVycm9yLFxuICAgICAgICAgICAgdHlwZTogJ2RhbmdlcidcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nmcy1wcml2YWN5JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwianVtYm90cm9uXCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDU+UHJpdmFjeSBQb2xpY3k8L2g1PlxuICAgIDxoNj5vcGVyYXRlcyB0aGUgd2Vic2l0ZSwgd2hpY2ggcHJvdmlkZXMgdGhlIFNFUlZJQ0UuPC9oNj5cblxuICAgIDxwPlRoaXMgcGFnZSBpcyB1c2VkIHRvIGluZm9ybSB3ZWJzaXRlIHZpc2l0b3JzIHJlZ2FyZGluZyBvdXIgcG9saWNpZXMgd2l0aCB0aGUgY29sbGVjdGlvbiwgdXNlLCBhbmQgZGlzY2xvc3VyZSBvZlxuICAgICAgUGVyc29uYWwgSW5mb3JtYXRpb24gaWYgYW55b25lIGRlY2lkZWQgdG8gdXNlIG91ciBTZXJ2aWNlLlxuICAgIDwvcD5cblxuICAgIDxwPklmIHlvdSBjaG9vc2UgdG8gdXNlIG91ciBTZXJ2aWNlLCB0aGVuIHlvdSBhZ3JlZSB0byB0aGUgY29sbGVjdGlvbiBhbmQgdXNlIG9mIGluZm9ybWF0aW9uIGluIHJlbGF0aW9uIHdpdGggdGhpc1xuICAgICAgcG9saWN5LiBUaGUgUGVyc29uYWwgSW5mb3JtYXRpb24gdGhhdCB3ZSBjb2xsZWN0IGFyZSB1c2VkIGZvciBwcm92aWRpbmcgYW5kIGltcHJvdmluZyB0aGUgU2VydmljZS4gV2Ugd2lsbCBub3QgdXNlXG4gICAgICBvclxuICAgICAgc2hhcmUgeW91ciBpbmZvcm1hdGlvbiB3aXRoIGFueW9uZSBleGNlcHQgYXMgZGVzY3JpYmVkIGluIHRoaXMgUHJpdmFjeSBQb2xpY3kuXG4gICAgPC9wPlxuXG4gICAgPHA+VGhlIHRlcm1zIHVzZWQgaW4gdGhpcyBQcml2YWN5IFBvbGljeSBoYXZlIHRoZSBzYW1lIG1lYW5pbmdzIGFzIGluIG91ciBUZXJtcyBhbmQgQ29uZGl0aW9ucywgd2hpY2ggaXMgYWNjZXNzaWJsZVxuICAgICAgYXQgLFxuICAgICAgdW5sZXNzIG90aGVyd2lzZSBkZWZpbmVkIGluIHRoaXMgUHJpdmFjeSBQb2xpY3kuXG4gICAgPC9wPlxuXG4gICAgPGg1PkluZm9ybWF0aW9uIENvbGxlY3Rpb24gYW5kIFVzZTwvaDU+XG5cbiAgICA8cD5Gb3IgYSBiZXR0ZXIgZXhwZXJpZW5jZSB3aGlsZSB1c2luZyBvdXIgU2VydmljZSwgd2UgbWF5IHJlcXVpcmUgeW91IHRvIHByb3ZpZGUgdXMgd2l0aCBjZXJ0YWluIHBlcnNvbmFsbHlcbiAgICAgIGlkZW50aWZpYWJsZVxuICAgICAgaW5mb3JtYXRpb24sIGluY2x1ZGluZyBidXQgbm90IGxpbWl0ZWQgdG8geW91ciBuYW1lLCBwaG9uZSBudW1iZXIsIGFuZCBwb3N0YWwgYWRkcmVzcy4gVGhlIGluZm9ybWF0aW9uIHRoYXQgd2VcbiAgICAgIGNvbGxlY3RcbiAgICAgIHdpbGwgYmUgdXNlZCB0byBjb250YWN0IG9yIGlkZW50aWZ5IHlvdS48L3A+XG5cbiAgICA8aDU+TG9nIERhdGE8L2g1PlxuXG4gICAgPHA+V2Ugd2FudCB0byBpbmZvcm0geW91IHRoYXQgd2hlbmV2ZXIgeW91IHZpc2l0IG91ciBTZXJ2aWNlLCB3ZSBjb2xsZWN0IGluZm9ybWF0aW9uIHRoYXQgeW91ciBicm93c2VyIHNlbmRzIHRvIHVzXG4gICAgICB0aGF0XG4gICAgICBpcyBjYWxsZWQgTG9nIERhdGEuIFRoaXMgTG9nIERhdGEgbWF5IGluY2x1ZGUgaW5mb3JtYXRpb24gc3VjaCBhcyB5b3VyIGNvbXB1dGVyw6LCgMKZcyBJbnRlcm5ldCBQcm90b2NvbCAow6LCgMKcSVDDosKAwp0pXG4gICAgICBhZGRyZXNzLFxuICAgICAgYnJvd3NlciB2ZXJzaW9uLCBwYWdlcyBvZiBvdXIgU2VydmljZSB0aGF0IHlvdSB2aXNpdCwgdGhlIHRpbWUgYW5kIGRhdGUgb2YgeW91ciB2aXNpdCwgdGhlIHRpbWUgc3BlbnQgb24gdGhvc2VcbiAgICAgIHBhZ2VzLFxuICAgICAgYW5kIG90aGVyIHN0YXRpc3RpY3MuPC9wPlxuXG4gICAgPGg1PkNvb2tpZXM8L2g1PlxuXG4gICAgPHA+Q29va2llcyBhcmUgZmlsZXMgd2l0aCBzbWFsbCBhbW91bnQgb2YgZGF0YSB0aGF0IGlzIGNvbW1vbmx5IHVzZWQgYW4gYW5vbnltb3VzIHVuaXF1ZSBpZGVudGlmaWVyLiBUaGVzZSBhcmUgc2VudFxuICAgICAgdG9cbiAgICAgIHlvdXIgYnJvd3NlciBmcm9tIHRoZSB3ZWJzaXRlIHRoYXQgeW91IHZpc2l0IGFuZCBhcmUgc3RvcmVkIG9uIHlvdXIgY29tcHV0ZXLDosKAwplzIGhhcmQgZHJpdmUuPC9wPlxuXG4gICAgPHA+T3VyIHdlYnNpdGUgdXNlcyB0aGVzZSDDosKAwpxjb29raWVzw6LCgMKdIHRvIGNvbGxlY3Rpb24gaW5mb3JtYXRpb24gYW5kIHRvIGltcHJvdmUgb3VyIFNlcnZpY2UuIFlvdSBoYXZlIHRoZSBvcHRpb24gdG9cbiAgICAgIGVpdGhlclxuICAgICAgYWNjZXB0IG9yIHJlZnVzZSB0aGVzZSBjb29raWVzLCBhbmQga25vdyB3aGVuIGEgY29va2llIGlzIGJlaW5nIHNlbnQgdG8geW91ciBjb21wdXRlci4gSWYgeW91IGNob29zZSB0byByZWZ1c2Ugb3VyXG4gICAgICBjb29raWVzLCB5b3UgbWF5IG5vdCBiZSBhYmxlIHRvIHVzZSBzb21lIHBvcnRpb25zIG9mIG91ciBTZXJ2aWNlLjwvcD5cblxuICAgIDxoNT5TZXJ2aWNlIFByb3ZpZGVyczwvaDU+XG5cbiAgICA8aDY+V2UgbWF5IGVtcGxveSB0aGlyZC1wYXJ0eSBjb21wYW5pZXMgYW5kIGluZGl2aWR1YWxzIGR1ZSB0byB0aGUgZm9sbG93aW5nIHJlYXNvbnM6PC9oNj5cblxuICAgIDxwPlRvIGZhY2lsaXRhdGUgb3VyIFNlcnZpY2U7XG4gICAgICBUbyBwcm92aWRlIHRoZSBTZXJ2aWNlIG9uIG91ciBiZWhhbGY7XG4gICAgICBUbyBwZXJmb3JtIFNlcnZpY2UtcmVsYXRlZCBzZXJ2aWNlczsgb3JcbiAgICAgIFRvIGFzc2lzdCB1cyBpbiBhbmFseXppbmcgaG93IG91ciBTZXJ2aWNlIGlzIHVzZWQuXG4gICAgICBXZSB3YW50IHRvIGluZm9ybSBvdXIgU2VydmljZSB1c2VycyB0aGF0IHRoZXNlIHRoaXJkIHBhcnRpZXMgaGF2ZSBhY2Nlc3MgdG8geW91ciBQZXJzb25hbCBJbmZvcm1hdGlvbi4gVGhlIHJlYXNvblxuICAgICAgaXNcbiAgICAgIHRvIHBlcmZvcm0gdGhlIHRhc2tzIGFzc2lnbmVkIHRvIHRoZW0gb24gb3VyIGJlaGFsZi4gSG93ZXZlciwgdGhleSBhcmUgb2JsaWdhdGVkIG5vdCB0byBkaXNjbG9zZSBvciB1c2UgdGhlXG4gICAgICBpbmZvcm1hdGlvbiBmb3IgYW55IG90aGVyIHB1cnBvc2UuPC9wPlxuXG4gICAgPGg1PlNlY3VyaXR5PC9oNT5cblxuICAgIDxwPldlIHZhbHVlIHlvdXIgdHJ1c3QgaW4gcHJvdmlkaW5nIHVzIHlvdXIgUGVyc29uYWwgSW5mb3JtYXRpb24sIHRodXMgd2UgYXJlIHN0cml2aW5nIHRvIHVzZSBjb21tZXJjaWFsbHlcbiAgICAgIGFjY2VwdGFibGVcbiAgICAgIG1lYW5zIG9mIHByb3RlY3RpbmcgaXQuIEJ1dCByZW1lbWJlciB0aGF0IG5vIG1ldGhvZCBvZiB0cmFuc21pc3Npb24gb3ZlciB0aGUgaW50ZXJuZXQsIG9yIG1ldGhvZCBvZiBlbGVjdHJvbmljXG4gICAgICBzdG9yYWdlXG4gICAgICBpcyAxMDAlIHNlY3VyZSBhbmQgcmVsaWFibGUsIGFuZCB3ZSBjYW5ub3QgZ3VhcmFudGVlIGl0cyBhYnNvbHV0ZSBzZWN1cml0eS48L3A+XG5cbiAgICA8aDU+TGlua3MgdG8gT3RoZXIgU2l0ZXM8L2g1PlxuXG4gICAgPHA+T3VyIFNlcnZpY2UgbWF5IGNvbnRhaW4gbGlua3MgdG8gb3RoZXIgc2l0ZXMuIElmIHlvdSBjbGljayBvbiBhIHRoaXJkLXBhcnR5IGxpbmssIHlvdSB3aWxsIGJlIGRpcmVjdGVkIHRvIHRoYXRcbiAgICAgIHNpdGUuXG4gICAgICBOb3RlIHRoYXQgdGhlc2UgZXh0ZXJuYWwgc2l0ZXMgYXJlIG5vdCBvcGVyYXRlZCBieSB1cy4gVGhlcmVmb3JlLCB3ZSBzdHJvbmdseSBhZHZpc2UgeW91IHRvIHJldmlldyB0aGUgUHJpdmFjeVxuICAgICAgUG9saWN5XG4gICAgICBvZiB0aGVzZSB3ZWJzaXRlcy4gV2UgaGF2ZSBubyBjb250cm9sIG92ZXIsIGFuZCBhc3N1bWUgbm8gcmVzcG9uc2liaWxpdHkgZm9yIHRoZSBjb250ZW50LCBwcml2YWN5IHBvbGljaWVzLCBvclxuICAgICAgcHJhY3RpY2VzIG9mIGFueSB0aGlyZC1wYXJ0eSBzaXRlcyBvciBzZXJ2aWNlcy48L3A+XG5cbiAgICA8aDU+Q2hpbGRyZW7DosKAwplzIFByaXZhY3k8L2g1PlxuXG4gICAgPHA+T3VyIFNlcnZpY2VzIGRvIG5vdCBhZGRyZXNzIGFueW9uZSB1bmRlciB0aGUgYWdlIG9mIDEzLiBXZSBkbyBub3Qga25vd2luZ2x5IGNvbGxlY3QgcGVyc29uYWwgaWRlbnRpZmlhYmxlXG4gICAgICBpbmZvcm1hdGlvblxuICAgICAgZnJvbSBjaGlsZHJlbiB1bmRlciAxMy4gSW4gdGhlIGNhc2Ugd2UgZGlzY292ZXIgdGhhdCBhIGNoaWxkIHVuZGVyIDEzIGhhcyBwcm92aWRlZCB1cyB3aXRoIHBlcnNvbmFsIGluZm9ybWF0aW9uLFxuICAgICAgd2VcbiAgICAgIGltbWVkaWF0ZWx5IGRlbGV0ZSB0aGlzIGZyb20gb3VyIHNlcnZlcnMuIElmIHlvdSBhcmUgYSBwYXJlbnQgb3IgZ3VhcmRpYW4gYW5kIHlvdSBhcmUgYXdhcmUgdGhhdCB5b3VyIGNoaWxkIGhhc1xuICAgICAgcHJvdmlkZWQgdXMgd2l0aCBwZXJzb25hbCBpbmZvcm1hdGlvbiwgcGxlYXNlIGNvbnRhY3QgdXMgc28gdGhhdCB3ZSB3aWxsIGJlIGFibGUgdG8gZG8gbmVjZXNzYXJ5IGFjdGlvbnMuPC9wPlxuXG4gICAgPGg1PkNoYW5nZXMgdG8gVGhpcyBQcml2YWN5IFBvbGljeTwvaDU+XG5cbiAgICA8cD5XZSBtYXkgdXBkYXRlIG91ciBQcml2YWN5IFBvbGljeSBmcm9tIHRpbWUgdG8gdGltZS4gVGh1cywgd2UgYWR2aXNlIHlvdSB0byByZXZpZXcgdGhpcyBwYWdlIHBlcmlvZGljYWxseSBmb3IgYW55XG4gICAgICBjaGFuZ2VzLiBXZSB3aWxsIG5vdGlmeSB5b3Ugb2YgYW55IGNoYW5nZXMgYnkgcG9zdGluZyB0aGUgbmV3IFByaXZhY3kgUG9saWN5IG9uIHRoaXMgcGFnZS4gVGhlc2UgY2hhbmdlcyBhcmVcbiAgICAgIGVmZmVjdGl2ZVxuICAgICAgaW1tZWRpYXRlbHksIGFmdGVyIHRoZXkgYXJlIHBvc3RlZCBvbiB0aGlzIHBhZ2UuPC9wPlxuXG4gICAgPGg1PkNvbnRhY3QgVXM8L2g1PlxuXG4gICAgPHA+SWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyBvciBzdWdnZXN0aW9ucyBhYm91dCBvdXIgUHJpdmFjeSBQb2xpY3ksIGRvIG5vdCBoZXNpdGF0ZSB0byBjb250YWN0IHVzLjwvcD5cblxuICAgIDxwPlRoaXMgUHJpdmFjeSBQb2xpY3kgcGFnZSB3YXMgY3JlYXRlZCBhdCBQcml2YWN5IFBvbGljeSBUZW1wbGF0ZS5uZXQuPC9wPlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFByaXZhY3lDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nmcy1wcm9maWxlJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwianVtYm90cm9uIGp1bWJvdHJvbi1mbHVpZFwiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiAqbmdJZj1cInVzZXJTZXJ2aWNlLmlzQXV0aGVudGljYXRlZFwiIGNsYXNzPVwiY2FyZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICA8aDY+e3t1c2VyU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQuZmlyc3ROYW1lfX0ge3t1c2VyU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQubGFzdE5hbWV9fTwvaDY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJsb2NrXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgRW1haWw6IHt7dXNlclNlcnZpY2UuaXNBdXRoZW50aWNhdGVkLmVtYWlsfX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgUGhvbmU6IHt7dXNlclNlcnZpY2UuaXNBdXRoZW50aWNhdGVkLnBob25lfX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgVHlwZToge3t1c2VyU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQudHlwZX19XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIG1iLTJcIiAoY2xpY2spPVwibG9nb3V0KClcIj5cbiAgICAgICAgICAgICAgICAgICAgTG9nIG91dDxpIGNsYXNzPVwiZmEgZmEtc3Bpbm5lciBmYS1zcGluIGZhLWZ3XCIgKm5nSWY9XCJsb2FkaW5nXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBsb2FkaW5nOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnVzZXJBdXRob3JpemF0aW9ucyA9IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7QWZ0ZXJDb250ZW50SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2ZzQXV0b1Njcm9sbF0nXG59KVxuXG5leHBvcnQgY2xhc3MgQXV0b1Njcm9sbERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgnbG9jay15LW9mZnNldCcpIHB1YmxpYyBsb2NrWU9mZnNldCA9IDEwO1xuICBASW5wdXQoJ29ic2VydmUtYXR0cmlidXRlcycpIHB1YmxpYyBvYnNlcnZlQXR0cmlidXRlcyA9ICdmYWxzZSc7XG5cbiAgcHJpdmF0ZSBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfaXNMb2NrZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBtdXRhdGlvbk9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0T2JzZXJ2ZUF0dHJpYnV0ZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub2JzZXJ2ZUF0dHJpYnV0ZXMgIT09ICcnICYmIHRoaXMub2JzZXJ2ZUF0dHJpYnV0ZXMudG9Mb3dlckNhc2UoKSAhPT0gJ2ZhbHNlJztcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9pc0xvY2tlZCkge1xuICAgICAgICB0aGlzLnNjcm9sbERvd24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICBhdHRyaWJ1dGVzOiB0aGlzLmdldE9ic2VydmVBdHRyaWJ1dGVzKCksXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JjZVNjcm9sbERvd24oKTogdm9pZCB7XG4gICAgdGhpcy5zY3JvbGxEb3duKCk7XG4gIH1cblxuICBwdWJsaWMgaXNMb2NrZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTG9ja2VkO1xuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxEb3duKCk6IHZvaWQge1xuICAgIHRoaXMubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJylcbiAgcHJpdmF0ZSBzY3JvbGxIYW5kbGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IHNjcm9sbEZyb21Cb3R0b20gPSB0aGlzLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCAtIHRoaXMubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgdGhpcy5faXNMb2NrZWQgPSBzY3JvbGxGcm9tQm90dG9tID4gdGhpcy5sb2NrWU9mZnNldDtcbiAgfVxufVxuIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcywgUm91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtQcml2YWN5Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvcHJpdmFjeS9wcml2YWN5LmNvbXBvbmVudCc7XG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7UHJvZmlsZUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHtBdXRoR3VhcmRTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgtZ3VhcmQuc2VydmljZSc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ3ByaXZhY3knLFxuICAgIGNvbXBvbmVudDogUHJpdmFjeUNvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJ2xvZ2luJyxcbiAgICBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncHJvZmlsZScsXG4gICAgY29tcG9uZW50OiBQcm9maWxlQ29tcG9uZW50LFxuICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkU2VydmljZV1cbiAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMvKiwgeyBlbmFibGVUcmFjaW5nOiB0cnVlIH0qLylcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFJvdXRlck1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVSb3V0aW5nTW9kdWxlIHtcbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdiQWN0aXZlTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2ZzLW1vZGVsJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+e3t0aXRsZX19PC9oND5cbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJhY3RpdmVNb2RhbC5kaXNtaXNzKCdDcm9zcyBjbGljaycpXCI+XG4gICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgPC9idXR0b24+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCIgKGNsaWNrKT1cImFjdGl2ZU1vZGFsLmRpc21pc3MoJ0RvbmUnKVwiPkRvbmU8L2J1dHRvbj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIE1vZGVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuLCBJbmplY3RvciwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hbGVydC5zZXJ2aWNlJztcbmltcG9ydCB7IEFwcEluaXRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hcHAtaW5pdC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhHdWFyZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgtZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IEFsZXJ0c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hbGVydHMvYWxlcnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVuY3J5cHRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9lbmNyeXB0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbWFwLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FwcC5zZXJ2aWNlJztcbmltcG9ydCB7IE5vQXV0aEd1YXJkU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbm8tYXV0aC1ndWFyZC5zZXJ2aWNlJztcbmltcG9ydCB7IEdvb2dsZUFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2dvb2dsZS1hbmFseXRpY3Muc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUHJpdmFjeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcml2YWN5L3ByaXZhY3kuY29tcG9uZW50JztcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IENvcmVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmlsdGVyUGlwZSB9IGZyb20gJy4vc2VydmljZXMvZmlsdGVyLXBpcGUuc2VydmljZSc7XG5pbXBvcnQgeyBDaGFuZ2VMb2NhdGlvbk1vZGVsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NoYW5nZS1sb2NhdGlvbi1tb2RlbC9jaGFuZ2UtbG9jYXRpb24tbW9kZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3JlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vY29yZS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBDb3JvdXNlbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb3JvdXNlbC9jb3JvdXNlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBDb250ZW50TG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50LWxvYWRpbmcvY29udGVudC1sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRvU2Nyb2xsRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2F1dG8tc2Nyb2xsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNb2RlbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RlbC9tb2RlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJztcblxuZXhwb3J0IGNvbnN0IFdJTkRPVyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCdBIHJlZmVyZW5jZSB0byB0aGUgd2luZG93Jyk7XG5cbmV4cG9ydCBmdW5jdGlvbiB3aW5kb3dGYWN0b3J5KCkge1xuICByZXR1cm4gd2luZG93O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5nYk1vZHVsZS5mb3JSb290KCksXG4gICAgQ29yZVJvdXRpbmdNb2R1bGUsXG4gICAgRm9udEF3ZXNvbWVNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICBBbGVydHNDb21wb25lbnQsXG4gICAgTG9naW5Db21wb25lbnQsXG4gICAgUHJvZmlsZUNvbXBvbmVudCxcbiAgICBQcml2YWN5Q29tcG9uZW50LFxuICAgIENoYW5nZUxvY2F0aW9uTW9kZWxDb21wb25lbnQsXG4gICAgQ29yb3VzZWxDb21wb25lbnQsXG4gICAgRmlsdGVyUGlwZSxcbiAgICBDb250ZW50TG9hZGluZ0NvbXBvbmVudCxcbiAgICBBdXRvU2Nyb2xsRGlyZWN0aXZlLFxuICAgIE1vZGVsQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgRm9vdGVyQ29tcG9uZW50LFxuICAgIEFsZXJ0c0NvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBQcm9maWxlQ29tcG9uZW50LFxuICAgIFByaXZhY3lDb21wb25lbnQsXG4gICAgQ2hhbmdlTG9jYXRpb25Nb2RlbENvbXBvbmVudCxcbiAgICBDb3JvdXNlbENvbXBvbmVudCxcbiAgICBDb250ZW50TG9hZGluZ0NvbXBvbmVudCxcbiAgICBBdXRvU2Nyb2xsRGlyZWN0aXZlLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgRm9vdGVyQ29tcG9uZW50LFxuICAgIEFsZXJ0c0NvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBQcm9maWxlQ29tcG9uZW50LFxuICAgIFByaXZhY3lDb21wb25lbnQsXG4gICAgQ2hhbmdlTG9jYXRpb25Nb2RlbENvbXBvbmVudCxcbiAgICBDb3JvdXNlbENvbXBvbmVudCxcbiAgICBDb250ZW50TG9hZGluZ0NvbXBvbmVudCxcbiAgICBNb2RlbENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb3JlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEFwcFNlcnZpY2UsXG4gICAgICAgIEFsZXJ0U2VydmljZSxcbiAgICAgICAgQXBwSW5pdFNlcnZpY2UsXG4gICAgICAgIEF1dGhHdWFyZFNlcnZpY2UsXG4gICAgICAgIENvcmVTZXJ2aWNlLFxuICAgICAgICBFbmNyeXB0aW9uU2VydmljZSxcbiAgICAgICAgTWFwU2VydmljZSxcbiAgICAgICAgTm9BdXRoR3VhcmRTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogV0lORE9XLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IHdpbmRvd0ZhY3RvcnlcbiAgICAgICAgfSxcbiAgICAgICAgVXNlclNlcnZpY2UsXG4gICAgICAgIEdvb2dsZUFuYWx5dGljc1NlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlLCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0NvcmVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZ2lzdGVyQ3VzdG9tRWxlbWVudHMoKTtcblxuICB9XG5cbiAgbmdEb0Jvb3RzdHJhcCgpIHtcbiAgfVxuXG4gIHJlZ2lzdGVyQ3VzdG9tRWxlbWVudHMoKSB7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjZi1oZWFkZXInLCBjcmVhdGVDdXN0b21FbGVtZW50KEhlYWRlckNvbXBvbmVudCwge2luamVjdG9yOiB0aGlzLmluamVjdG9yfSkpO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY2YtZm9vdGVyJywgY3JlYXRlQ3VzdG9tRWxlbWVudChGb290ZXJDb21wb25lbnQsIHtpbmplY3RvcjogdGhpcy5pbmplY3Rvcn0pKTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NmLWFsZXJ0JywgY3JlYXRlQ3VzdG9tRWxlbWVudChBbGVydHNDb21wb25lbnQsIHtpbmplY3RvcjogdGhpcy5pbmplY3Rvcn0pKTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NmLWxvZ2luJywgY3JlYXRlQ3VzdG9tRWxlbWVudChMb2dpbkNvbXBvbmVudCwge2luamVjdG9yOiB0aGlzLmluamVjdG9yfSkpO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY2YtcHJvZmlsZScsIGNyZWF0ZUN1c3RvbUVsZW1lbnQoUHJvZmlsZUNvbXBvbmVudCwge2luamVjdG9yOiB0aGlzLmluamVjdG9yfSkpO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY2YtcHJpdmFjeScsIGNyZWF0ZUN1c3RvbUVsZW1lbnQoUHJpdmFjeUNvbXBvbmVudCwge2luamVjdG9yOiB0aGlzLmluamVjdG9yfSkpO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY2YtY2hhbmdlLWxvY2F0aW9uLW1vZGVsJywgY3JlYXRlQ3VzdG9tRWxlbWVudChDaGFuZ2VMb2NhdGlvbk1vZGVsQ29tcG9uZW50LCB7aW5qZWN0b3I6IHRoaXMuaW5qZWN0b3J9KSk7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjZi1jb3JvdXNlbCcsIGNyZWF0ZUN1c3RvbUVsZW1lbnQoQ29yb3VzZWxDb21wb25lbnQsIHtpbmplY3RvcjogdGhpcy5pbmplY3Rvcn0pKTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NmLWNvbnRlbnQtbG9hZGluZycsIGNyZWF0ZUN1c3RvbUVsZW1lbnQoQ29udGVudExvYWRpbmdDb21wb25lbnQsIHtpbmplY3RvcjogdGhpcy5pbmplY3Rvcn0pKTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NmLW1vZGVsJywgY3JlYXRlQ3VzdG9tRWxlbWVudChNb2RlbENvbXBvbmVudCwge2luamVjdG9yOiB0aGlzLmluamVjdG9yfSkpO1xuICB9XG5cbn1cbiJdLCJuYW1lcyI6WyJSZXBsYXlTdWJqZWN0IiwiSW5qZWN0YWJsZSIsIk9ic2VydmFibGUiLCJtYXAiLCJIdHRwQ2xpZW50Iiwicm91dGVyIiwiUm91dGVyIiwiUGlwZSIsIlN1YmplY3QiLCJOZ1pvbmUiLCJ0aW1lciIsInRha2UiLCJDb21wb25lbnQiLCJJbnB1dCIsIkV2ZW50RW1pdHRlciIsImxpYnJhcnkiLCJmYVN0cmVldFZpZXciLCJmYVV0ZW5zaWxTcG9vbiIsIkZvcm1Hcm91cCIsIkZvcm1Db250cm9sIiwiVmFsaWRhdG9ycyIsIlZpZXdFbmNhcHN1bGF0aW9uIiwiTmdiQWN0aXZlTW9kYWwiLCJWaWV3Q2hpbGQiLCJPdXRwdXQiLCJOZ2JDYXJvdXNlbENvbmZpZyIsImZhVXNlciIsImZhSG9tZSIsImZhRmF4IiwiZmFQaG9uZSIsImZhRW52ZWxvcGUiLCJmYVR3aXR0ZXIiLCJmYUZhY2Vib29rIiwiZmFHb29nbGVQbHVzIiwiZmFMaW5rZWRpbiIsIkFjdGl2YXRlZFJvdXRlIiwiRGlyZWN0aXZlIiwiRWxlbWVudFJlZiIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIiwiUm91dGVyTW9kdWxlIiwiSW5qZWN0aW9uVG9rZW4iLCJjcmVhdGVDdXN0b21FbGVtZW50IiwiQ29tbW9uTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSIsIk5nYk1vZHVsZSIsIkZvbnRBd2Vzb21lTW9kdWxlIiwiT3B0aW9uYWwiLCJTa2lwU2VsZiIsIkluamVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsUUFZQTtRQUVFLHNCQUFvQixLQUFhLEVBQVMsUUFBUSxFQUFTLElBQUksRUFBUyxVQUFtQjtZQUF2RSxVQUFLLEdBQUwsS0FBSyxDQUFRO1lBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBQTtZQUFTLFNBQUksR0FBSixJQUFJLENBQUE7WUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFTO1lBQ3pGLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1NBQ3ZCOzJC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