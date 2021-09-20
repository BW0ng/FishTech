
import { Accordion } from "react-bootstrap";

function RegistrarCard(props) {
    return (
        <Accordion.Item eventKey="2">
            <Accordion.Header>Registrar Information</Accordion.Header>
            <Accordion.Body>
                <strong>Name: </strong>
                {props.data.registrarName}

                <br/>
                <br/>

                
                <strong>IANA ID: </strong>
                {props.data.registrarIANAID}
                <br/>
                <br/>

                <strong>Contact Phone: </strong>
                {props.data.customField2Value}
                <br/>
                <br/>

                <strong>Website: </strong>
                {props.data.customField3Value}
                
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default RegistrarCard;