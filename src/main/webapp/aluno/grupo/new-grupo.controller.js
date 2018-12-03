angular.module('dataCoffee').controller('newGrupo', newGrupo);

newGrupo.$inject = ['$scope', '$http', '$rootScope', '$location'];

function newGrupo($scope, $http, $rootScope, $location) {
    $scope.reset = function (){
        $scope.name = '';
        $scope.qtde = '';
    }

    $scope.salvar = function() {
    	$scope.data = JSON.stringify({  : $scope. });
    	$http({ method: 'POST', url: $rootScope.url.new., 
    		data: $scope.data,
    		headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
        $location.path('?/list');
    }
}