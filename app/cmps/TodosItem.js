var React = require("react") ,
	TodosAction = require("../acts/TodosAction"),
	TodosConstant = require("../TodosConstants");

module.exports = React.createClass({
	render : function(){
		return (
			<li className="todos-item" onDoubleClick = {this.dblClickHandler}>
				<input type="text" className="todos-input" ref = "update-ip" onBlur={this.blurHandler} onKeyDown = {this.keyupDownHandler}/>
				<input checked={this.props.todoItem.isDone} ref = "todos-check-single" type="checkbox" className="todos-check-single" onChange = {this.changeHandler}/>
				<div ref="todos-content" className={this.props.todoItem.isDone?"todos-content todos-done":"todos-content"} >{this.props.todoItem.content}</div>
				<div ref="todos-del-btn" 
					onClick={this.clickHandler} className="todos-del-btn">×</div>
			</li>
			);
	},
	changeHandler : function(e){
		var et = e.target ;
		TodosAction.update({
			id : this.props.todoItem.id,
			actionType : TodosConstant.UPDATE_TODO,
			isDone : et.checked
		});
	},
	dblClickHandler : function(e){
		var et = e.currentTarget;
		et.className = et.className+" "+"edit";
		var updateIp = this.refs["update-ip"].getDOMNode();
		updateIp.value = this.props.todoItem.content;
		updateIp.focus();
	},
	clickHandler : function(e){
		TodosAction.remove({
			id : this.props.todoItem.id,
			actionType : TodosConstant.REMOVE_TODO
		});
	},
	blurHandler : function(e){
		e.target.parentNode.className = e.target.parentNode.className.match(/.+?(?=\s)/);
	},
	keyupDownHandler : function(e){
		if(e.keyCode===13){
			e.preventDefault();
			var et = e.target ,
				v = et.value ;
			if(et&&v !== ""){
				TodosAction.update({
					id : this.props.todoItem.id,
					actionType : TodosConstant.UPDATE_TODO ,
					content : v,
					isDone : this.refs["todos-check-single"].getDOMNode().checked
				});
				et.blur();
			}
		}
	}
});