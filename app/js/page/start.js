import React from 'react';
import DocumentTitle from 'react-document-title';
import TodoList from '../todo/list';
import TodoForm from '../todo/form';

export default React.createClass({

	render() {
		return (
			<DocumentTitle title="Start page">
				<section>
					<TodoForm />
					<TodoList />
				</section>
			</DocumentTitle>
		);
	}

});
