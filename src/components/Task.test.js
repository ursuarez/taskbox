import React from 'react';
import { shallow } from 'enzyme';
import Task from './Task';
import { task, actions } from './Task.stories';

describe('Pruebas en <Task />', () => {
	test('debe de mostrar <Task /> correctamente ', () => {
		const wrapper = shallow(<Task task={task} {...actions} />);

		expect(wrapper).toMatchSnapshot();
	});
});
