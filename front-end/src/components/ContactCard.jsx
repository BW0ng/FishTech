
import { Accordion } from "react-bootstrap";
import AdminContact from './AdminContact';
import RegistrantContact from './RegistrantContact';
import TechContact from './TechContact';

function ContactCard(props) {
    return (
        <Accordion.Item eventKey="1">
            <Accordion.Header>Contact Information</Accordion.Header>
            <Accordion.Body>
                <Accordion>
                    <AdminContact data={props.data} />
                    <TechContact data={props.data} />
                    <RegistrantContact data={props.data} />
                </Accordion>
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default ContactCard;