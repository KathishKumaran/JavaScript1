let print=function(){
    console.log("print something");
    console.log(arguments);
}
print();
setTimeout(print,10000);