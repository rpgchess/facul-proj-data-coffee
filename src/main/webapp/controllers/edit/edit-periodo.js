angular.module('dataCoffee').controller('editPeriodo', editPeriodo);

editPeriodo.$inject = ['$scope', '$http', '$routeParams', '$rootScope', '$location'];

function editPeriodo($scope, $http, $routeParams, $rootScope, $location) {
    $scope.reset = function (){
        $scope.name = '';
    }
    
    $scope.salvar = function() {
    	$scope.data = JSON.stringify({ id : $routeParams.obj, nome : $scope.name });
    	$http({ method: 'POST', url: $rootScope.url.edit.periodo, 
    		data: $scope.data,
    		headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
        alertify.success("Atualizado com sucesso!");
        $location.path('periodo/list');
    }

    $http({ method: 'GET', url: $rootScope.url.periodo + '?id=' + $routeParams.obj, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.periodo = response.data;
        $scope.name = $scope.periodo.nome;
    }, function error(response) {
        console.log(response.statusText);
    });
}