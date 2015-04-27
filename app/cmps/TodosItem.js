var React = require("react") ,
	TodosAction = require("../acts/TodosAction"),
	TodosConstant = require("../TodosConstants");

module.exports = React.createClass({
	render : function(){
		return (
			<li className="todos-item" 
			onBlur={this.blurHandler} 
			onKeyDown = {this.keyupDownHandler}
			onDoubleClick = {this.dblClickHandler}
			data-id = {this.props.todoItem.id}>
				<input ref = "todos-check-single" type="checkbox" className="todos-check-single" onChange = {this.changeHandler}/>
				<div ref="todos-content" className="todos-content" >{this.props.todoItem.content}</div>
			</li>
			);
	},
	changeHandler : function(e){
		var et = e.target ;
	},
	dblClickHandler : function(e){
		var et = e.currentTarget;
		et.contentEditable = true ;
		et.focus();
		this.toggleShowHide(false);
	},
	blurHandler : function(e){
		this.toggleShowHide(true);	
	},
	updateHandler : function(){

	},
	keyupDownHandler : function(e){
		if(e.keyCode===13){
			e.preventDefault();
			var et = e.target ,
				v = et.innerHTML ;
			if(et&&v !== ""){
				TodosAction.update({
					id : et.getAttribute("data-id"),
					actionType : TodosConstant.UPDATE_TODO ,
					content : v,
					isDone : this.refs["todos-check-single"].getDOMNode().checked
				})
			}
		}
	},
	toggleShowHide : function(isShow){
		var display = isShow?"":"none";
		this.refs["todos-check-single"].getDOMNode().style.display = display ;
		this.refs["todos-content"].getDOMNode().style.display = display ;
	}
});