import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { colors } from './styles/colors';

const { taskMainColor } = colors;

const TaskContainer = styled.div`
	border: 1px solid ${taskMainColor};
`;

export default function Task({
	task: { id, title, state },
	onArchiveTask,
	onPinTask,
}) {
	return (
		<TaskContainer className={`list-item ${state}`}>
			<label className='checkbox'>
				<input
					type='checkbox'
					defaultChecked={state === 'TASK_ARCHIVED'}
					disabled={true}
					name='checked'
				/>
				<span className='checkbox-custom' onClick={() => onArchiveTask(id)} />
			</label>
			<div className='title'>
				<input
					type='text'
					value={title}
					readOnly={true}
					placeholder='Input title'
				/>
			</div>

			<div className='actions' onClick={(event) => event.stopPropagation()}>
				{state !== 'TASK_ARCHIVED' && (
					<a onClick={() => onPinTask(id)}>
						<span className={`icon-star`} />
					</a>
				)}
			</div>
		</TaskContainer>
	);
}

Task.propTypes = {
	task: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		state: PropTypes.string.isRequired,
	}),
	onArchiveTask: PropTypes.func,
	onPinTask: PropTypes.func,
};
