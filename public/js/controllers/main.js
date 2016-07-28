/**
 * Created by Administrator on 2016/7/5.
 */
angular.module('todoController',[])
    .controller('mainController',['$scope','$http','Todos',function($scope,$http,Todos){
        $scope.formData={};
        $scope.loading=true;

        Todos.get().success(function(data){
            $scope.todos=data;
            $scope.loading=false;
        });
        $scope.createTodo=function(){
            if($scope.formData.text !=undefined){
                $scope.loading=true;
                Todos.create($scope.formData).success(function(data){
                    $scope.loading=false;
                    $scope.formData={};
                    $scope.todos=data;
                })
            }
        };
        $scope.deleteTodo=function(id){
            $scope.loading=true;
            Todos.delete(id).success(function(data){
                $scope.loading=false;
                $scope.todos=data;
            })
        }
    }])
    .controller('detailCtrl',['$scope','$http','Todos',function($scope,$http,Todos){
        console.log('11212');
    }])
    .controller('loginCtrl',['$scope','$http','Todos',function($scope,$http,Todos){
        console.log('登录');

        $scope.formData={};
        angular.element(".form").slideDown(500);
        angular.element("#landing").addClass("border-btn");
        angular.element("#registered").click(function() {
            angular.element("#landing").removeClass("border-btn");
            angular.element("#landing-content").hide(500);
            angular.element(this).addClass("border-btn");
            angular.element("#registered-content").show(500);
        });
        angular.element("#landing").click(function() {
            angular.element("#registered").removeClass("border-btn");
            angular.element(this).addClass("border-btn");
            angular.element("#landing-content").show(500);
            angular.element("#registered-content").hide(500);
        });

        //注册
        $scope.register=function(){
            Todos.register($scope.formData).success(function(rep){
                alert("添加成功");
                console.log(rep);
            }).error(function(rep){
                alert("添加失败");
                console.log(rep);
            })
        }
    }])
