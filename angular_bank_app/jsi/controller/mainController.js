angular.module("Bank")
  .controller('mainCtrl',function ($scope,db,$location) {
    $scope.accounts = [];

    db.getAccount().then(function (res) {
      $scope.accounts = res.data;
    })

    $scope.addAccount = function () {
      db.addToDb($scope.account).then(function (res) {
        $location.path("/");
        
      })
    }

    $scope.delAccount = function (id) {
      db.removeFromDb(id).then(function (res) {
        $location.path("/");
      })
    }
  })
