var http = require('http');
var dispatch = require('dispatch');
var path = require("path"),
	url = require("url");
var fs = require('fs');
var index = fs.readFileSync('index.html');

var stripe = require("stripe")(
  "sk_test_cJSUQX4zl5pXhFLa2FISlBTb"
);



// var server = http.createServer(function(request,response){
	
//     response.end("Endpoint called: " + response);
// });





var server = http.createServer(dispatch({
	'/' : {
		GET : function(request,response){
			
			// console.log(response);
			response.end('This request / works!');
			// console.log(path);
			// console.log(url.Url);
		}
	},


	'/message': {
		POST : function(request,response){
			// console.log(request);
			// response.setHeader("Content-Type", "text/html");
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
			response.setHeader("Access-Control-Allow-Headers", "*");

			// response.write('you got this message!');
            response.end('you got this message!');
			}
		},

	'/set_message/:message': {
		POST : function(request,response,message){
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
			response.setHeader("Access-Control-Allow-Headers", "*");
			
            response.end(message);
			}
		},	
	'/api/parsetime/:type':{
		GET : function(request,response,type){
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
			response.setHeader("Access-Control-Allow-Headers", "*");

			console.log(request.body);
			// if(type == 'unixtime'){
			// 	var unixtime = JSON.stringify({'unixtime' : Date.now()});
			// 	// console.log(typeof unixtime)
   //          	response.end(unixtime);
   //      	}else if(type == 'iso'){
   //      		response.writeHead(200, {'Content-Type': 'application/json'});
   //      		var time = Date().split(' ')[4].split(':');
   //      		var json_obj = { 
   //      				"hour": time[0],
  	// 					"minute": time[1],
  	// 					"second": time[2]
   //      		 	};
   //      		var res = JSON.stringify(json_obj);
   //      		response.end(res);
   //      	}

			
		}
	}
	})
);
var PORT = 8080;
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
    console.log("Stop server by pressing CTRL + C");
});