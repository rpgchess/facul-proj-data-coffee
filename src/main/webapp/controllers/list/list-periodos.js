angular.module('dataCoffee').controller('listPeriodos', listPeriodos);

listPeriodos.$inject = ['$scope', '$http', '$rootScope'];

function listPeriodos($scope, $http, $rootScope) {
    $http({ method: 'GET', url: $rootScope.url.list.periodo, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.periodos = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });
}