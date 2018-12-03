angular.module('dataCoffee').controller('newTurma', newTurma);

newTurma.$inject = ['$scope', '$http', '$rootScope', '$location'];

function newTurma($scope, $http, $rootScope, $location) {
    $scope.reset = function (){
        $scope.name = '';
    }

    $scope.salvar = function() {
    	$scope.data = JSON.stringify({ turma : $scope.name });
    	$http({ method: 'POST', url: $rootScope.url.new.turma, 
    		data: $scope.data,
    		headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
        alertify.success("Adicionado com sucesso!");
        $location.path('turma/list');
    }
}