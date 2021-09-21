import { mount } from 'enzyme';
import HomePage from '../Home';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Home Page', () => {
    it ('renders correctly', () => {
        const component = renderer.create(<HomePage />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    // TODO Need to figure out how to get history from props. Props is currently {}
    // it('Submit button redirects to lookup page', () => {
    //     const mockPush = jest.fn();
    //     jest.mock('react-router-dom', () => ({
    //     useHistory: () => {
    //         const push = () => mockPush ();
    //         return { push };
    //     },
    //     }));

    //     const wrapper = mount(<HomePage/>);

    //     wrapper.find('#whois-input').text = "Input Text";

    //     // Find the button and call the onClick handler
    //     wrapper.find('button').simulate('click');
        
    //     expect(mockPush).toBeCalledWith(['/lookup', {domainName: "Input Text"}]);
    // })
})