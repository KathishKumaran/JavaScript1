function sum(...args){
    return args.reduce((x,v)=>x+v,0)
}
sum(1,2,3,4,5);