angular.module('dataCoffee').controller('listProfessores', listProfessores);

listProfessores.$inject = ['$scope', '$http', '$rootScope'];

function listProfessores($scope, $http, $rootScope) {
    $http({ method: 'GET', url: $rootScope.url.list.professor, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.professores = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });
}