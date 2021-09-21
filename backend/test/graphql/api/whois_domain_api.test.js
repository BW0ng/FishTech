import WhoIsDomainAPI from "../../../src/graphql/api/whois_domain_api";
import googleData from '../../../resources/WhoisService-google.com.json';

const mockGet = jest.fn()
mockGet.mockReturnValue(googleData);
jest.mock('apollo-datasource-rest', () => {
  class MockRESTDataSource {
    baseUrl = ''
    get = mockGet
  }
  return {
    RESTDataSource: MockRESTDataSource,
  }
})

describe('MyRestDataSource whoIsByDomain', () => {
    beforeEach(() => {
        process.env.WHOIS_API_KEY = "API_KEY";
    });

    it('gets hits the correct URL when given domainName string', async () => {
        const whoIsAPI = new WhoIsDomainAPI()
    
        await whoIsAPI.whoIsByDomain("google.com")
    
        expect(mockGet).toBeCalledWith("WhoisService?apiKey=API_KEY&outputFormat=JSON&domainName=google.com")
    })

    it('gets hits the correct URL when given IP string', async () => {
        const whoIsAPI = new WhoIsDomainAPI()
    
        await whoIsAPI.whoIsByDomain("1.1.1.1")
    
        expect(mockGet).toBeCalledWith("WhoisService?apiKey=API_KEY&outputFormat=JSON&domainName=1.1.1.1")
    })

    it('gets hits the correct URL when given number', async () => {
        const whoIsAPI = new WhoIsDomainAPI()
    
        await whoIsAPI.whoIsByDomain(1)
    
        expect(mockGet).not.toBeCalledWith()
    })

    it('gets hits the correct URL when given null', async () => {
        const whoIsAPI = new WhoIsDomainAPI()
    
        await whoIsAPI.whoIsByDomain(null)
    
        expect(mockGet).not.toBeCalledWith()
    })

    it('gets hits the correct URL when given empty string', async () => {
        const whoIsAPI = new WhoIsDomainAPI()
    
        await whoIsAPI.whoIsByDomain("")
    
        expect(mockGet).not.toBeCalledWith()
    })

    it('whoIsByDomain gets the correct data', async () => {
        const whoIsAPI = new WhoIsDomainAPI()
    
        const data = await whoIsAPI.whoIsByDomain("google.com")
    
        expect(data).toEqual(googleData);
    })

    afterEach(() => {
        delete process.env.NODE_ENV;
    });
  })
