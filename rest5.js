function sum(...arguments){
    let sum = 0;
    for(let arg of arguments)
    sum += arg;
    return sum;
}
sum(1,2,3);