
import { Accordion } from "react-bootstrap";

function ContactCard(props) {
    return (
        <Accordion.Item eventKey="1">
            <Accordion.Header>Contact Information</Accordion.Header>
            <Accordion.Body>
                <Accordion>
                    {props.data.administrativeContact &&
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Administration Contact</Accordion.Header>
                            <Accordion.Body>
                                <strong>Organization: </strong>
                                {props.data.administrativeContact.organization}
                                <br/>
                                <strong>State: </strong>
                                {props.data.administrativeContact.state}
                                <br/>
                                <strong>Country: </strong>
                                {props.data.administrativeContact.country}
                                <br/>
                            </Accordion.Body>
                        </Accordion.Item>
                    }
                    
                    {props.data.technicalContact &&
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Technical Contact</Accordion.Header>
                            <Accordion.Body>
                                <strong>Organization: </strong>
                                {props.data.technicalContact.organization}
                                <br/>
                                <strong>State: </strong>
                                {props.data.technicalContact.state}
                                <br/>
                                <strong>Country: </strong>
                                {props.data.technicalContact.country}
                                <br/>
                            </Accordion.Body>
                        </Accordion.Item>
                    }
                    {props.data.registrant &&
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Registrant Contact</Accordion.Header>
                            <Accordion.Body>
                                <strong>Organization: </strong>
                                {props.data.registrant.organization}
                                <br/>
                                <strong>State: </strong>
                                {props.data.registrant.state}
                                <br/>
                                <strong>Country: </strong>
                                {props.data.registrant.country}
                                <br/>
                            </Accordion.Body>
                        </Accordion.Item>
                }
                </Accordion>
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default ContactCard;