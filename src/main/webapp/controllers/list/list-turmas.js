angular.module('dataCoffee').controller('listTurmas', listTurmas);

listTurmas.$inject = ['$scope', '$http', '$rootScope', '$route'];

function listTurmas($scope, $http, $rootScope, $route) {
    $http({ method: 'GET', url: $rootScope.url.list.turma, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.turmas = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });

    $scope.deletar = function(id) {
        //$scope.alert_reset();
		alertify.set({ labels: { ok: "Sim", cancel: "Não" } });
	    alertify.confirm("Deseja remover este item?", function (e) {
            if (e){
                $http({ method: 'GET', url: $rootScope.url.turma + '?id=' + id, headers: {'Content-Type': 'application/json; charset=utf-8'}
                }).then(function success(response) {
                    $scope.turma = response.data;
                    $http({ method: 'POST', url: $rootScope.url.del.turma,
                        data: $scope.turma,
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