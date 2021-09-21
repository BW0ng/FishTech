import WhoisRecord, { GET_WHOIS_QUERY } from '../WhoIsRecord';
import googleData from '../../../resources/google.json';
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';

const {act} = TestRenderer;
  

describe('WhoisRecord useQuery', () => {
    it('renders without error while loading', () => {
      const mocks = [
        {
          request: {
            query: GET_WHOIS_QUERY,
            variables: {
              name: 'google.com',
            },
          },
          result: {
            data: {
              googleData
            },
          },
        },
      ];
      const component = TestRenderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <WhoisRecord name="google.com" />
        </MockedProvider>,
      );

      const tree = component.toJSON();
      expect(tree.children).toContain("Loading");
    });

    // TODO Failed to match mock
    it('renders without error with data null', async () => {
      const mock = {
        request: {
          query: GET_WHOIS_QUERY,
          variables: { name: 'google.com' },
        },
        result: {
          data: googleData,
        },
        error: null
      };

      // Had to add default options due to https://github.com/apollographql/apollo-client/issues/6803#issuecomment-686486426
      await act( async () => {
        const component = TestRenderer.create(
          <MockedProvider mocks={[mock]} addTypename={false} defaultOptions={{
            watchQuery: { fetchPolicy: 'no-cache' },
            query: { fetchPolicy: 'no-cache' },
        }}>
            <WhoisRecord name="google.com" />
          </MockedProvider>,
        );
        await new Promise(resolve => setTimeout(resolve, 2)); // wait for response
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      }) 
    });

    // TODO Figure out to to mock with null and empty data.
    // Keep getting forEach error because the data doesn't match query shape. 

    it('renders with error ', async () => {
      const mock = {
        request: {
          query: GET_WHOIS_QUERY,
          variables: { name: 'google.com' },
        },
        error: new Error('An error occurred'),
      };

      await act( async () => {
        const component = TestRenderer.create(
          <MockedProvider mocks={[mock]} addTypename={false} >
            <WhoisRecord name="google.com" />
          </MockedProvider>,
        );
        await new Promise(resolve => setTimeout(resolve, 10)); // wait for response
        let tree = component.toJSON();
        expect(tree.children).toContain("Error");
      }) 
    });
});