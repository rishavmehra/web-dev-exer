function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}

tipper("5");
// bigTipper("4");   wrong way to do this 
var bigTipper = function (a){
    var bill = parseInt(a);
    console.log(bill + 15);
}
bigTipper("4");

// function declaratation are scanned and made available
// variable declaratation are scanned and made undefined
