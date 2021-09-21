import React from 'react';
import renderer from 'react-test-renderer';
import DomainInfoCard from '../DomainInfoCard.jsx';

describe('DomainInfoCard', () => {
    it('renders correctly with full data output', () => {
        let input = { 
            domainName: 'DomainName',
            status: 'status1 status2 status3 status4',
            nameServers : { hostNames: ['server1', 'server2', 'server3', 'server4' ]},
            expiresDate : '2021-09-20T20:37:09.391Z',
            createdDate : '2021-09-20T20:37:09.391Z',

         };
        const component = renderer.create(<DomainInfoCard data={input} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
      });

      describe ('renders correctly', () => {
            it('with missing statuses', () => {
                let input = { 
                    domainName: 'DomainName',
                    nameServers : { hostNames: ['server1', 'server2', 'server3', 'server4' ]},
                    expiresDate : '2021-09-20T20:37:09.391Z',
                    createdDate : '2021-09-20T20:37:09.391Z',
        
                };
                const component = renderer.create(<DomainInfoCard data={input} />);
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
                // On the first run of this test, Jest will generate a snapshot file automatically.
            });
            it('with missing one status', () => {
                let input = { 
                    domainName: 'DomainName',
                    status: 'status1',
                    nameServers : { hostNames: ['server1', 'server2', 'server3', 'server4' ]},
                    expiresDate : '2021-09-20T20:37:09.391Z',
                    createdDate : '2021-09-20T20:37:09.391Z',
        
                };
                const component = renderer.create(<DomainInfoCard data={input} />);
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
                // On the first run of this test, Jest will generate a snapshot file automatically.
            });
      });

      describe ('renders correctly', () => {
        it('with missing nameservers', () => {
            let input = { 
                domainName: 'DomainName',
                status: 'status1 status2 status3 status4',
                expiresDate : '2021-09-20T20:37:09.391Z',
                createdDate : '2021-09-20T20:37:09.391Z',
    
            };
            const component = renderer.create(<DomainInfoCard data={input} />);
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
            // On the first run of this test, Jest will generate a snapshot file automatically.
        });
        it('with one server', () => {
            let input = { 
                domainName: 'DomainName',
                status: 'status1 status2 status3 status4',
                nameServers : { hostNames: ['server1' ]},
                expiresDate : '2021-09-20T20:37:09.391Z',
                createdDate : '2021-09-20T20:37:09.391Z',
    
            };
            const component = renderer.create(<DomainInfoCard data={input} />);
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
            // On the first run of this test, Jest will generate a snapshot file automatically.
        });
  })
      
});