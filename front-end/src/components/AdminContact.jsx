import { Accordion } from "react-bootstrap";

const AdminContact = props => {
    if (props.data.administrativeContact) {
        return (
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
        )
    }
    return null; 
}

export default AdminContact;
