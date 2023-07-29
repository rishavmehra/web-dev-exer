let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };


 const order = (fruitName, callProduction) => {
    console.log(`${stocks.Fruits[fruitName]} was added`);
    callProduction()
 }

 const production = () => {
    setTimeout(()=>{
        console.log("Production has been started");
        
        setTimeout(() => {
            console.log(`${stocks.Fruits[0]} was selected`);
            setTimeout(() => {
                console.log(`Cut the Fruits`);
                setTimeout(() => {
                    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

                    setTimeout(() => {
                        console.log("Start the Machine ");

                        setTimeout(() => {
                            console.log(`${stocks.holder[1]} is the our container`);

                            setTimeout(() => {
                                console.log(`${stocks.toppings[0]} is also selected`);
                                setTimeout(() => {
                                    console.log("Serve the Ice Cream :)");
                                }, 1000);
                            }, 3000);
                        }, 2000);
                    }, 1000);                    
                }, 1000);
            }, 2000);
        }, 2000);
    },0000)
 }

 order(0,production)
 