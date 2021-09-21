import React from 'react';
import renderer from 'react-test-renderer';
import TechContact from '../TechContact.jsx';

describe('TechContact', () => {
    it('renders correctly with full data output', () => {
        let input = { 
            administrativeContact : {
                organization : 'Organization',
                state : 'State',
                country : 'Country'
            },
            technicalContact : {
                organization : 'Organization',
                state : 'State',
                country : 'Country'
            },
            registrant : {
                organization : 'Organization',
                state : 'State',
                country : 'Country'
            },
         };
        const component = renderer.create(<TechContact data={input} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
      });

      it('does not renders when data missing', () => {
        let input = { 
            administrativeContact : {
                organization : 'Organization',
                state : 'State',
                country : 'Country'
            },
            registrant : {
                organization : 'Organization',
                state : 'State',
                country : 'Country'
            },
         };
        const component = renderer.create(<TechContact data={input} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
      });
});