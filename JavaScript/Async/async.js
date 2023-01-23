function orderPizza(callbacksP) {
    setTimeout(() => {
        const pizza = "YO PIZZA"
        callbacksP(pizza)
    }, 2000)
}

function pizzaReady(kha_la) {
    console.log(`Eat ${kha_la}`);
}

orderPizza(pizzaReady)
console.log("call your friend");