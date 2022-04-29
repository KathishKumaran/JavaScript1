let get=null;
function closure(){
    this.inc=0;
    get=()=>this.inc;
    function increase(){
        this.inc++;
        console.log(this.inc);
    }
    function decrease(){
        this.inc--;
        console.log(this.inc);
    }
    function set(v){
        this.inc=v;
        console.log(this.inc);
    }
    function reset(){
        this.inc=0;
        console.log(this.inc);
    }
    function del(){
        delete this.inc;
        this.inc=null;
        console.log("this.inc is deleted");
    }
    function readd(){
        if(!this.inc)
        this.inc="readd";
    }
    return[increase,decrease,set,reset,del,readd];
}
let f=closure();
let inc=f[0];
let dec=f[1];
let set=f[2];
let res=f[3];
let del=f[4];
let add=f[5];

inc();
inc();
inc();
dec();
get();
set(7);
get();
res(0);
get();
del(0);
get();
add();
get();



