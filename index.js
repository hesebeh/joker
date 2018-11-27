'use strict'

const http = require('http')
const request = require('request')
const port = process.env.PORT || 3030

http.createServer((req, res) => {
	req.pipe(request(req.headers.referer)).pipe(res)
	
// 	try {
// 		req.pipe(request(req.headers.referer, {gzip: true, json: true})).on('error', err => {
// 			res.writeHead(200, {'Content-Type': 'text/plain'})
// 			res.end('{}')
// 		}).pipe(res)
// 	} catch(err) {
// 		res.writeHead(200, {'Content-Type': 'text/plain'})
// 		res.end('{}')
// 	}

}).listen(port, () => {
	console.log('Proxy started on port ' + port)
});
