var exec = require('cordova/exec');
var obj = {};

obj.greet = function(name, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "Hello", "greet", [name]);
};

module.exports = obj;