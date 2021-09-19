const { ApolloServer, gql } = require("apollo-server");
const { RESTDataSource } = require("apollo-datasource-rest");


const typeDefs = gql`
type Server {
  hostNames: [String]
  ips: [String]
}
type Record { 
  createdDate: String
  updatedDate: String
  expiresDate: String
  registrant: Contact
  administrativeContact: Contact
  technicalContact: Contact
  domainName: String
  nameServers: Server
}
type Contact {
  organization: String
  state: String
  country: String
  countryCode: String
  text: String
}
type WhoisRecord {
  WhoisRecord: Record!
}
  type Query {
    whoIsByDomain(name: String!): WhoisRecord!
}
`;

const resolvers = {
  Query: {
    whoIsByDomain: async (parent, { name }, { dataSources }) => {
      return dataSources.whoisDomainAPI.whoIsByDomain(name);
    }
  }
};

const API_KEY = process.env.WHOIS_API_KEY;

class WhoIsDomainAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://www.whoisxmlapi.com/whoisserver";
  }
  async whoIsByDomain(name) {
    return this.get(`WhoisService?apiKey=${API_KEY}&outputFormat=JSON&domainName=${name}`);
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      whoisDomainAPI: new WhoIsDomainAPI()
    };
  }
});

server.listen().then(({ url }) => console.log(`Server running on ${url}`));