let deep = {
    basket:{
        fruits:{
            apple:1,
            orange:3,
            grapes:6,
        }
    }
};
let {apple,orange,grapes}=deep.basket.fruits;
console.log(apple);
console.log(orange);
console.log(grapes);