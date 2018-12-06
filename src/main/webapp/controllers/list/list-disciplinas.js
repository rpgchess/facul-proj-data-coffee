angular.module('dataCoffee').controller('listDisciplinas', listDisciplinas);

listDisciplinas.$inject = ['$scope', '$http', '$rootScope', '$route'];

function listDisciplinas($scope, $http, $rootScope, $route) {
    $http({ method: 'GET', url: $rootScope.url.list.disciplina, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.disciplinas = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });

    $scope.deletar = function(id) {
        //$scope.alert_reset();
		alertify.set({ labels: { ok: "Sim", cancel: "Não" } });
	    alertify.confirm("Deseja remover este item?", function (e) {
            if (e){
                $http({ method: 'GET', url: $rootScope.url.disciplina + '?id=' + id, headers: {'Content-Type': 'application/json; charset=utf-8'}
                }).then(function success(response) {
                    $scope.disciplina = response.data;
                    $http({ method: 'POST', url: $rootScope.url.del.disciplina,
                        data: $scope.disciplina,
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