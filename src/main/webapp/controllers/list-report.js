angular.module('dataCoffee').controller('listReport', listReport);

listReport.$inject = ['$scope', '$http', '$rootScope', '$route'];

function listReport($scope, $http, $rootScope, $route) {
    $http({ method: 'GET', url: $rootScope.url.list.atividade, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.atividades = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });
}