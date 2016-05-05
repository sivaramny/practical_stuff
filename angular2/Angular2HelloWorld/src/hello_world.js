(function (app) {
    app.AppComponent = ng.core
        .Component({
            selector: 'hello-world',
            templateUrl: 'src/hello_world.html'
        })
        .Class({
            constructor: function () {}
        });
})(window.app || (window.app = {}));
