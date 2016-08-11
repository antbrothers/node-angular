/**
 * Created by Administrator on 2016/7/6.
 */
var mongoose = require('mongoose');
var ids=require('../comm/autoIncrement');

var validateEmail = function (emial) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(emial);
};
var userSchema = new mongoose.Schema({
    id : {type: Number , default:1 },
    userId: {type: Number, unique: true},
    username: {type: 'string'},
    password: {type: 'string', index: true, require: true},
    created: {type: Date, default: Date.now,},
    email: {
        type: 'string',
        trim: true,
        required: '请输入邮箱',
        validate: [validateEmail, '邮箱格式不正确'],
        atch: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, '邮箱格式不正确哦']
    }
});
// 保存前获取一个新的ID
userSchema.pre('save',function(next, done){
    var url = this;
    debugger;
    ids.idg.getNewID('User',function(newid){
        if(newid){
            url._doc.id = newid;
            done();
        }
    })
});


var User = module.exports = mongoose.model('User', userSchema);
