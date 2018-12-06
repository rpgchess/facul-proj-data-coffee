angular.module('dataCoffee').controller('listCategorias', listCategorias);

listCategorias.$inject = ['$scope', '$http', '$rootScope', '$route'];

function listCategorias($scope, $http, $rootScope, $route) {
    $http({ method: 'GET', url: $rootScope.url.list.categoria, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.categorias = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });

    $scope.deletar = function(id) {
        //$scope.alert_reset();
		alertify.set({ labels: { ok: "Sim", cancel: "Não" } });
	    alertify.confirm("Deseja remover este item?", function (e) {
            if (e){
                $http({ method: 'GET', url: $rootScope.url.categoria + '?id=' + id, headers: {'Content-Type': 'application/json; charset=utf-8'}
                }).then(function success(response) {
                    $scope.categoria = response.data;
                    $http({ method: 'POST', url: $rootScope.url.del.categoria,
                        data: $scope.categoria,
                        headers: {'Content-Type': 'application/json; charset=utf-8'}
                    });
                    $route.reload();
                    alertify.success("Removido com sucesso!");
                }, function error(response) {
                    console.log(response.statusText);
                });
            }
        });
    }
}