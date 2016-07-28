/**
 * Created by Administrator on 2016/7/5.
 */
angular.module('todoService',[])
    .service('Todos',['$http',function($http){
        return {
            get:function(){
                return $http.get('/api/todos');
            },
            create:function(todoData){
                return $http.post('/api/todos', todoData);
            },
            delete:function(id){
                return $http.delete('/api/todos/'+id);
            },
            //зЂВс
            register:function(registerData){
                return $http.post('/api/register', registerData);
            }
        }
    }]);