//<script src="a.js"></script>
//<script src="b.js"></script>
//<script src="c.js"></script>
// var i=0;
// while(true){
//     i++;
// }

/* //当不加入setTimeout()时结果为1，加入时加过为0
var c=0;
function printIt(){
    console.log(c);
}
function plus(){
    setTimeout(function() {
        c+=1;
    }, 1000);
}
plus();
printIt(); */

var c=0;
function printIt(){
    console.log(c);
}
function plus(callback){
    setTimeout(function() {
        c+=1;
        callback();
    }, 1000);
}
plus(printIt);//1