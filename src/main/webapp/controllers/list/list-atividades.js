angular.module('dataCoffee').controller('listAtividades', listAtividades);

listAtividades.$inject = ['$scope', '$http', '$rootScope', '$route'];

function listAtividades($scope, $http, $rootScope, $route) {
    $http({ method: 'GET', url: $rootScope.url.list.atividade, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.atividades = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });

    $scope.deletar = function(id) {
        //$scope.alert_reset();
		alertify.set({ labels: { ok: "Sim", cancel: "Não" } });
	    alertify.confirm("Deseja remover este item?", function (e) {
            if (e){
                $http({ method: 'GET', url: $rootScope.url.atividade + '?id=' + id, headers: {'Content-Type': 'application/json; charset=utf-8'}
                }).then(function success(response) {
                    $scope.atividade = response.data;
                    $http({ method: 'POST', url: $rootScope.url.del.atividade,
                        data: $scope.atividade,
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