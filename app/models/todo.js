/**
 * Created by Administrator on 2016/7/5.
 */
var mongoose=require('mongoose');
module.exports=mongoose.model('Todo',{
    text:{
        type:String,
        default:''
    }
})
