angular.module('dataCoffee').controller('editDisciplina', editDisciplina);

editDisciplina.$inject = ['$scope', '$http', '$routeParams', '$rootScope', '$location'];

function editDisciplina($scope, $http, $routeParams, $rootScope, $location) {
    $scope.types = [];
    $scope.cursos = [];
    $scope.disciplina = [];
    $scope.reset = function (){
        $scope.name = '';
        $scope.curso = $scope.cursos[0];
    }
    
    $scope.salvar = function() {
        $scope.data = JSON.stringify({ id : $routeParams.obj, nome : $scope.name, tipo : $scope.type.nome, curso : $scope.curso.nome });
    	$http({ method: 'POST', url: $rootScope.url.edit.disciplina, 
    		data: $scope.data,
    		headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
        alertify.success("Atualizado com sucesso!");
        $location.path('disciplina/list');
    }

    $http({ method: 'GET', url: $rootScope.url.tipo.disciplina, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.types = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });

    $http({ method: 'GET', url: $rootScope.url.list.curso, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.cursos = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });
    
    $http({ method: 'GET', url: $rootScope.url.edit.disciplina + '?id=' + $routeParams.obj, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.disciplina = response.data;
        $scope.name = $scope.disciplina.nome;
        $scope.type = $scope.types[$scope.types.findIndex(type => type.nome === $scope.disciplina.tipo)];
        $scope.curso = $scope.cursos[$scope.cursos.findIndex(type => type.nome === $scope.disciplina.curso)];
    }, function error(response) {
        console.log(response.statusText);
    });
}