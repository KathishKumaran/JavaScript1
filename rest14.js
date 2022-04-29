let a={
    team1:"kkr",
    runs:145,
    m:()=>{
        console.log("to win");
    }};
let b={
    team2:"dd",
    wickets:8,
    n:()=>{
        console.log("to draw");
    }};
let c={...a,...b};
console.log(c);