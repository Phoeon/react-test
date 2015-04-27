var AppDispatcher = require("../AppDispatcher") ;
module.exports = {
	loadAll : function(data){
		AppDispatcher.dispatch(data);
	},
	create : function(data){
		AppDispatcher.dispatch(data);
	},
	update : function(data){
		AppDispatcher.dispatch(data);	
	}
}