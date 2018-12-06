angular.module('dataCoffee').controller('editCurso', editCurso);

editCurso.$inject = ['$scope', '$http', '$routeParams', '$rootScope', '$location'];

function editCurso($scope, $http, $routeParams, $rootScope, $location) {
    $scope.types = [];
    $scope.categorias = [];
    $scope.curso = [];
    $scope.reset = function (){
        $scope.name = '';
    }

    $scope.salvar = function() {
        $scope.data = JSON.stringify({ id : $routeParams.obj, abrev : $scope.abrev, nome : $scope.name, nivel : $scope.type.nome, categoria : $scope.categoria.categoria });
    	$http({ method: 'POST', url: $rootScope.url.edit.curso, 
    		data: $scope.data,
    		headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
        alertify.success("Atualizado com sucesso!");
        $location.path('curso/list');
    }

    $http({ method: 'GET', url: $rootScope.url.tipo.curso, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.types = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });
    
    $http({ method: 'GET', url: $rootScope.url.categoria, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.categorias = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });
    
    $http({ method: 'GET', url: $rootScope.url.curso + '?id=' + $routeParams.obj, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.curso = response.data;
        $scope.abrev = $scope.curso.abrev;
        $scope.name = $scope.curso.nome;
        $scope.type = $scope.types[$scope.types.findIndex(type => type.nome === $scope.curso.nivel)];
        $scope.categoria = $scope.categorias[$scope.categorias.findIndex(categoria => categoria.categoria === $scope.curso.categoria)];
    }, function error(response) {
        console.log(response.statusText);
    });
}