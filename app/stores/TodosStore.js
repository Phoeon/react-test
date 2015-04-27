;var AppDispatcher = require("../AppDispatcher") ,
	EventEmitter = require("events").EventEmitter,
	assign = require("object-assign"),
	TodosConstant = require("../TodosConstants"),

	_todoList = [];

var TodosStore = assign({},EventEmitter.prototype,{
	loadAll : function(){
		return _todoList ;
	},
	create : function(data){
		data.id = "TODO"+new Date().getTime();
		_todoList.push(data);
		this.emit(TodosConstant.EVENT_NAME);
	},
	update : function(data,stopEvent){
		_todoList.forEach(function(item){
			if(item.id === data.id){
				for(var k in data){
					item[k] = data[k];
				}
			}
		})
		if(!stopEvent)
		this.emit(TodosConstant.EVENT_NAME);
	},
	remove : function(data){
		var _bk_todoList = [];
		var params = data.params||(data.params={key:"id",value:data.id});
		_todoList.forEach(function(item,idx){
			if(item[params.key] !== params.value){
				_bk_todoList.push(item);
			}
		})
		_todoList = _bk_todoList;
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
	},
	remove : function(Action){
		TodosStore[Action.actionType](Action);
	},
	updateAll : function(data){
		TodosStore.loadAll().forEach(function(item){
			data.id = item.id ;
			TodosStore.update(data,true);
		})
		TodosStore.emit(TodosConstant.EVENT_NAME);	
		console.log(_todoList)
	}
};
AppDispatcher.register(function(Action){
	ActionRoutes[Action.actionType].call(this,Action);
})
module.exports = TodosStore ;