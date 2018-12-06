angular.module('dataCoffee').controller('editAtividade', editAtividade);

editAtividade.$inject = ['$scope', '$http', '$routeParams', '$rootScope', '$location'];

function editAtividade($scope, $http, $routeParams, $rootScope, $location) {
    $scope.reset = function (){
        $scope.opt = 1;
        $scope.dateAble = false;
        $scope.name = '';
        $scope.date = '';
        $scope.dateEnd = '';
        $scope.grpQtde = 0;
        $scope.curso = $scope.cursos[0];
        $scope.disciplina = $scope.disciplinas[0];
        $scope.turma = $scope.turmas[0];
        $scope.file = '';
        $scope.obs = '';
        $scope.status = $scope.allStatus[0];
    }

    $scope.salvar = function() {
        if ($scope.dateEnd == null) $scope.dateEnd == "";
        if ($scope.opt != 2) $scope.grpQtde == 0;
        if ($scope.file == null) $scope.file == "";
        $scope.data = JSON.stringify({ id : $routeParams.obj, nome : $scope.name, data : $scope.date, entrega : $scope.dateEnd, curso : $scope.curso.nome, disciplina : $scope.disciplina.nome, trabalho : $scope.opt, quantidade : $scope.grpQtde, arquivo : $scope.file, descricao : $scope.obs });
    	$http({ method: 'POST', url: $rootScope.url.edit.atividade, 
    		data: $scope.data,
    		headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
        alertify.success("Atualizado com sucesso!");
        $location.path('atividade/list');
    }
    
    $http({ method: 'GET', url: $rootScope.url.list.curso, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.cursos = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });

    $http({ method: 'GET', url: $rootScope.url.list.disciplina, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.disciplinas = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });

    $http({ method: 'GET', url: $rootScope.url.list.turma, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.turmas = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });

    $http({ method: 'GET', url: $rootScope.url.tipo.situacao, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.allStatus = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });

    $http({ method: 'GET', url: $rootScope.url.atividade + '?id=' + $routeParams.obj, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.atividade = response.data;
        $scope.name = $scope.atividade.nome;
        $scope.curso = $scope.cursos[$scope.cursos.findIndex(curso => curso.nome === $scope.atividade.curso)];
        $scope.disciplina = $scope.disciplinas[$scope.disciplinas.findIndex(disciplina => disciplina.nome === $scope.atividade.disciplina)];
        $scope.turma = $scope.turmas[$scope.turmas.findIndex(turma => turma.nome === $scope.atividade.turma)];
        $scope.status = $scope.allStatus[$scope.allStatus.findIndex(status => status.nome === $scope.atividade.status)];
        if ($scope.atividade.group != "" || $scope.atividade.group != null)
            $scope.opt = 2;
        else
            $scope.opt = 1;
        $scope.grpQtde = parseInt($scope.atividade.group);
        /*if ($scope.atividade.entrega == "") {
            $scope.dateAble = false;
            $scope.dateEnd = '';
        } else {
            $scope.dateAble = true;
            $scope.dateEnd = {
                value: new Date($scope.atividade.entrega)
            };
        }
        $scope.date = $scope.atividade.data;*/
        $scope.file = $scope.atividade.file;
        $scope.obs = $scope.atividade.obs;
    }, function error(response) {
        console.log(response.statusText);
    });
}