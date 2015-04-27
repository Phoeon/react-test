var React = require("react") ,
	TodosApp = require("./cmps/TodosApp");
	var TodoStore = require("./stores/TodosStore");
	React.render(<TodosApp />,document.querySelector("#TodosContainer"));