var React = require("react") ,
	TodosHeader = require("./TodosHeader"),
	TodosBody = require("./TodosBody"),
	TodosFooter = require("./TodosFooter");
module.exports = React.createClass({
	render : function(){
		return (
			<div className="todos-zone">
				<TodosHeader />
				<TodosBody />
				<TodosFooter />
			</div>
			);
	}
});