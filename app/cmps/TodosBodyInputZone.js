var React = require("react") ,
	TodosAction = require("../acts/TodosAction"),
	TodosConstant = require("../TodosConstants");
module.exports = React.createClass({
	render : function(){
		return (
			<div className="todos-edit-zone">
				<div className="todos-input-zone">
					<input 
					onKeyDown={this.keyupDownHandler}
					className="todos-input" type="text" ref="todos-input" placeholder="input something to do 。。。"/>
				</div>
				<div className="todos-mark-all-zone">
					<input className="todos-mark-all" type="checkbox" ref="todos-mark-all" />
					<label className="mark-all-label">mark all as completed</label>
				</div>
			</div>
			);
	},
	keyupDownHandler : function(e){
		if(e.keyCode===13){
			e.preventDefault();
			var et = e.target ,
				v = et.value ;
			if(et&&v !== ""){
				TodosAction.create({
					actionType : TodosConstant.CREATE_TODO ,
					content : v,
					isDone : false
				});
				et.value = "";
			}
		}
	},
	clickHandler : function(e){
		console.log(e)
	}
});