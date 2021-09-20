import { ApolloServer } from 'apollo-server-express';
import schema from './schema';
import WhoIsDomainAPI from './api/whois_domain_api'
import { env } from '../config/environment';

const server = new ApolloServer({
    schema,
    dataSources: () => {
      return {
        whoisDomainAPI: new WhoIsDomainAPI()
      }
    },
    playground: env.development
  });

export default server;