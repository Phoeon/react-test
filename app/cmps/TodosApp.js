var React = require("react") ,
	TodosHeader = require("./TodosHeader"),
	TodosBody = require("./TodosBody"),
	TodosFooter = require("./TodosFooter"),
	TodosAction = require("../acts/TodosAction"),
	TodosConstant = require("../TodosConstants"),
	TodosStore = require("../stores/TodosStore");
module.exports = React.createClass({
	getLastestState : function(){
		var doneNums = 0 ,
			todoItems = TodosStore.loadAll() ,
			bodyData,footerData,todosData ;
		todoItems.forEach(function(item){
			item.isDone&&doneNums++;
		});

		bodyData = {
			checkAll : (doneNums===todoItems.length&&todoItems.length>0),
			todoItems : todoItems
		}
		footerData = {
			doneNums:doneNums,
			undoneNums: (todoItems.length - doneNums)
		};
		todosData = {
			bodyData : bodyData,
			footerData : footerData
		};
		return todosData ;
	},
	updateState : function(){
		this.setState(this.getLastestState());
	},
	getInitialState : function(){
		return this.getLastestState();
	},
	componentDidMount : function(){
		var self = this ;
		TodosStore.on(TodosConstant.EVENT_NAME,this.updateState);
	},
	componentWillUnmount : function(){
		TodosStore.remove(TodosConstant.EVENT_NAME,this.updateState);
	},
	render : function(){
		return (
			<div className="todos-zone">
				<TodosHeader />
				<TodosBody bodyData = {this.state.bodyData}/>
				<TodosFooter footerData = {this.state.footerData} />
			</div>
			);
	}
});