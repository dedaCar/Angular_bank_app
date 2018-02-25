angular.module('Bank',[
  'ngRoute',
  'dbService',
  'edit'
])

  .config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
    .when("/",{
      templateUrl : "pages/accounts.html",
      controller : "mainCtrl"
    })
    .when("/addAccount",{
      templateUrl : "pages/addAccount.html",
      controller : "mainCtrl"
    })
    .when("/editDeleteAccounts",{
      templateUrl : "pages/editDeleteAccounts.html",
      controller : "mainCtrl"
    })
    .when("/edit/:id",{
      templateUrl : "pages/edit.html",
      controller : "editCtrl"
    })
    .otherwise({
      template : "<h1>Error 404 !!!</h1>"
    })
  })
