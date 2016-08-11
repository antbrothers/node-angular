/**
 * Created with JetBrains WebStorm
 * User: antBrother
 * Date:2016/8/10
 */
var mongoose=require('mongoose'),
    Schema=mongoose.Schema;

//自增ID生成器
var IdGenerator=new Schema({
    modelname : { type: String },
    currentid : { type: Number, default: 1 }
});
mongoose.model('IdGenerator',IdGenerator);
var idg=mongoose.model('IdGenerator');
//获取一个自增Id的方法
idg.getNewID=function(modelName, callback){
    this.findOne({modelName:modelName},function(err,doc){
        if(doc){
            doc.currentid +=1;
        }else{
            doc = new  idg();
            doc.modelname = modelName;
        }
        doc.save(function (err){
            if(err) throw  err ('IdGenerator.getNewID.save() error');
            else callback(parseInt(doc.currentid.toString()));
        })
    });
};

//调用getNewID() 的用法
/*idg.getNewID('URL',function(newid){
    console.log(newid);
});*/
module.exports.idg = idg;