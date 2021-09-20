const { RESTDataSource } = require("apollo-datasource-rest");
const API_KEY = process.env.WHOIS_API_KEY;

export default class WhoIsDomainAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = "https://www.whoisxmlapi.com/whoisserver";
    }
    async whoIsByDomain(name) {
      return this.get(`WhoisService?apiKey=${API_KEY}&outputFormat=JSON&domainName=${name}`);
    }
  }