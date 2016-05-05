Difference between Angular 1.x and Angular 2

==========================================

- Angular 1.x was not built with mobile support in mind, where Angular 2 is mobile oriented.

- Angular 2 provides more choice for languages.(TypeScript)

- Angular 1.x controllers and $scope are gone.We can say that controllers are replaced with “Components” in Angular 2. Angular 2 is component based.

Angular 1.x Controller

-----------------------

var myApp = angular

   .module("myModule", [])

   .controller("productController", function($scope) {

     var prods = { name: "Prod1", quantity: 1 };

     $scope.products = prods;

}); 

Angular 2 Components using TypeScript

------------------------------------ 

import { Component } from 'angular2/core';

 

@Component({

  selector: 'prodsdata',

  template: `

    &lt;h3&gt;{{prods.name}}&lt;/h3&gt; `

})

 

export class ProductComponent {

  prods = {  name: 'Prod1', quantity: 1 };

}

- Angular 1.x has 2 ways to bootstrap angular. One using ng-app attribute and other via code.

&lt;script&gt;

   angular.element(document).ready(function() {

      angular.bootstrap(document, ['myApp']);

   });

&lt;/script&gt;

In Angular 2, say goodbye to ng-app. The only way to bootstrap angular is via code.

import { bootstrap } from 'angular2/platform/browser';

import { ProductComponent } from './product.component';

 

bootstrap(ProductComponent);

- Structural directives syntax is changed. ng-repeat is replaced with *ngFor.

Angular 1.x structural directives

---------------------------------

&lt;ul&gt;

   &lt;li ng-repeat="technology in technologies"&gt;

     {{technology.name}}

   &lt;/li&gt;

&lt;/ul&gt;

&lt;div ng-if="technologies.length"&gt;

   &lt;h3&gt;You have {{technologies.length}} technologies.&lt;/h3&gt;

&lt;/div&gt;

Angular 2 structural directives (* is localvaraible)

--------------------------------

&lt;ul&gt;

  &lt;li *ngFor="#technology of technologies"&gt;

    {{technology.name}}

  &lt;/li&gt;

&lt;/ul&gt;

&lt;div *ngIf="technologies.length"&gt;

  &lt;h3&gt;You have {{technologies.length}} technologies.&lt;/h3&gt;

&lt;/div&gt;

- To filter output in our templates in Angular 1.x, we use the pipe character (|) and one or more filters. Where in Angular 2 they are called pipes. The syntax remains same.

- Angular 2 uses camelCase syntax for built-in directives. For example, ng-class is now ngClass and ng-model is now ngModel.

- One of the major change in Angular 2 is, that it directly uses the valid HTML DOM element properties and events. Due to this, many of the available built-in directives in Angular 1.x are now no longer required. Like, ng-href, ng-src, ng-show and ng-hide. Angular 2 uses href, src and hidden properties to get the same output. And same goes with event based directives like ng-click and ng-blur.

&lt;button ng-click="doSomething()"&gt;

And in Angular 2, take the HTML event and wrap it with parentheses.

&lt;button (click)="doSomething()"&gt;

- In Angular 1.x, ng-bind is used for one way data binding, but with Angular 2 it is replaced with [property], where property is valid HTML DOM element property.

Angular 1.x, one way data binding

-----------------------------------

&lt;input ng-bind="technology.name"&gt;&lt;/input&gt;

Angular 2, one way data binding is achieved via wrapping the properties with square brackets.

&lt;input [value]="technology.name"&gt;&lt;/input&gt;

&lt;div [style.color]="color"&gt;Some text...&lt;/div&gt;

- In Angular 1.x, ng-model is used for two way data binding, but with Angular 2 it is replaced with [(ngModel)].

Angular 1.x, two way data binding

-----------------------------------

&lt;input ng-model="technology.name"&gt;&lt;/input&gt;

In Angular 2,

--------------

&lt;input [(ngModel)]="technology.name"&gt;&lt;/input&gt;

- In Angular 1.x, we can define a service via 5 different ways.

   a) Factory

   b) Service

   c) Provider 

   d) Constant

   e) Values

And in Angular 2, class is the only way to define a service.

import { Injectable } from 'angular2/core';

 

@Injectable()

export class TechnologyService {

  getTechnologies() {

    return [

      new technology(1, 'Angular'),

      new technology(2, 'jQuery',

      new technology(3, 'Node'),

      new technology(4, 'Knockout')

    ];

  }

}

- One of the advantage of Angular is Dependency Injection. With Angular 2 DI is there but now there is a different way to inject dependencies. As everything is class in Angular, so DI is achieve via constructor.

var myApp = angular

   .module("myModule", [])

   .controller("productController", function($scope, $http) {

     var prods = { name: "Prod1", quantity: 1 };

     $scope.products = prods;

}); 

-----

import { Injectable } from 'angular2/core';

 

@Injectable()

export class TechnologyService {

  constructor(private _http: Http) { }

 

  getTechnologies() {

    return [

      new technology(1, 'Angular'),

      new technology(2, 'jQuery',

      new technology(3, 'Node'),

      new technology(4, 'Knockout')

    ];

  }

}

- In Angular 1.x, we use $routeProvider.when() to configuring routing. Where in Angular 2, @RouteConfig{(...}) is used. ng-view present in Angular 1.x is replaced with &lt;router-outlet&gt;

var app = angular

        .module("MyModule", ["ngRoute"])

        .config(function ($routeProvider) { 

            $routeProvider 

              .when("/home", { templateUrl: "home.html", controller: "homeController" })

              .when("/technology", { templateUrl: "technology.html", controller: "technologyController" }) 

        })

       .controller("homeController", function ($scope) {

            $scope.message = "Home Page"; 

        })    

       .controller("technologyController", function ($scope) {

             $scope.technologies = ["ASP.NET", "jQuery", "AngularJS", "JavaScript"]; 

       }) 

------------------

import { Component } from 'angular2/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { TechnologyComponent } from './technology/technology.component';

import { TechnologyService } from './Technology/Technology.service';

 

@Component({

  selector: 'my-app',

  templateUrl: 'app/app.component.html',

  directives: [ROUTER_DIRECTIVES],

  providers: [

    ROUTER_PROVIDERS,

    TechnologyService

  ]

})

@RouteConfig([

  { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },

  { path: '/technology', name: 'Technology', component: TechnologyComponent },

])

export class AppComponent { }

- Angular 2 implements webstandards like components and it’s provide better performance than Angular 1.

Ref:

http://www.talkingdotnet.com/difference-between-angular-1-x-and-angular-2/

http://www.talkingdotnet.com/bind-select-dropdown-list-in-angular-js-2/

http://victorsavkin.com/post/118372404541/the-core-concepts-of-angular-2

http://www.sitepoint.com/getting-started-with-angular-2-using-typescript/
