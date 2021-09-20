const whoisQueries = {
    whoIsByDomain: async (parent, { name }, { dataSources }) => {
        return dataSources.whoisDomainAPI.whoIsByDomain(name);
      }
  };
    
  export default whoisQueries;