import { Accordion } from "react-bootstrap";

const RegistrantContact = props => {
    if (props.data.registrant) {
        return (
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
        )
    }
    return null; 
}

export default RegistrantContact;
