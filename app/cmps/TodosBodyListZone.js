var React = require("react") ,
	TodosItem = require("./TodosItem"),
	TodosStore = require("../stores/TodosStore"),
	TodosConstant = require("../TodosConstants");
module.exports = React.createClass({
	getLastestState : function(){
		return this.setState({todoItems : TodosStore.loadAll()});
	},
	getInitialState : function(){
		return {todoItems : TodosStore.loadAll()};
	},
	componentDidMount : function(){
		var self = this ;
		TodosStore.on(TodosConstant.EVENT_NAME,this.getLastestState);
	},
	componentWillUnmount : function(){
		TodosStore.remove(TodosConstant.EVENT_NAME,this.getLastestState);
	},
	render : function(){
		var todosItems = this.state.todoItems.map(function(item){
			return <TodosItem todoItem={item} />
		});
		return (
			<div className="todos-list-zone">
				<ul className="todos-list">
					{todosItems}
				</ul>
			</div>
			);
	}
});