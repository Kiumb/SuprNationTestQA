"use strict";
exports.__esModule = true;
exports.findBy = exports.delay = void 0;
require("reflect-metadata");
exports.delay = function (ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
function findBy(selector) {
    return function (target, propertyKey) {
        var type = Reflect.getMetadata('design:type', target, propertyKey);
        Object.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            get: function () {
                var promise = this.browser.findElement(selector);
                return new type(promise, selector);
            }
        });
    };
}
exports.findBy = findBy;
