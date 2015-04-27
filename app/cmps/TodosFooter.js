var React = require("react") ,
	TodosAction = require("../acts/TodosAction") ,
	TodosConstant = require("../TodosConstants") ;

module.exports = React.createClass({
	render : function(){
		var leftKeyWord = rightKeyWord =  "item";
		leftKeyWord += ((this.props.footerData.undoneNums>1)?"s":"");
		rightKeyWord += ((this.props.footerData.doneNums>1)?"s":"");
		// <div className="left-zone">{this.props.footerData.undoneNums+" "+leftKeyWord} left</div>
				// <div onClick={this.clickHandler} className={this.props.footerData.doneNums?"right-zone has-done":"right-zone"}>clear {this.props.footerData.doneNums+" completed "+rightKeyWord}</div>
		return (
			<div className="todos-page-part todos-footer">
				<div className="left-zone">undone : {this.props.footerData.undoneNums}</div>
				<div title={"clear done items ?"} onClick={this.clickHandler} className={this.props.footerData.doneNums?"right-zone has-done":"right-zone"}>done : {this.props.footerData.doneNums}</div>
			</div>
			);
	},
	clickHandler : function(){
		TodosAction.remove({
			actionType : TodosConstant.REMOVE_TODO,
			params :　{
				value : true,
				key : "isDone"
			}
		});
	}
});