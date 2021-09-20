import { whoisQueries } from './whois';

const resolvers = {
    Query: {
      ...whoisQueries,
    },
  };

export default resolvers;