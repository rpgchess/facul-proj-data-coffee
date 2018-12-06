angular.module('dataCoffee').controller('listAlunos', listAlunos);

listAlunos.$inject = ['$scope', '$http', '$rootScope', '$route'];

function listAlunos($scope, $http, $rootScope, $route) {
    $http({ method: 'GET', url: $rootScope.url.list.aluno, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.alunos = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });

    $scope.deletar = function(id) {
        //$scope.alert_reset();
		alertify.set({ labels: { ok: "Sim", cancel: "Não" } });
	    alertify.confirm("Deseja remover este item?", function (e) {
            if (e){
                $http({ method: 'GET', url: $rootScope.url.aluno + '?id=' + id, headers: {'Content-Type': 'application/json; charset=utf-8'}
                }).then(function success(response) {
                    $scope.aluno = response.data;
                    $http({ method: 'POST', url: $rootScope.url.del.aluno,
                        data: $scope.aluno,
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