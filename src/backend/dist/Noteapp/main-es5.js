function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _students_students_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./students/students.component */
    "./src/app/students/students.component.ts"); // tslint:disable-next-line: max-line-length


    var routes = [{
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    }, {
      path: 'studentdashboard',
      component: _students_students_component__WEBPACK_IMPORTED_MODULE_4__["StudentsComponent"]
    }]; //  { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) }

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _students_students_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./students/students.module */
    "./src/app/students/students.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _students_students_module__WEBPACK_IMPORTED_MODULE_8__["StudentsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _students_students_module__WEBPACK_IMPORTED_MODULE_8__["StudentsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _students_students_module__WEBPACK_IMPORTED_MODULE_8__["StudentsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter username");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_span_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(service, route) {
        _classCallCheck(this, LoginComponent);

        this.service = service;
        this.route = route;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        } // login

      }, {
        key: "login",
        value: function login() {
          var _this = this;

          if (this.loginForm.valid) {
            this.service.login(this.loginForm.value).subscribe(function (result) {
              console.log(result);

              if (result['message'] === 'username not available') {
                alert('Please enter an valid username');
              }

              if (result['message'] === 'Invaid password') {
                alert('Please enter a valid password');
              }

              if (result['message'] === 'Login success') {
                _this.loginForm.reset();

                localStorage.setItem('token', result['token']);
                localStorage.setItem('name', result['name']);
                localStorage.setItem('username', result['username']);
                localStorage.setItem('class', result['class']);
                ;
                alert('Login Success');

                if (result['username'] === 'Teacher') {
                  _this.route.navigateByUrl('/teachersdashboard');
                } else {
                  _this.route.navigateByUrl('/studentdashboard');
                }
              }
            });
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 26,
      vars: 4,
      consts: [[1, "container-fluid", "imgbg"], [1, "row"], [1, "col-sm-4"], [1, "cardstyle"], [1, "card", "p-4", "cardstyle1"], [1, "text-danger"], [1, "py-3", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "placeholder", "Enter username", "id", "name", "formControlName", "username", 1, "form-control", "form-control-sm"], ["class", "validate", 4, "ngIf"], ["for", "pwd"], ["type", "password", "placeholder", "Enter password", "id", "pwd", "formControlName", "password", 1, "form-control", "form-control-sm"], ["routerLink", "/register"], [1, "register"], [1, "btn", "btn-sm", "btn-danger", "btn-block", "rounded-0", 3, "disabled"], [1, "validate"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login to your Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Enter Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_span_13_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_span_18_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Register Here?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginForm.get("username").valid && ctx.loginForm.get("username").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginForm.get("password").valid && ctx.loginForm.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".imgbg[_ngcontent-%COMP%]{\r\n    background: url('loginbg.jpg') no-repeat;\r\n    background-size: cover;\r\n    height: 100vh;\r\n}\r\n.cardstyle[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    top: 40%;\r\n}\r\nlabel[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n}\r\n.register[_ngcontent-%COMP%]{\r\n    color: green;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    cursor: pointer;\r\n}\r\n.register[_ngcontent-%COMP%]:focus{\r\n    border: none;\r\n}\r\n.cardstyle1[_ngcontent-%COMP%]{\r\n    background-color: #f1f1f1;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n}\r\n.validate[_ngcontent-%COMP%]{\r\n    color: red;\r\n    font-size: 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdDQUFtRDtJQUNuRCxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdiZ3tcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvbG9naW5iZy5qcGcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5jYXJkc3R5bGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDQwJTtcclxufVxyXG5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLnJlZ2lzdGVye1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucmVnaXN0ZXI6Zm9jdXN7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmNhcmRzdHlsZTF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnZhbGlkYXRle1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegisterComponent_option_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var class_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", class_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](class_r1);
      }
    }

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(studentService, route) {
        _classCallCheck(this, RegisterComponent);

        this.studentService = studentService;
        this.route = route;
        this.studentclass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            "class": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        } // register

      }, {
        key: "registration",
        value: function registration() {
          var _this2 = this;

          console.log(this.registerForm.value);

          if (this.registerForm.valid) {
            this.studentService.createStudent(this.registerForm.value).subscribe(function (result) {
              console.log(result);

              if (result['message'] === 'Student Registred Success') {
                alert('Registration Success');

                _this2.registerForm.reset();

                _this2.route.navigateByUrl('/login');
              }

              if (result['message'] === 'username name existed') {
                alert('Username already existed choose another one..!');
              }
            });
          }
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 48,
      vars: 3,
      consts: [[1, "container-fluid", "imgbg"], [1, "row"], [1, "col-sm-4"], [1, "cardstyle"], [1, "card", "p-4", "cardstyle1"], [2, "color", "black"], [1, "py-3", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "placeholder", "Enter name", "id", "name", "formControlName", "name", 1, "form-control", "form-control-sm"], ["for", "username"], ["type", "text", "placeholder", "Enter username", "id", "username", "formControlName", "username", 1, "form-control", "form-control-sm"], ["for", "gmail"], ["type", "email", "placeholder", "Enter email", "id", "gmail", "formControlName", "email", 1, "form-control", "form-control-sm"], ["for", "pwd"], ["type", "password", "placeholder", "Enter password", "id", "pwd", "formControlName", "password", 1, "form-control", "form-control-sm"], ["formControlName", "class", "formControlName", "class", 1, "form-control", "form-control-sm"], [3, "value", 4, "ngFor", "ngForOf"], [1, "d-flex"], [1, "pl-3"], ["type", "radio", "value", "Male", "formControlName", "gender", "name", "gender"], ["type", "radio", "value", "Female", "formControlName", "gender", "name", "gender"], ["routerLink", "/login"], [1, "register"], ["type", "submit", 1, "btn", "btn-sm", "btn-danger", "btn-block", "rounded-0", 3, "disabled"], [3, "value"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create Your Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_8_listener() {
            return ctx.registration();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enter Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Enter Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Select your class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RegisterComponent_option_29_Template, 2, 2, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Male ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Female ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Go to login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Signup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.studentclass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: [".imgbg[_ngcontent-%COMP%]{\r\n    background: url('loginbg.jpg') no-repeat;\r\n    height: 100vh;\r\n}\r\n.cardstyle[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    top: 2.8%;\r\n}\r\nlabel[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n}\r\n.register[_ngcontent-%COMP%]{\r\n    color: green;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n}\r\n.cardstyle1[_ngcontent-%COMP%]{\r\n    background-color: #f1f1f1;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdDQUFtRDtJQUNuRCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ2Jne1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9sb2dpbmJnLmpwZykgbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uY2FyZHN0eWxle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyLjglO1xyXG59XHJcbmxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4ucmVnaXN0ZXJ7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5jYXJkc3R5bGUxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [{
          type: _services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/student.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/student.service.ts ***!
    \*********************************************/

  /*! exports provided: StudentService */

  /***/
  function srcAppServicesStudentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentService", function () {
      return StudentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var StudentService =
    /*#__PURE__*/
    function () {
      function StudentService(http, route) {
        _classCallCheck(this, StudentService);

        this.http = http;
        this.route = route;
        this.notesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      } // register


      _createClass(StudentService, [{
        key: "createStudent",
        value: function createStudent(data) {
          return this.http.post('http://localhost:8000/student/registration', data);
        } // login

      }, {
        key: "login",
        value: function login(logindata) {
          return this.http.post('http://localhost:8000/student/login', logindata);
        } // save notes content

      }, {
        key: "saveNotes",
        value: function saveNotes(content) {
          return this.http.post('http://localhost:8000/teacher/savenotes', content);
        } // get students notes data

      }, {
        key: "getNotes",
        value: function getNotes() {
          var _this3 = this;

          this.http.get('http://localhost:8000/student/notedrecords/' + localStorage.getItem('username')).subscribe(function (data) {
            _this3.notesSubject.next(data['notesData']);
          });
        } // edit notes

      }, {
        key: "updateNotes",
        value: function updateNotes(data) {
          return this.http.put('http://localhost:8000/student/updatecontent', data);
        } // delete notes

      }, {
        key: "deleteNotes",
        value: function deleteNotes(id) {
          return this.http["delete"]('http://localhost:8000/student/deletenotes/' + id);
        }
      }]);

      return StudentService;
    }();

    StudentService.ɵfac = function StudentService_Factory(t) {
      return new (t || StudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    StudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StudentService,
      factory: StudentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/teacher.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/teacher.service.ts ***!
    \*********************************************/

  /*! exports provided: TeacherService */

  /***/
  function srcAppServicesTeacherServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherService", function () {
      return TeacherService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TeacherService =
    /*#__PURE__*/
    function () {
      function TeacherService(http) {
        _classCallCheck(this, TeacherService);

        this.http = http;
        this.classsubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      }

      _createClass(TeacherService, [{
        key: "getclassdata",
        value: function getclassdata(classnumber) {
          var _this4 = this;

          this.http.post('http://localhost:8000/student/classlist/' + classnumber, null).subscribe(function (data) {
            _this4.classsubject.next(data);
          });
        } // edit notes

      }, {
        key: "updateNotes",
        value: function updateNotes(data) {
          return this.http.put('http://localhost:8000/teacher/updatecontent', data);
        }
      }]);

      return TeacherService;
    }();

    TeacherService.ɵfac = function TeacherService_Factory(t) {
      return new (t || TeacherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    TeacherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TeacherService,
      factory: TeacherService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/students/notes/notes.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/students/notes/notes.component.ts ***!
    \***************************************************/

  /*! exports provided: NotesComponent */

  /***/
  function srcAppStudentsNotesNotesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesComponent", function () {
      return NotesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function NotesComponent_h4_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Data Loading.....!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NotesComponent_h4_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No data found.....!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NotesComponent_table_16_tr_10_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var notes_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, notes_r9.notescontent, 0, 150), "...");
      }
    }

    function NotesComponent_table_16_tr_10_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var notes_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notes_r9.notescontent);
      }
    }

    function NotesComponent_table_16_tr_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotesComponent_table_16_tr_10_td_3_Template, 3, 5, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotesComponent_table_16_tr_10_ng_template_4_Template, 2, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesComponent_table_16_tr_10_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var notes_r9 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.editNotes(notes_r9._id, notes_r9.notescontent);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesComponent_table_16_tr_10_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var notes_r9 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.deleteNotes(notes_r9._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var notes_r9 = ctx.$implicit;
        var i_r10 = ctx.index;

        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", notes_r9.notescontent.length > 150)("ngIfElse", _r12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, notes_r9.time), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 7, notes_r9.time, "h:mm a"), "");
      }
    }

    function NotesComponent_table_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "S.no");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Notes Content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Time");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NotesComponent_table_16_tr_10_Template, 16, 10, "tr", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.notesData);
      }
    }

    function NotesComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Update your notes :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesComponent_div_17_Template_label_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.closeModel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotesComponent_div_17_Template_textarea_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.contentnotes = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesComponent_div_17_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.updateNotes();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.contentnotes);
      }
    }

    var NotesComponent =
    /*#__PURE__*/
    function () {
      function NotesComponent(studentservice, router) {
        _classCallCheck(this, NotesComponent);

        this.studentservice = studentservice;
        this.router = router;
        this.loading = true;
        this.notesData = [];
        this.showModel = false;
      }

      _createClass(NotesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          console.log('Current id IS', this.currentId);

          if (!localStorage.getItem('token')) {
            alert('Please login');
            this.router.navigateByUrl('/login');
          }

          this.studentservice.getNotes();
          this.studentservice.notesSubject.subscribe(function (data) {
            _this5.loading = false;
            _this5.notesData = data;
          });
        }
      }, {
        key: "lgout",
        value: function lgout() {
          if (localStorage.getItem('token')) {
            localStorage.clear();
            alert('Logout Success');
            this.router.navigateByUrl('/login');
          }
        } // close model

      }, {
        key: "closeModel",
        value: function closeModel() {
          if (this.showModel) {
            this.showModel = false;
          }
        } // edit notes content

      }, {
        key: "editNotes",
        value: function editNotes(id, content) {
          this.currentId = id;
          console.log(this.currentId);
          this.contentnotes = content;
          this.showModel = true;
        } // update 

      }, {
        key: "updateNotes",
        value: function updateNotes() {
          var _this6 = this;

          console.log('Curent id is', this.currentId);
          console.log(this.contentnotes);
          this.studentservice.updateNotes({
            id: this.currentId,
            content: this.contentnotes
          }).subscribe(function (response) {
            if (response['message'] === 'Update success') {
              _this6.showModel = false;

              _this6.studentservice.getNotes();

              alert('Update Success');
            }
          });
        } // delete notes content

      }, {
        key: "deleteNotes",
        value: function deleteNotes(id) {
          var _this7 = this;

          this.studentservice.deleteNotes(id).subscribe(function (result) {
            if (result['message'] === 'Deleted success') {
              _this7.studentservice.getNotes();

              alert('Notes Deleted');
            }
          });
        }
      }]);

      return NotesComponent;
    }();

    NotesComponent.ɵfac = function NotesComponent_Factory(t) {
      return new (t || NotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    NotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotesComponent,
      selectors: [["app-notes"]],
      decls: 18,
      vars: 4,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-info", 2, "max-width", "100vw"], [1, "navbar-brand"], ["src", "../../../assets/notes.jpg", "alt", "notes", "width", "100px", 1, "img-thumbnail"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "active"], ["routerLink", "/studentdashboard", 1, "nav-link", "font-weight-bold", "text-white", 2, "cursor", "pointer"], [1, "nav-link", "font-weight-bold", 2, "cursor", "pointer", 3, "click"], ["src", "../../../assets/logout.png", "width", "30px", "alt", "", 1, "img-rounded"], ["class", "text-center text-danger pt-3", 4, "ngIf"], [1, "container-fluid"], ["class", "table taable-sm tableStyle", 4, "ngIf"], ["class", "updatemodel", 4, "ngIf"], [1, "text-center", "text-danger", "pt-3"], [1, "table", "taable-sm", "tableStyle"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["style", "width: 64vw;", 4, "ngIf", "ngIfElse"], ["normal", ""], [1, "btn", "btn-danger", "btn-sm", "rounded-0", 3, "click"], [2, "width", "64vw"], [1, "updatemodel"], [1, "card", "cstyle", "p-3"], [1, "form-group"], ["for", "notesdata"], [2, "float", "right", "cursor", "pointer", "color", "red", 3, "click"], ["rows", "5", "id", "notesdata", "name", "cotent", 1, "form-control", 2, "resize", "none", 3, "ngModel", "ngModelChange"]],
      template: function NotesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add Notes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesComponent_Template_a_click_11_listener() {
            return ctx.lgout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NotesComponent_h4_13_Template, 2, 0, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NotesComponent_h4_14_Template, 2, 0, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NotesComponent_table_16_Template, 12, 1, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NotesComponent_div_17_Template, 12, 1, "div", 14);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notesData.length == 0 && !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notesData.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showModel);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]],
      styles: [".updatemodel[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 50;\r\n    background: rgba(0,0,0,0.75);\r\n}\r\n.cstyle[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    top: 30vh;\r\n    left: 34vw;\r\n    width: 30vw;\r\n}\r\nlabel[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n}\r\n.tableStyle[_ngcontent-%COMP%]{\r\n    font-size: 13px; \r\n    max-height: 100vh;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBkYXRlbW9kZWx7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHotaW5kZXg6IDUwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjc1KTtcclxufVxyXG4uY3N0eWxle1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAzMHZoO1xyXG4gICAgbGVmdDogMzR2dztcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG59XHJcbmxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4udGFibGVTdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDsgXHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notes',
          templateUrl: './notes.component.html',
          styleUrls: ['./notes.component.css']
        }]
      }], function () {
        return [{
          type: _services_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/students/studentheader/studentheader.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/students/studentheader/studentheader.component.ts ***!
    \*******************************************************************/

  /*! exports provided: StudentheaderComponent */

  /***/
  function srcAppStudentsStudentheaderStudentheaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentheaderComponent", function () {
      return StudentheaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/student.service */
    "./src/app/services/student.service.ts");

    var StudentheaderComponent =
    /*#__PURE__*/
    function () {
      function StudentheaderComponent(route, studentService) {
        _classCallCheck(this, StudentheaderComponent);

        this.route = route;
        this.studentService = studentService;
      }

      _createClass(StudentheaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // logout

      }, {
        key: "lgout",
        value: function lgout() {
          if (localStorage.getItem('token')) {
            localStorage.clear();
            alert('Logout success');
            this.route.navigateByUrl('/login');
          }
        }
      }]);

      return StudentheaderComponent;
    }();

    StudentheaderComponent.ɵfac = function StudentheaderComponent_Factory(t) {
      return new (t || StudentheaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]));
    };

    StudentheaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentheaderComponent,
      selectors: [["app-studentheader"]],
      decls: 13,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-info"], [1, "navbar-brand"], ["src", "../../../assets/notes.jpg", "alt", "notes", "width", "100px", 1, "img-thumbnail"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "active"], ["routerLink", "/notes", 1, "nav-link", "font-weight-bold", "text-white", 2, "cursor", "pointer"], [1, "nav-link", "font-weight-bold", 2, "cursor", "pointer", 3, "click"], ["src", "../../../assets/logout.png", "width", "30px", "alt", "", 1, "img-rounded"]],
      template: function StudentheaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "All Notes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentheaderComponent_Template_a_click_11_listener() {
            return ctx.lgout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRzL3N0dWRlbnRoZWFkZXIvc3R1ZGVudGhlYWRlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentheaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-studentheader',
          templateUrl: './studentheader.component.html',
          styleUrls: ['./studentheader.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/students/students-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/students/students-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: StudentsRoutingModule */

  /***/
  function srcAppStudentsStudentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentsRoutingModule", function () {
      return StudentsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _notes_notes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./notes/notes.component */
    "./src/app/students/notes/notes.component.ts");
    /* harmony import */


    var _students_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./students.component */
    "./src/app/students/students.component.ts");
    /* harmony import */


    var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./teacher/teacher.component */
    "./src/app/students/teacher/teacher.component.ts");

    var routes = [{
      path: 'notes',
      component: _notes_notes_component__WEBPACK_IMPORTED_MODULE_2__["NotesComponent"]
    }, {
      path: 'studentdashboard',
      component: _students_component__WEBPACK_IMPORTED_MODULE_3__["StudentsComponent"]
    }, {
      path: 'teachersdashboard',
      component: _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_4__["TeacherComponent"]
    }];

    var StudentsRoutingModule = function StudentsRoutingModule() {
      _classCallCheck(this, StudentsRoutingModule);
    };

    StudentsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StudentsRoutingModule
    });
    StudentsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StudentsRoutingModule_Factory(t) {
        return new (t || StudentsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/students/students.component.ts":
  /*!************************************************!*\
    !*** ./src/app/students/students.component.ts ***!
    \************************************************/

  /*! exports provided: StudentsComponent */

  /***/
  function srcAppStudentsStudentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentsComponent", function () {
      return StudentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _studentheader_studentheader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./studentheader/studentheader.component */
    "./src/app/students/studentheader/studentheader.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var StudentsComponent =
    /*#__PURE__*/
    function () {
      function StudentsComponent(studentservice) {
        _classCallCheck(this, StudentsComponent);

        this.studentservice = studentservice;
        this.textarealength = 200;
        this.remaining = 200;
        this.maximumwords = true;
      }

      _createClass(StudentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this["class"] = localStorage.getItem('class');
          this.name = localStorage.getItem('name');
          this.notesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            "class": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            notesdata: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        } // submit notes

      }, {
        key: "submitnotes",
        value: function submitnotes(event) {
          event.target.disabled = false;
          console.log(this.notesForm.value);
          this.notesForm.reset();
        }
      }, {
        key: "formchanges",
        value: function formchanges(event) {
          console.log(this.content);
          console.log(this.notesForm.value);
          this.textareaContent = this.notesForm.value.notesdata;
          this.remaining = this.textarealength - this.textareaContent.split(' ').length;

          if (this.content.split(' ').length >= 200) {
            var contentsplit = this.content.split(' '); // console.log(contentsplit);

            this.content = contentsplit.splice(0, 200).join(' ');
            this.count = this.content.length;
            console.log(this.content);
          }
        } // sending notes content

      }, {
        key: "sendNotes",
        value: function sendNotes() {
          // console.log(this.notesForm);
          var content = {
            data: this.notesForm.value,
            username: localStorage.getItem('username')
          }; // console.log(content);

          this.studentservice.saveNotes(content).subscribe(function (result) {
            console.log(result);

            if (result['message'] === 'notes saved successfully') {
              alert('Notes Saved successfully');
            }
          });
        }
      }]);

      return StudentsComponent;
    }();

    StudentsComponent.ɵfac = function StudentsComponent_Factory(t) {
      return new (t || StudentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]));
    };

    StudentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentsComponent,
      selectors: [["app-students"]],
      decls: 30,
      vars: 8,
      consts: [[1, "container-fluid", "imgbg"], [1, "row"], [1, "pt-3"], [1, "col-sm-4"], [1, "cardstyle"], [1, "card", "p-4", "cardstyle1"], [1, "py-3", 3, "formGroup", "ngSubmit", "input"], [1, "form-group"], ["formControlName", "class", 1, "form-control", "form-control-sm"], ["value", ""], ["selected", "selected", 3, "value"], ["for", "comment"], ["rows", "5", "id", "comment", "placeholder", "Maximum 200 words allowed", "formControlName", "notesdata", "name", "coontent", 1, "form-control", 2, "resize", "none", 3, "maxlength", "ngModel", "ngModelChange"], [1, "btn", "btn-sm", "btn-danger", "rounded-0", 3, "disabled", "click"]],
      template: function StudentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-studentheader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "marquee", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function StudentsComponent_Template_form_ngSubmit_10_listener($event) {
            return ctx.submitnotes($event);
          })("input", function StudentsComponent_Template_form_input_10_listener($event) {
            return ctx.formchanges($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Select your class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Select Your Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Submit your notes :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "textarea", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentsComponent_Template_textarea_ngModelChange_22_listener($event) {
            return ctx.content = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentsComponent_Template_button_click_25_listener() {
            return ctx.sendNotes();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome to dashboard ", ctx.name, " you can submit notes here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.notesForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx["class"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx["class"], " Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxlength", ctx.count)("ngModel", ctx.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.remaining, " words remaining");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.notesForm.valid);
        }
      },
      directives: [_studentheader_studentheader_component__WEBPACK_IMPORTED_MODULE_3__["StudentheaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: [".imgbg[_ngcontent-%COMP%]{\r\n    background: url('loginbg.jpg') no-repeat;\r\n    background-size: cover;\r\n    height: 87vh;\r\n}\r\n.cardstyle[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    top: 20%;\r\n}\r\nlabel[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n}\r\n.cardstyle1[_ngcontent-%COMP%]{\r\n    background-color: #f1f1f1;\r\n}\r\nspan[_ngcontent-%COMP%]{\r\n    float: right;\r\n    font-size: 11px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudHMvc3R1ZGVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdDQUFtRDtJQUNuRCxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRzL3N0dWRlbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nYmd7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2xvZ2luYmcuanBnKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiA4N3ZoO1xyXG59XHJcbi5jYXJkc3R5bGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDIwJTtcclxufVxyXG5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmNhcmRzdHlsZTF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcbnNwYW57XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-students',
          templateUrl: './students.component.html',
          styleUrls: ['./students.component.css']
        }]
      }], function () {
        return [{
          type: _services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/students/students.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/students/students.module.ts ***!
    \*********************************************/

  /*! exports provided: StudentsModule */

  /***/
  function srcAppStudentsStudentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentsModule", function () {
      return StudentsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _students_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./students-routing.module */
    "./src/app/students/students-routing.module.ts");
    /* harmony import */


    var _students_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./students.component */
    "./src/app/students/students.component.ts");
    /* harmony import */


    var _notes_notes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notes/notes.component */
    "./src/app/students/notes/notes.component.ts");
    /* harmony import */


    var _studentheader_studentheader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./studentheader/studentheader.component */
    "./src/app/students/studentheader/studentheader.component.ts");
    /* harmony import */


    var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./teacher/teacher.component */
    "./src/app/students/teacher/teacher.component.ts");

    var StudentsModule = function StudentsModule() {
      _classCallCheck(this, StudentsModule);
    };

    StudentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StudentsModule
    });
    StudentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StudentsModule_Factory(t) {
        return new (t || StudentsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _students_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentsModule, {
        declarations: [_students_component__WEBPACK_IMPORTED_MODULE_4__["StudentsComponent"], _notes_notes_component__WEBPACK_IMPORTED_MODULE_5__["NotesComponent"], _studentheader_studentheader_component__WEBPACK_IMPORTED_MODULE_6__["StudentheaderComponent"], _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_7__["TeacherComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _students_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_students_component__WEBPACK_IMPORTED_MODULE_4__["StudentsComponent"], _notes_notes_component__WEBPACK_IMPORTED_MODULE_5__["NotesComponent"], _studentheader_studentheader_component__WEBPACK_IMPORTED_MODULE_6__["StudentheaderComponent"], _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_7__["TeacherComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _students_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/students/teacher/teacher.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/students/teacher/teacher.component.ts ***!
    \*******************************************************/

  /*! exports provided: TeacherComponent */

  /***/
  function srcAppStudentsTeacherTeacherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherComponent", function () {
      return TeacherComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_teacher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/teacher.service */
    "./src/app/services/teacher.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function TeacherComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherComponent_div_14_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var i_r30 = ctx.index;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.curentStudent(i_r30 + 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var class_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](class_r29);
      }
    }

    function TeacherComponent_h4_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You can edit student notes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TeacherComponent_h4_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Data Loading.....!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TeacherComponent_h4_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No data found.....!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TeacherComponent_table_20_tr_12_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var class_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, class_r34.notescontent, 0, 150), "...");
      }
    }

    function TeacherComponent_table_20_tr_12_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var class_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](class_r34.notescontent);
      }
    }

    function TeacherComponent_table_20_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TeacherComponent_table_20_tr_12_td_3_Template, 3, 5, "td", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TeacherComponent_table_20_tr_12_ng_template_4_Template, 2, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherComponent_table_20_tr_12_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var class_r34 = ctx.$implicit;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r41.editNotes(class_r34._id, class_r34.notescontent);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var class_r34 = ctx.$implicit;
        var i_r35 = ctx.index;

        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r35 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", class_r34.notescontent.length > 150)("ngIfElse", _r37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, class_r34.time), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 7, class_r34.time, "h:mm a"), "");
      }
    }

    function TeacherComponent_table_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "S.no");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Notes Content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Time");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TeacherComponent_table_20_tr_12_Template, 13, 10, "tr", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r27.classList);
      }
    }

    function TeacherComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Update your notes :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherComponent_div_21_Template_label_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r43.closeModel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeacherComponent_div_21_Template_textarea_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.contentnotes = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherComponent_div_21_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.updateNotes();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r28.contentnotes);
      }
    }

    var TeacherComponent =
    /*#__PURE__*/
    function () {
      function TeacherComponent(router, teacherservice) {
        _classCallCheck(this, TeacherComponent);

        this.router = router;
        this.teacherservice = teacherservice;
        this.classes = ['Firstclass', 'Secondclass', 'Thirdclass', 'Fourthclass', 'Fifthclass', 'Sixthclass', 'Seventhclass', 'Eighthclass', 'Ninthclass', 'Tenthclass'];
        this.classList = [];
        this.showModel = false;
        this.loading = false;
        this.editdata = true;
      }

      _createClass(TeacherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "lgout",
        value: function lgout() {
          localStorage.clear();
          alert('Logout Success');
          this.router.navigateByUrl('/login');
        }
      }, {
        key: "curentStudent",
        value: function curentStudent(i) {
          var _this8 = this;

          this.currentclass = i;
          this.editdata = false;
          console.log(i);
          this.teacherservice.getclassdata(i);
          this.teacherservice.classsubject.subscribe(function (data) {
            // console.log(data);
            if (data) {
              _this8.loading = false;
              _this8.classList = data['message'];
              console.log(_this8.classList);
            }
          });
        }
      }, {
        key: "editNotes",
        value: function editNotes(id, content) {
          this.currentId = id;
          console.log(this.currentId);
          this.contentnotes = content;
          this.showModel = true;
        }
      }, {
        key: "updateNotes",
        value: function updateNotes() {
          var _this9 = this;

          console.log('Curent id is', this.currentId);
          console.log(this.contentnotes);
          this.teacherservice.updateNotes({
            id: this.currentId,
            content: this.contentnotes
          }).subscribe(function (response) {
            if (response['message'] === 'Update success') {
              _this9.showModel = false;

              _this9.teacherservice.getclassdata(_this9.currentclass);

              alert('Update Success');
            }
          });
        } //close model

      }, {
        key: "closeModel",
        value: function closeModel() {
          this.showModel = false;
        }
      }]);

      return TeacherComponent;
    }();

    TeacherComponent.ɵfac = function TeacherComponent_Factory(t) {
      return new (t || TeacherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_teacher_service__WEBPACK_IMPORTED_MODULE_2__["TeacherService"]));
    };

    TeacherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeacherComponent,
      selectors: [["app-teacher"]],
      decls: 22,
      vars: 6,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-info"], [1, "navbar-brand"], ["src", "../../../assets/notes.jpg", "alt", "notes", "width", "100px", 1, "img-thumbnail"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "active"], [1, "nav-link", "font-weight-bold", 2, "cursor", "pointer", 3, "click"], ["src", "../../assets//logout.png", "width", "30px", "alt", "", 1, "img-rounded"], [1, "container-fluid", "p-0"], [1, "row"], [1, "col-sm-3"], [1, "sidenav"], ["class", "d-flex sidebaritem justify-content-center py-2", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-sm-9"], ["class", "text-center text-danger pt-3", 4, "ngIf"], [1, "p-4"], ["class", "table taable-sm table-bordered tableStyle", 4, "ngIf"], ["class", "updatemodel", 4, "ngIf"], [1, "d-flex", "sidebaritem", "justify-content-center", "py-2", 3, "click"], [2, "font-weight", "600", "font-size", "14px"], [1, "text-center", "text-danger", "pt-3"], [1, "table", "taable-sm", "table-bordered", "tableStyle"], [1, "text-center"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["normal", ""], [1, "btn", "btn-danger", "btn-sm", "rounded-0", 3, "click"], [2, "width", "64vw"], [1, "updatemodel"], [1, "card", "cstyle", "p-3"], [1, "form-group"], ["for", "notesdata"], [2, "float", "right", "cursor", "pointer", "color", "red", 3, "click"], ["rows", "5", "id", "notesdata", "name", "cotent", 1, "form-control", 2, "resize", "none", 3, "ngModel", "ngModelChange"]],
      template: function TeacherComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherComponent_Template_a_click_8_listener() {
            return ctx.lgout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TeacherComponent_div_14_Template, 3, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TeacherComponent_h4_16_Template, 2, 0, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TeacherComponent_h4_17_Template, 2, 0, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TeacherComponent_h4_18_Template, 2, 0, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TeacherComponent_table_20_Template, 14, 1, "table", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TeacherComponent_div_21_Template, 12, 1, "div", 19);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.classes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editdata);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.classList.length == 0 && !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.classList.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showModel);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]],
      styles: [".sidenav[_ngcontent-%COMP%]{\r\n    width: 18vw;  height: 41.8vw; \r\n}\r\n.sidebaritem[_ngcontent-%COMP%]{\r\n    background-color:  #e9e0e094;\r\n    margin-bottom: 1px;\r\n    cursor: pointer;\r\n}\r\n*[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n}\r\n.updatemodel[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 50;\r\n    background: rgba(0,0,0,0.75);\r\n}\r\n.cstyle[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    top: 30vh;\r\n    left: 34vw;\r\n    width: 30vw;\r\n}\r\nlabel[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n}\r\n.tableStyle[_ngcontent-%COMP%]{\r\n    font-size: 13px; \r\n    max-height: 100vh;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudHMvdGVhY2hlci90ZWFjaGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXLEdBQUcsY0FBYztBQUNoQztBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRzL3RlYWNoZXIvdGVhY2hlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXZ7XHJcbiAgICB3aWR0aDogMTh2dzsgIGhlaWdodDogNDEuOHZ3OyBcclxufVxyXG4uc2lkZWJhcml0ZW17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2U5ZTBlMDk0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbip7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udXBkYXRlbW9kZWx7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHotaW5kZXg6IDUwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjc1KTtcclxufVxyXG4uY3N0eWxle1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAzMHZoO1xyXG4gICAgbGVmdDogMzR2dztcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG59XHJcbmxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4udGFibGVTdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDsgXHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuXHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-teacher',
          templateUrl: './teacher.component.html',
          styleUrls: ['./teacher.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_teacher_service__WEBPACK_IMPORTED_MODULE_2__["TeacherService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\ajay\Noteapp\Noteapp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map