/**
 * Created by Administrator on 2016/7/5.
 */

var Todo=require('./models/todo');
function getTodos(res){
    Todo.find(function(err,todos){
        if(err){
            res.send(err);
        }
        res.json(todos);
    })
};
module.exports=function(app){
    //��ȡ����
    app.get('/api/todos',function(req,res){
        getTodos(res);
    });
    //�ύ����
    app.post('/api/todos',function(req,res){
        Todo.create({
            text:req.body.text,
            done:false
        },function(err,todo){
            if(err)
                res.send(err);
            getTodos(res);
        })
    });
    //ɾ��
    app.delete('/api/todos/:todo_id',function(req,res){
        Todo.remove({
            _id:req.params.todo_id
        },function(err,todo){
            if(err)
                res.send(err);
            getTodos(res);
        })
    });
    app.get('*',function(req,res){
        res.sendFile(__dirname+'/public/index.html');
    })

};