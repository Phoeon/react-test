;var AppDispatcher = require("../AppDispatcher") ,
	EventEmitter = require("events").EventEmitter,
	assign = require("object-assign"),
	TodosConstant = require("../TodosConstants"),

	_todoList = [
	{
		isDone : true,
		id : 1000,
		content : "nothing to say !!"
	}
	];

var TodosStore = assign({},EventEmitter.prototype,{
	loadAll : function(){
		return _todoList ;
	},
	create : function(data){
		data.id = "TODO"+new Date().getTime();
		_todoList.push(data);
		this.emit(TodosConstant.EVENT_NAME);
	},
	update : function(data){
		debugger
		_todoList.forEach(function(item){
			if(item.id === data.id){
				for(var k in data){
					item[k] = data[k];
				}
			}
		})
		this.emit(TodosConstant.EVENT_NAME);
	}
});
var ActionRoutes = {
	loadAll : function(Action){
		TodoStore[Action.actionType]();
	},
	create : function(Action){
		TodosStore[Action.actionType](Action);
	},
	update : function(Action){
		TodosStore[Action.actionType](Action);
	}
};
AppDispatcher.register(function(Action){
	ActionRoutes[Action.actionType].call(this,Action);
})
module.exports = TodosStore ;