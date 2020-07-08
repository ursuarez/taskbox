import PropTypes from 'prop-types';
import React from 'react';

import Task from './Task';

import styled from 'styled-components';

const TaskListContainer = styled.div`
	border-radius: 10px;
	border: 1px solid #06a6ba;
	background: transparent;
	box-shadow: 0px 6px 20px 0px rgb(116, 116, 116);

	&.list-items .list-item:first-child {
		border-radius: 10px 10px 0 0;
	}

	&.list-items .list-item:last-child {
		border-radius: 0 0 10px 10px;
	}
`;

function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
	const events = {
		onPinTask,
		onArchiveTask,
	};

	const LoadingRow = (
		<div className='loading-item load'>
			<span className='glow-checkbox' />
			<span className='glow-text'>
				<span>Loading</span> <span>cool</span> <span>state</span>
			</span>
		</div>
	);

	if (loading) {
		return (
			<div className='list-items'>
				{LoadingRow}
				{LoadingRow}
				{LoadingRow}
				{LoadingRow}
				{LoadingRow}
				{LoadingRow}
			</div>
		);
	}

	if (tasks.length === 0) {
		return (
			<div className='list-items'>
				<div className='wrapper-message'>
					<span className='icon-check' />
					<div className='title-message'>You have no tasksss</div>
					<div className='subtitle-message'>Sit back and relax</div>
				</div>
			</div>
		);
	}

	const tasksInOrder = [
		...tasks.filter((t) => t.state === 'TASK_PINNED'),
		...tasks.filter((t) => t.state !== 'TASK_PINNED'),
	];

	return (
		<TaskListContainer className='list-items'>
			{tasksInOrder.map((task) => (
				<Task key={task.id} task={task} {...events} />
			))}
		</TaskListContainer>
	);
}

TaskList.propTypes = {
	loading: PropTypes.bool,
	tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
	onPinTask: PropTypes.func.isRequired,
	onArchiveTask: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
	loading: false,
};

export default TaskList;
