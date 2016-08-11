/**
 * Created with JetBrains WebStorm
 * User: antBrother
 * Date:2016/8/10
 */
var mongoose=require('mongoose'),
    Schema=mongoose.Schema;

//����ID������
var IdGenerator=new Schema({
    modelname : { type: String },
    currentid : { type: Number, default: 1 }
});
mongoose.model('IdGenerator',IdGenerator);
var idg=mongoose.model('IdGenerator');
//��ȡһ������Id�ķ���
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

//����getNewID() ���÷�
/*idg.getNewID('URL',function(newid){
    console.log(newid);
});*/
module.exports.idg = idg;