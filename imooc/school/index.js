var classes=require('./class');

exports.add=function(classeses){
    classeses.forEach(function(item,index){
        var _classes=item;
        var teacherName=item.teacherName;
        var students=item.students
        classes.add(teacherName,students);
    })
}