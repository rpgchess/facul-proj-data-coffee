angular.module('dataCoffee').controller('newCategoria', newCategoria);

newCategoria.$inject = ['$scope', '$http', '$rootScope', '$location'];

function newCategoria($scope, $http, $rootScope, $location) {
    $scope.reset = function (){
        $scope.name = '';
    }
    
    $scope.salvar = function() {
        $scope.data = JSON.stringify({ categoria : $scope.name });
    	$http({ method: 'POST', url: $rootScope.url.new.categoria, 
    		data: $scope.data,
    		headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
        alertify.success("Adicionado com sucesso!");
        $location.path('categoria/list');
    }
}