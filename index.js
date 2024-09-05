var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
    if (req.url == "/") {
        fs.readFile("index.html", (err, html) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.write("Internal Server Error");
                res.end();
                return;
            }
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(html);
            res.end();
        });
    } else if (req.url == "/products") {
        fs.readFile("products.html", (err, html) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.write("Internal Server Error");
                res.end();
                return;
            }
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(html);
            res.end();
        });
    } else {
        fs.readFile("404.html", (err, html) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.write("Internal Server Error");
                res.end();
                return;
            }
            res.writeHead(404, {"Content-Type": "text/html"});
            res.write(html);
            res.end();
        });
    }
});

server.listen(3000, () => {
    console.log("Node.js server at port 3000");
});
