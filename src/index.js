var View = /** @class */ (function () {
    function View() {
    }
    View.prototype.showNumber = function (num) {
        var el = document.getElementById("showResult");
        el.innerHTML = String(num);
    };
    return View;
}());
var Model = /** @class */ (function () {
    function Model() {
        this.view = new View();
    }
    Model.prototype.calculate = function (x, y) {
        this.numb = x + y;
        var result = this.numb;
        this.view.showNumber(result);
    };
    return Model;
}());
var Controller = /** @class */ (function () {
    function Controller() {
        this.model = new Model();
    }
    Controller.prototype.handleClick = function () {
        this.model.calculate(45, 5);
    };
    return Controller;
}());
var App = /** @class */ (function () {
    function App() {
        this.controller = new Controller();
    }
    App.prototype.init = function () {
        this.event();
    };
    App.prototype.event = function () {
        var element = document.getElementById("calcButton");
        element.onclick = this.controller.handleClick;
    };
    return App;
}());
var app = new App();
app.init();
