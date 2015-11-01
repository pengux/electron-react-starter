import React from 'react';
import TodoActions from './actions';

export default React.createClass({

	create(e) {
		e.preventDefault();
		var task = this.refs.newTask.value;

		TodoActions.create({"name": task});
	},

	render() {
		return (
			<form onSubmit={this.create}>
				<label>
					Add task
					<input type="text" ref="newTask" />
				</label>
			</form>
		);
	}

});
