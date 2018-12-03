angular.module('dataCoffee').controller('newDisciplina', newDisciplina);

newDisciplina.$inject = ['$scope', '$http', '$rootScope', '$location'];

function newDisciplina($scope, $http, $rootScope, $location) {
    $scope.types = [];
    $scope.reset = function (){
        $scope.name = '';
        $scope.type = $scope.types[0];
        $scope.curso = $scope.cursos[0];
    }
    
    $scope.salvar = function() {
        $scope.data = JSON.stringify({ nome : $scope.name, tipo : $scope.type.nome, curso : $scope.curso.nome });
    	$http({ method: 'POST', url: $rootScope.url.new.disciplina, 
    		data: $scope.data,
    		headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
        alertify.success("Adicionado com sucesso!");
        $location.path('disciplina/list');
    }
    
    $http({ method: 'GET', url: $rootScope.url.tipo.disciplina, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.types = response.data;
        $scope.type = $scope.types[0];
    }, function error(response) {
        console.log(response.statusText);
    });

    $http({ method: 'GET', url: $rootScope.url.list.curso, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.cursos = response.data;
        $scope.curso = $scope.cursos[0];
    }, function error(response) {
        console.log(response.statusText);
    });
}