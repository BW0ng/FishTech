import React from 'react';
import renderer from 'react-test-renderer';
import ContactCard from '../ContactCard.jsx';

describe('ContactCard', () => {
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
        const component = renderer.create(<ContactCard data={input} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
      });

      it('renders correctly with missing the administrativeContact', () => {
        let input = { 
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
        const component = renderer.create(<ContactCard data={input} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
      });

      it('renders correctly with missing the technicalContact', () => {
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
        const component = renderer.create(<ContactCard data={input} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
      });

      it('renders correctly with missing the registrant', () => {
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
         };
        const component = renderer.create(<ContactCard data={input} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
      });
});