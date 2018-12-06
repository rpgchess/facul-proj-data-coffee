angular.module('dataCoffee').controller('listProfessores', listProfessores);

listProfessores.$inject = ['$scope', '$http', '$rootScope', '$route'];

function listProfessores($scope, $http, $rootScope, $route) {
    $http({ method: 'GET', url: $rootScope.url.list.professor, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.professores = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });

    $scope.deletar = function(id) {
        //$scope.alert_reset();
		alertify.set({ labels: { ok: "Sim", cancel: "Não" } });
	    alertify.confirm("Deseja remover este item?", function (e) {
            if (e){
                $http({ method: 'GET', url: $rootScope.url.professor + '?id=' + id, headers: {'Content-Type': 'application/json; charset=utf-8'}
                }).then(function success(response) {
                    $scope.professor = response.data;
                    $http({ method: 'POST', url: $rootScope.url.del.professor,
                        data: $scope.professor,
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