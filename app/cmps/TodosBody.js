var React = require("react"),
	TodosBodyInputZone = require("./TodosBodyInputZone"),
	TodosBodyListZone = require("./TodosBodyListZone") ;
module.exports = React.createClass({
	render : function(){
		return (
			<div className="todos-page-part todos-body">
				<TodosBodyInputZone checkAll = {this.props.bodyData.checkAll}/>
				<TodosBodyListZone todoItems = {this.props.bodyData.todoItems}/>
			</div>
			) ;
	}
});