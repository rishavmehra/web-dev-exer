const stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

is_shop_open = false

const order = (time, work) => {
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(() => {
                resolve(work());
            }, time );
        }else{
            reject(console.log("Sorry! Shop is closed"))
        }
    });
};


order(2000, ()=>{console.log(`${stocks.Fruits[0]} was selected`);})

.then(()=>{
    return order(0000, ()=> {console.log(`Production has started`);})
})

.then(() => {
    return order(2000, () => console.log(`Fruit has been choped`))
})

.then(()=>{
    return order(2000, () => console.log( `${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})

.then(()=>{
    return order(1000, () => console.log( `Machine Started`))
})

.then(()=>{
    return order(2000, () => console.log( `${stocks.holder[0]} is container for our ice cream`))
})

.then(()=>{
    return order(3000, () => console.log( `${stocks.toppings[0]} is topping`))
})

.then(()=>{
    return order(2000, () => console.log( `Serve the Ice Cream`))
})

.catch(()=>{
    console.log("Customer Left");
})

.finally(()=>{
    console.log("Day ended, Shop is closed");
})