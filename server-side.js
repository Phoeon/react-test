var http = require("http"),
	store = [];  
http.createServer(function(request, response) { 
	var queryItems = (request.url+"&").match(/[^\?\&]+?(?=\&)/g) ;
	console.log(queryItems)
	var queryInfo = {};
	var returnStr = [];
	queryItems.forEach(function(item){
		var tems = item.split("=");
		queryInfo[tems[0]] = tems[1].replace(/\+/g," ");
	})
	
	if(queryInfo.save=="true"){
		//保存
		store.push({
			author : queryInfo.author,
			comment : queryInfo.comment
		})
	}
	returnStr.push(queryInfo.callback+"("+JSON.stringify(store)+")");
   	response.writeHead(200, {"Content-Type": "text/html"});  
   	
    response.write(returnStr.join(""));  
    response.end();  
}).listen(8081);  
console.log("Server running at http://localhost:8081/"); 
