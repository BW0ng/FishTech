
import { Accordion } from "react-bootstrap";

function DomainInfoCard(props) {
    return (
        <Accordion.Item eventKey="0">
            <Accordion.Header>Domain Information</Accordion.Header>
            <Accordion.Body>
                <strong>Name: </strong>
                {props.data.domainName}

                <br/>
                <br/>

                
                <strong>Domain Status: </strong>
                <br/>
                { props.data.status && props.data.status.split(" ").map(status => {
                    return <span>&emsp;{status}<br/></span>;
                })}

                <br/>
                <br/>

                <strong>Nameservers: </strong>
                <br/>
                {props.data.nameServers && props.data.nameServers.hostNames.map(servers => {
                     return <span>&emsp;{servers}<br/></span>;
                })}

                <br/>
                <br/>

                <h3>Dates</h3>
                <strong>Registry Expiration: </strong>
                {props.data.expiresDate}

                <br/>
                <br/>
                <strong>Registry Expiration: </strong>
                {props.data.createdDate}
                
                <br/>

                
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default DomainInfoCard;