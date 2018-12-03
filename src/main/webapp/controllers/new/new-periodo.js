angular.module('dataCoffee').controller('newPeriodo', newPeriodo);

newPeriodo.$inject = ['$scope', '$http', '$rootScope', '$location'];

function newPeriodo($scope, $http, $rootScope, $location) {
    $scope.reset = function (){
        $scope.name = '';
    }

    $scope.salvar = function() {
    	$scope.data = JSON.stringify({ nome : $scope.name });
    	$http({ method: 'POST', url: $rootScope.url.new.periodo, 
    		data: $scope.data,
    		headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
        alertify.success("Adicionado com sucesso!");
        $location.path('periodo/list');
    }
}