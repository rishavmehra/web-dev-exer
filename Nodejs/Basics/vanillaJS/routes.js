const fs = require('fs')

const requestHandler = (req, res) =>{  
    const url = req.url; 
    const method =  req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Form Massage</title></head>');
        res.write('<body><form action="/massage" method="POST"><input type="text" name="massage"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/massage' && method==='POST') {
        const body = [];
        req.on("data", (chunk)=>{
            console.log(chunk);
            body.push(chunk)
        })
        return req.on("end", ()=>{  // we don't need return the when return in end  
            const parseBody = Buffer.concat(body).toString();
            const massage = parseBody.split("=")[0]
            // fs.writeFileSync("massage.txt", massage)
            fs.writeFile("massage.txt", massage, (err) => { 
                res.statusCode = 302;
                res.setHeader('Location', '/')
                return res.end();
            } )
            console.log(parseBody);
        })  
        // res.statusCode = 302;
        // res.setHeader('Location', '/')
        // return res.end(); 
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>This the nodejs page title</title></head>');
    res.write('<body><h1>Hey from nodejs Server</h1></body>');
    res.write('</html>');
    res.end();
}

// module.exports = requestHandler; //1st way to export

module.exports = { // 2nd way to export
    handler: requestHandler,
    someText: 'Some hard coded text'
}

// module.exports.handler = requestHandler; // 3rd way to export
// module.exports.someText = 'Some hard coded text';

//exports.handler = requestHandler; // 4th way to export
//exports.someText = 'Some hard coded text';