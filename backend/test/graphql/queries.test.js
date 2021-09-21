'use strict'

const fs = require('fs')
const path = require('path')
import EasyGraphQLTester from 'easygraphql-tester';

import schema from '../../src/graphql/schema';
import resolvers from '../../src/graphql/resolvers';


describe('Test queries', () => {
    let tester;

    beforeEach(() => {
        tester = new EasyGraphQLTester(schema, resolvers);
    })

    it('Invalid queries', () => {
        const invalidQuery = `{}`

        tester.test(false, invalidQuery);
    })

    it('Valid simple queries', () => {
        const invalidQuery = `{
            whoIsByDomain(name: "google.com") {
              WhoisRecord {
                createdDate
                expiresDate
                domainName
              }
            }`

        tester.test(false, invalidQuery);
    })

    it('Valid entire schema queries', () => {
        const invalidQuery = `{
            whoIsByDomain(name: $domain) {
                WhoisRecord {
                    createdDate
                    expiresDate
                    registrant {
                        organization
                        state
                        country
                        countryCode
                    }
                    administrativeContact {
                        organization
                        state
                        country
                        countryCode
                    }
                    technicalContact {
                        organization
                        state
                        country
                        countryCode
                    }
                    domainName
                    nameServers {
                        hostNames
                        ips
                    }
                    status
                    registrarName
                    registrarIANAID
                    whoisServer
                    customField2Name
                    customField3Name
                    customField2Value
                    customField3Value
                }
            }
        }`

        tester.test(false, invalidQuery);
    })
})
