'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log("src/classes.js is running !");

var Character = function () {
    function Character() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tempID';
        var location = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Town of Beginnings';
        var health = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 150;

        _classCallCheck(this, Character);

        this.name = name;
        this.location = location;
        this.health = health;
    }

    _createClass(Character, [{
        key: 'getGreeting',
        value: function getGreeting() {
            return 'Welcome ' + this.name + ', your health is ' + this.health + ' and your location is ' + this.location;
        }
    }, {
        key: 'checkHealth',
        value: function checkHealth() {
            var response = this.name + ', your health is ' + this.health;
            if (this.health < 50) {
                return response + ' you should consider healing';
            } else {
                return response + ' you\'re in good shape';
            }
        }
    }, {
        key: 'checkLocation',
        value: function checkLocation() {
            return 'Your location is ' + this.location;
        }
    }]);

    return Character;
}();

;

// ***************************************************************** //
// This one is to create a new class - create new abilities

var Player = function (_Character) {
    _inherits(Player, _Character);

    function Player() {
        var _ref;

        var gold = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
        var silver = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

        _classCallCheck(this, Player);

        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
        }

        // super prefer to the parent class
        var _this = _possibleConstructorReturn(this, (_ref = Player.__proto__ || Object.getPrototypeOf(Player)).call.apply(_ref, [this].concat(args)));

        _this.gold = gold;
        _this.silver = silver;
        return _this;
    }

    return Player;
}(Character);

var Monster = function (_Character2) {
    _inherits(Monster, _Character2);

    function Monster() {
        var accuracy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

        var _ref2;

        var damage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;
        var drop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;

        _classCallCheck(this, Monster);

        for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
            args[_key2 - 3] = arguments[_key2];
        }

        var _this2 = _possibleConstructorReturn(this, (_ref2 = Monster.__proto__ || Object.getPrototypeOf(Monster)).call.apply(_ref2, [this].concat(args)));

        _this2.accuracy = accuracy;
        _this2.damage = damage;
        _this2.drop = drop;
        return _this2;
    }

    _createClass(Monster, [{
        key: 'checkHealth',
        value: function checkHealth() {
            return this.health;
        }
    }]);

    return Monster;
}(Character);

// ***************************************************************** //

var player1 = new Player(50, 200, 'John', 'Vancouver');
console.log(player1);
// console.log(player1.checkHealth());
// console.log(player1.checkLocation());

var monster1 = new Monster(4, 35, 7, 'Jagga', undefined, 45);
console.log(monster1);
console.log(monster1.checkHealth());
console.log(monster1.checkLocation());

// ***************************************************************** //

// This is an example of map() - as known as a call back function
var myArray = [1, 2, 3, 4];

var newArray = myArray.map(function (item) {
    return item * 2;
});

var shortArray = myArray.map(function (item) {
    return item * 3;
});

console.log(myArray, newArray, shortArray);

// .filter method - creates a new array with all of the elements of that match the filter criteria (result in a true response)

// forEach method - calls a function for each element of an array
