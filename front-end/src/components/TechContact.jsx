import { Accordion } from "react-bootstrap";

const TechContact = props => {
    if (props.data.technicalContact) {
        return (
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
        )
    }
    return null; 
}

export default TechContact;
