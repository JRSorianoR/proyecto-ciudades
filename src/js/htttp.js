const http = require("http")
const env = require("env.js")
const fs = require('fs').promises
const host = 'localhost'
const port = 8000

const requestListener = function (req, res) {
    fs.readFile("src/index.html")
    .then(contents => {
        res.setHeader("Content-Type", "text/html")
        res.writeHead(200)
        res.end(contents)
    })
}

const server = http.createServer(requestListener)

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})