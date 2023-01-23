const rishavHTTP = require('http')

// function rqlisner(res, req) {   //we can pass this function in createServer function - or we make anonymous function in the createServer 
//     console.log(req);    
// }

const rishavlis = rishavHTTP.createServer((req, res)/* this the anonlymous function */ =>{
    console.log(req);
});

rishavlis.listen(3000);


