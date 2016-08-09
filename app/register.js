
var registerTodo=require('./models/userModel');
function getRegister(res){
    debugger;
    registerTodo.find(function(err,data){
        debugger;
        if(err){
            res.send(err);
        }else{
            res.json(data);
        }
    })
};
module.exports=function(app){
    app.post('/api/register',function(req,res,next){
        debugger;
        registerTodo.create({
            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
            checkpassword:req.body.checkpassword,
            done:false
        },function(err,todo){
            debugger;
            if(err){
                res.send(err);
            }else{
                getRegister(res);
            }
        })
    });
}
