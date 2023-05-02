import React from 'react';
import {Card, Col} from 'react-bootstrap';

const Contact = (props) => {
    return (
        <Col md="4" style={{marginButtom: "1rem"}}>
           <Card>
      <Card.Body>
       
        <Card.Subtitle className="mb-2 text-muted">
            My Contacts
        </Card.Subtitle>

        <Card.Title>{props.contactInfo.name}</Card.Title>
        <Card.Text>
          <p>Phone: {props.contactInfo.phone} </p>
          <p>Location: {props.contactInfo.location}</p>
        </Card.Text>
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
      </Card.Body>
    </Card>
        </Col>
    );
}

export default Contact;
