"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.HomePage = void 0;
var lib_1 = require("../lib");
var _1 = require("./");
var config_1 = require("../config");
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage(browser) {
        var _this = _super.call(this, browser) || this;
        _this.setUrl(config_1["default"].baseUrl + "/");
        return _this;
    }
    HomePage.prototype.loadCondition = function () {
        var _this = this;
        return lib_1.elementIsVisible(function () { return _this.IdeaTitle; });
    };
    HomePage.prototype.submitNewIdea = function (title, description) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.IdeaTitle.type(title)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.IdeaDescription.type(description)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.SubmitIdea.click()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.browser.wait(lib_1.pageHasLoaded(_1.ShowIdeaPage))];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.SignOut.click()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        ex_1 = _a.sent();
                        return [2 /*return*/];
                    case 3: return [4 /*yield*/, this.browser.wait(lib_1.pageHasLoaded(HomePage))];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.signInWithGoogle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.browser.clearCookies('https://accounts.google.com')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.signOut()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.signIn(function () { return _this.GoogleSignIn; })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.browser.waitAny([
                                lib_1.pageHasLoaded(_1.GoogleSignInPage),
                                lib_1.pageHasLoaded(HomePage),
                            ])];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.signInWithFacebook = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.browser.clearCookies('https://facebook.com')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.signOut()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.signIn(function () { return _this.FacebookSignIn; })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.browser.waitAny([
                                lib_1.pageHasLoaded(_1.FacebookSignInPage),
                                lib_1.pageHasLoaded(HomePage),
                            ])];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.signIn = function (locator) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.UserMenu.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.browser.wait(lib_1.elementIsVisible(locator))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, locator().click()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        lib_1.findBy('#new-idea-input')
    ], HomePage.prototype, "IdeaTitle");
    __decorate([
        lib_1.findBy('.ui.form textarea')
    ], HomePage.prototype, "IdeaDescription");
    __decorate([
        lib_1.findBy('.ui.button.primary')
    ], HomePage.prototype, "SubmitIdea");
    __decorate([
        lib_1.findBy('.signin')
    ], HomePage.prototype, "UserMenu");
    __decorate([
        lib_1.findBy('.fdr-profile-popup .button.google')
    ], HomePage.prototype, "GoogleSignIn");
    __decorate([
        lib_1.findBy('.fdr-profile-popup .button.facebook')
    ], HomePage.prototype, "FacebookSignIn");
    __decorate([
        lib_1.findBy('.signout')
    ], HomePage.prototype, "SignOut");
    return HomePage;
}(lib_1.Page));
exports.HomePage = HomePage;
