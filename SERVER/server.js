const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const server = http.createServer((req , res) => {
    const filePath = path.join(
        __dirname , 
        req.url === "/" ? "index.html" : req.url)
    //This is the ternary operator (it is same as if-else)
    // (condition) ? ""=> if-part
    // : "" => else-part

    const extName = String(path.extname(filePath)).toLowerCase();

    const mimeTypes = {
        '.html' : 'text/html',
        '.css' : 'text/css',
        '.js' : 'text/javascript',
        '.png' : 'image/png'
    }
    //mimeTypes is used to explicitly mention to webBrowser or software,
    // that load only given extension files.
    //A MIME type is a label that tells a web browser or other software
    //  what kind of file or data it is receiving
    
    const contentType = mimeTypes[extName] || 'application/octet-stream';

    //application/octet-stream is the default HTTP MIME type for generic binary data.
    //It is used when the application does not know exact file type.
    
    fs.readFile(filePath, (err ,content) => {
        if (err) {
            if(err.code === "ENOENT"){ //ENOENT-Error No Entity.
            res.writeHead(404 , {'Content-Type' :'text/html'});
            res.end("404 : Page Not Found Brooo");
        }

        } else {
            res.writeHead(200 , {'content-type' : contentType});
            //Here 200 is statuscode of the response.
            //This is the head part of the response

            res.end(content , 'utf-8'); //utf-8 : It is used to show the response in english.
            //This is the body part of the response
        }
    })

})

server.listen(port , () => {
    console.log(`Server is currently listening at ${port}`);
    
});

