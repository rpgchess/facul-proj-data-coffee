angular.module('dataCoffee').controller('newCurso', newCurso);

newCurso.$inject = ['$scope', '$http', '$rootScope', '$location'];

function newCurso($scope, $http, $rootScope, $location) {
    $scope.reset = function (){
        $scope.abrev = '';
        $scope.name = '';
        $scope.type = $scope.types[0];
        $scope.categoria = $scope.categorias[0];
    }

    $scope.salvar = function() {
        $scope.data = JSON.stringify({ abrev : $scope.abrev, nome : $scope.name, nivel : $scope.type.nome, categoria : $scope.categoria.categoria });
    	$http({ method: 'POST', url: $rootScope.url.new.curso, 
    		data: $scope.data,
    		headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
        alertify.success("Adicionado com sucesso!");
        $location.path('curso/list');
    }

    $http({ method: 'GET', url: $rootScope.url.tipo.curso, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.types = response.data;
        $scope.type = $scope.types[0];
    }, function error(response) {
        console.log(response.statusText);
    });
    
    $http({ method: 'GET', url: $rootScope.url.list.categoria, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.categorias = response.data;
        $scope.categoria = $scope.categorias[0];
    }, function error(response) {
        console.log(response.statusText);
    });
}