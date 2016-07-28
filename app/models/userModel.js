
var mongoose=require('mongoose');
var validateEmail = function(emial){
    var re=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(emial);
};
var userSchema = new  mongoose.Schema({
    username:{
        type:'string',
        validate:{
            validator:function(first){
                return first =='something';
            },
            message:'{VALUE} is not a valid STRING!'
        }
    },
    password:{
        type:'string',
        index:true,
        require:true
    },
    email:{
        type:'string',
        unique:true,
        trim:true,
        required:'请输入邮箱',
        validate:[validateEmail,'邮箱格式不正确'],
        atch: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, '邮箱格式不正确哦']
    }
});

var User = module.exports = mongoose.model('User', userSchema);
