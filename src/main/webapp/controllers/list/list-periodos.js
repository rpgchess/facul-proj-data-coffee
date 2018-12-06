angular.module('dataCoffee').controller('listPeriodos', listPeriodos);

listPeriodos.$inject = ['$scope', '$http', '$rootScope', '$route'];

function listPeriodos($scope, $http, $rootScope, $route) {
    $http({ method: 'GET', url: $rootScope.url.list.periodo, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.periodos = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });

    $scope.deletar = function(id) {
        //$scope.alert_reset();
		alertify.set({ labels: { ok: "Sim", cancel: "Não" } });
	    alertify.confirm("Deseja remover este item?", function (e) {
            if (e){
                $http({ method: 'GET', url: $rootScope.url.periodo + '?id=' + id, headers: {'Content-Type': 'application/json; charset=utf-8'}
                }).then(function success(response) {
                    $scope.periodo = response.data;
                    $http({ method: 'POST', url: $rootScope.url.del.periodo,
                        data: $scope.periodo,
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