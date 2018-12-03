angular.module('dataCoffee').controller('editTurma', editTurma);

editTurma.$inject = ['$scope', '$http', '$routeParams', '$rootScope', '$location'];

function editTurma($scope, $http, $routeParams, $rootScope, $location) {
    $scope.reset = function (){
        $scope.name = '';
    }

    $scope.salvar = function() {
    	$scope.data = JSON.stringify({ id : $routeParams.obj, nome : $scope.name });
    	$http({ method: 'POST', url: $rootScope.url.edit.turma, 
    		data: $scope.data,
    		headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
        alertify.success("Atualizado com sucesso!");
        $location.path('turma/list');
    }
    
    $http({ method: 'GET', url: $rootScope.url.edit.turma + '?id=' + $routeParams.obj, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.turma = response.data;
        $scope.name = $scope.turma.nome;
    }, function error(response) {
        console.log(response.statusText);
    });
}