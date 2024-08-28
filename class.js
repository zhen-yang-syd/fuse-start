"use strict";
var User = /** @class */ (function () {
    function User(_a) {
        var id = _a.id, name = _a.name, address = _a.address;
        this.id = id;
        this.name = name;
        this.address = address;
    }
    User.prototype.getNameWithAddress = function () {
        return "".concat(this.name, " lives at ").concat(this.address);
    };
    return User;
}());
var john = new User({ id: 1, name: "John Doe", address: "123 Main St." });
console.log(john);
console.log(john.getNameWithAddress());
