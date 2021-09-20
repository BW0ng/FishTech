
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import DomainInfoCard from "../components/DomainInfoCard"
import ContactCard from "../components/ContactCard"
import RegistrarCard from "../components/RegistrarCard"
import { Accordion } from "react-bootstrap";
import "../css/card.css";

function WhoisRecord(domainName) {
    const GET_WHOIS_QUERY = gql`
        query WhoIsRecordQuery($domain: String!) {
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
        }
    `
    const { loading, error, data } = useQuery(GET_WHOIS_QUERY, { variables: { domain: domainName.domainName }})
    if (loading) {
        return (
            <h1>Loading</h1>
        )
    }

    if (error) {
        console.log(JSON.stringify(error, null, 2));
        return (<div>Error</div>);
    } else {
        console.log(data);
        if (data && data.whoIsByDomain.WhoisRecord) {
            return (
                <div>
                    <h1 className="center">{data.whoIsByDomain.WhoisRecord.domainName}</h1>
                    <Accordion className="whois-card">
                        <DomainInfoCard data={data.whoIsByDomain.WhoisRecord}></DomainInfoCard>
                        <ContactCard data={data.whoIsByDomain.WhoisRecord}></ContactCard>
                        <RegistrarCard data={data.whoIsByDomain.WhoisRecord}></RegistrarCard>
                    </Accordion>
                </div>
            )
        } else {
            return (
                <p>Data was null</p>
            )
        }
    }
}

export default WhoisRecord;