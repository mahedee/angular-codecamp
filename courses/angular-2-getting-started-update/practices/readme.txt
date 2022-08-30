Complete upto: 15.01

Note:

Angular CLI

* help command
>> ng help

* Angular version
>> ng v
 
* Create an angular project
>> ng new hello-world --prefix hw

Prefix is optional here

Upgrade npm - Run the following command
>> npm install -g npm@latest --force

* To install the packages defined in the package.json file
>> npm install

* To start the installed Angular application
>> npm start
>> ng serve
>> ng serve -o

* Install angular cli globally
>> npm install -g @angular/cli

* To restart
>> npm start

* Install bootstrap and font-awesome
>> npm install bootstrap font-awesome

* Generate angular component
>> ng g c products/product-detail --flat  // --flat for no folder

* Generate guard component
>> ng g g products/product-detail 

* Generate product module and inject it app module arrary
>> ng g m products/product --flat -m app

* open vs code using cmd
>> code .

* Create directives 
>> ng g d <name>

* Create pipes
>> ng g p <name>

* Create services
>> ng g s <name>

* To run unit test the application
>> ng test

* To run end-to-end tests
>> ng e2e

* To build and prepare release for deployment
>> ng build
You will get a application minified release in dist folder

* to deploy application 
>> ng deploy

* Generate code
>> ng generate

* Add support for an external library to the app
>> ng add


* Updates the angular version for the app
>> ng update

* class
>> ng g cl

* enum
>> ng g e

* interface
>> ng g i



Output: http://localhost:4200/


Todo:
1. Create a demo hrm project using angular

Keywords:
Angular Binding and directives
Component, Template, Class, Metadata 
Decorator - start with @
Data binding - {{propertyname}}
index.html contains the main page for the application
Back Ticks - `

Inline Template, Linked Template
fontawesome
Structural directives, property binding
Pipes - Transform bound properties before display
Component Lifecycle Hooks - most important
Arrow function
Nested component, input decorator, output decorator, Angular Injectors, Root Injector, Component Injector
Observable and reactive extension, safe navigation operator, Guard

Angular Language Service - Vs Extension
Angular DevTools chrome extension

Add ESLint Using - ng add @angular-eslint/schematics

Referece: angular.io



