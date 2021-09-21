import React from 'react';
import renderer from 'react-test-renderer';
import RegistrarCard from '../RegistrarCard.jsx';

describe('RegistrarCard', () => {
    it('renders correctly with full data output', () => {
        let input = { 
            registrarName: 'registrarName',
            registrarIANAID: 'registrarIANAID',
            customField2Value : 'customField2Value',
            customField3Value : 'customField3Value',

         };
        const component = renderer.create(<RegistrarCard data={input} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
      });
});