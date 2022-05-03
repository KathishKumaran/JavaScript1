let planet=function(a){
    return function(b){
        return "return favourites planets are " + a + " and " + b;
    };
};
let favouritePlanets=planet("jupiter");
console.log(favouritePlanets("earth"));
console.log(favouritePlanets("jupiter"));
console.log(favouritePlanets("mars"));

// let planets=(a)=>(b)=>"planets are " + a + " and " + b;
// console.log(planets("mars")("jupiter"));

//console.log(planet("mars")("jupiter"));