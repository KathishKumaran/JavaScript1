let print,set,increase,decrease;
function manager(){
    console.log("manager();");
    let number=15;
    print=function(){
        console.log(number)
    }
    set=function(value){
        number=value
    }
    increase=function(){
        number++
    }
    decrease=function(){
        number--
    }
}
manager();
print();
for(let i=0;i<200;i++)increase()
print();
decrease();
print();
set(655);
print();
let oldprint=print;
manager();
print();
oldprint();



