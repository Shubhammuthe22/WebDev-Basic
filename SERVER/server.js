const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const server = http.createServer((req , res) => {
    const filePath = path.join(__dirname , req.url === "/" ? "index.html" : req.url)
    //This is the ternary operator (it is same as if-else)
    // (condition) ? ""=> if-part
    // : "" => else-part

    const extName = String(path.extname(filePath)).toLowerCase();

    const mimeTypes = {
        '.html' : 'text/html',
        '.css' : 'text/css',
        '.js' : 'text/javascript',
        '.png' : 'text/png'
    }
    //mimeTypes is used to explicitly mention that load only given extension files.
    
    const contentType = mimeTypes[extName] || 'application/octet-stream';

})

server.listen(port , () => {
    console.log(`Server is currently listening at ${port}`);
    
});

