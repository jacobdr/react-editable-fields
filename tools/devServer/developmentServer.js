var beefy = require('beefy')
var http = require('http')

http.createServer(
    beefy({
        entries: {
            "bundle.js":"./dist/tools/devServer/main.js",
        },
        // cwd: __dirname,
        cwd: '../..',
        live: true,
        index: "./tools/devServer/public/index.html",
        debug:true,
        bunder: "browserify"
        // browserify: "app.js",
        // quiet: false,
        // bundlerFlags: ['-t', 'brfs'],
        // unhandled: on404,
    }
)).listen(8124)

function on404(req, resp) {
  resp.writeHead(404, {})
  resp.end('sorry folks!')
}

// var liveServer = require("live-server");
//
// var params = {
// 	port: 8181, // Set the server port. Defaults to 8080.
// 	host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0.
// 	root: "../..", // Set root directory that's being server. Defaults to cwd.
// 	open: true, // When false, it won't load your browser by default.
// 	ignore: 'tsx,my/templates', // comma-separated string for paths to ignore
// 	file: "./tools/devServer/public/index.html", // When set, serve this file for every 404 (useful for single-page applications)
// 	// wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
// 	// mount: [['/components', './node_modules']] // Mount a directory to a route.
//     watch: "./dist",
//     ignorePattern: ".*\.tsx",
//     // "entry-file":"./dist/tools/devServer/main.js"
// };
// liveServer.start(params);
