var student=require('./student');//导入学生模块
var teacher=require('./teacher');//导入老师模块
function add(teacherName,students){
    teacher.add(teacherName)
    students.forEach(function(item,index){
        student.add(item);
    })
}
exports.add=add;//此行代码效果与下一行一样,如果想要模块成为传统的实例就用exports
//module.exports=add//如果想要模块成为特别的对象类型，就是用module.exports