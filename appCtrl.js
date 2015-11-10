app.controller('AppCtrl',AppCtrl);

function AppCtrl($http,appService){
	this.http = $http;
	this.appService = appService;
}
var HEADERS = {
	headers: {
	
	'Content-Type': 'application/x-www-form-urlencoded'
	}
};
AppCtrl.prototype.get_message = function(){
	var self = this;
	console.log(self);
	this.appService.post('get_message').then(function(response){
		console.log(response);
		self.message = response.data;
	});
}

AppCtrl.prototype.set_message = function(){
	// console.log(this.new_massage);
	var self = this;
	this.appService.post('set_message',this.new_massage).then(function(response){
		console.log(response.data);
		self.name = response.data;
		console.log(self.name);
	});
	console.log('a');
	this.new_massage = '';
}

AppCtrl.prototype.show_the_time = function(type){
	var self = this;
	// console.log(Date.now());
	// console.log(Date());
	// console.log(Date());
	// console.log(Date());
	var d = Date();
	
	this.appService.get('show_the_time',d,type).then(function(response){
		
		if(type == 'iso'){
			self.time = response.data.hour + ':' + response.data.minute +':' + response.data.second;
		}
		else if (type == 'unixtime'){
			self.time = response.data;
		}
		// var t = JSON.parse(response.data);
		// console.log(t);
	});
}
// AppCtrl.prototype.writeMessage = function(message){
// 	console.log(this);
// 	this.message = message;
// }