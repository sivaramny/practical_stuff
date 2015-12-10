Switch theme of App
===================

Approach-I
----------

- To change the Resources on the fly (dynamic Loading)

- Create a single CSS file for each theme (Red, Green, Blue). You should edit CSS files not to conflict each other. 
  eg: <link rel="stylesheet" ng-href="{{myTheme}}.css">


Approaches
----------
 - Local Storage
 - ng-href
 - URL Based


Ref:
https://scotch.io/tutorials/use-angularjs-and-nghref-to-grab-css-dynamically
https://github.com/fdomig/angular-themer
https://github.com/angular-ui/bootstrap/issues/2475
http://www.c-sharpcorner.com/Blogs/48523/load-css-theme-dynamically-on-user-selection-in-angularjs.aspx
http://demo.vaadin.com/valo-theme/#!common
http://stackoverflow.com/questions/15193492/how-to-include-view-partial-specific-styling-in-angularjs

