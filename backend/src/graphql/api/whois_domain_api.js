const { RESTDataSource } = require("apollo-datasource-rest");

export default class WhoIsDomainAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = "https://www.whoisxmlapi.com/whoisserver";
      this.API_KEY = process.env.WHOIS_API_KEY;
    }
    async whoIsByDomain(name) {
      if (name && typeof name === "string")
        return this.get(`WhoisService?apiKey=${this.API_KEY}&outputFormat=JSON&domainName=${name}`);
      else
        return {};
    }
  }