var React = require("react"),
	TodosBodyInputZone = require("./TodosBodyInputZone"),
	TodosBodyListZone = require("./TodosBodyListZone") ;
module.exports = React.createClass({
	render : function(){
		return (
			<div className="todos-page-part todos-body">
				<TodosBodyInputZone/>
				<TodosBodyListZone/>
			</div>
			) ;
	}
});