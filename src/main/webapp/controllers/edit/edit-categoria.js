angular.module('dataCoffee').controller('editCategoria', editCategoria);

editCategoria.$inject = ['$scope', '$http', '$routeParams', '$rootScope', '$location'];

function editCategoria($scope, $http, $routeParams, $rootScope, $location) {
    $scope.reset = function (){
        $scope.name = '';
    }

    $scope.salvar = function() {
        $scope.data = JSON.stringify({ id: $routeParams.obj, categoria : $scope.name });
    	$http({ method: 'POST', url: $rootScope.url.edit.categoria, 
    		data: $scope.data,
    		headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
        alertify.success("Atualizado com sucesso!");
        $location.path('categoria/list');
    }
    
    $http({ method: 'GET', url: $rootScope.url.edit.categoria + '?id=' + $routeParams.obj, headers: {'Content-Type': 'application/json; charset=utf-8'}
    }).then(function success(response) {
        $scope.categoria = response.data;
        $scope.name = $scope.categoria.categoria;
    }, function error(response) {
        console.log(response.statusText);
    });
}