angular.module('dataCoffee').controller('listDisciplinas', listDisciplinas);

listDisciplinas.$inject = ['$scope', '$http', '$rootScope'];

function listDisciplinas($scope, $http, $rootScope) {
    $http({ method: 'GET', url: $rootScope.url.list.disciplina, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.disciplinas = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });
}