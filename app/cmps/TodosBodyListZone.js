var React = require("react") ,
	TodosItem = require("./TodosItem");
module.exports = React.createClass({
	render : function(){
		var todosItems = this.props.todoItems.map(function(item){
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