
angular.module('dataCoffee').controller('editProfessor', editProfessor);

editProfessor.$inject = ['$scope', '$http', '$routeParams', '$rootScope', '$location'];

function editProfessor($scope, $http, $routeParams, $rootScope, $location) {
    $scope.professor = [];
    $scope.types = [];
    $scope.reset = function (){
        $scope.rgm = '';
        $scope.name = '';
        $scope.email = '';
        $scope.type = $scope.types[0];
        $scope.pwd = '';
        $scope.pwdretype = '';
    }

    $scope.salvar = function() {
        $scope.data = JSON.stringify({ registro : $scope.rgm, nome : $scope.name, email : $scope.email, nvAcesso : $scope.type.nome, senha : $scope.pwd });
    	$http({ method: 'POST', url: $rootScope.url.edit.professor, 
    		data: $scope.data,
    		headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
        alertify.success("Atualizado com sucesso!");
        $location.path('professor/list');
    }

    $http({ method: 'GET', url: $rootScope.url.tipo.acesso, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.types = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });
    
    $http({ method: 'GET', url: $rootScope.url.professor + '?id=' + $routeParams.obj, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.professor = response.data;
        $scope.rgm = $scope.professor.registro;
        $scope.name = $scope.professor.nome;
        $scope.email = $scope.professor.email;
        $scope.type = $scope.types[$scope.types.findIndex(type => type.nome === $scope.professor.nvAcesso)];
        $scope.pwd = $scope.professor.senha;
        $scope.pwdretype = $scope.professor.senha;
    }, function error(response) {
        console.log(response.statusText);
    });
}