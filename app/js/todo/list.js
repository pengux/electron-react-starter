import React from 'react';
import Reflux from 'reflux';
import TodoStore from './store';
import TodoActions from './actions';

export default React.createClass({

	mixins: [Reflux.ListenerMixin],

	getInitialState() {
		return {
			todos: []
		};
	},

	componentWillMount() {
		this.listenTo(TodoStore, this.onTodoChange);
		TodoActions.list();

	},

	onTodoChange(todos) {
		this.setState({
			todos: todos
		});
	},

	del(todo) {
		TodoActions.del(todo);
	},

	render() {
		return (
			<ul>
				{this.state.todos.map(function(todo, index) {
					return (
						<li key={index}>
							{todo.name}
							<a href="#" className="todo-del" onClick={this.del.bind(this, todo)}>Delete</a>
						</li>
					);
				}, this)}
			</ul>
		);
	}

});
