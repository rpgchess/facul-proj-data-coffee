angular.module('dataCoffee').controller('newCategoria', newCategoria);

newCategoria.$inject = ['$scope', '$http', '$rootScope'];

function newCategoria($scope, $http, $rootScope) {
    $scope.reset = function (){
        $scope.name = '';
    }
    /*
    $scope.salvar = function() {
    	
    	$scope.data = "{nome: $scope.name }";
    	$http({ method: 'POST', url: $rootScope.baseUrl + '/data-coffee/cadastrar-categoria', 
    		data: $scope.data,
    		headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
    }*/
}