import Reflux from 'reflux';
import TodoActions from './actions';

export default Reflux.createStore({

	init() {
		this.todos = [
			{ name: "Task 1" }
		];

		this.listenTo(TodoActions.create, this.onCreate);
		this.listenTo(TodoActions.list, this.onList);
		this.listenTo(TodoActions.del, this.onDel);
	},

	onCreate(todo) {
		this.todos.push(todo);

		this.trigger(this.todos);
	},

	onList() {
		this.trigger(this.todos);
	},

	onDel(todo) {
		for(var i = 0; i < this.todos.length; i++) {
			if(this.todos[i] === todo) {
				this.todos.splice(i, 1);
			}
		}

		this.trigger(this.todos);
	}

});
