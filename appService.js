app.service('appService', appService);

function appService($http){
	this.http = $http;
	this.base_url = 'http://localhost:8080/';
}


appService.prototype.post = function(command, data,message) {

	var url;
	if(command == 'get_message'){
		url = this.base_url + 'message';
	}else if(command == 'set_message'){
		url = this.base_url + 'set_message/' + message;
	}
	return this.http.post(url,data);
		
};

appService.prototype.get = function(command, data, type){
	var url;
	if(command == 'show_the_time'){
	 	url = this.base_url + 'api/parsetime/' + type;
	}
	return this.http.get(url, {'data':{'date': data}});
}