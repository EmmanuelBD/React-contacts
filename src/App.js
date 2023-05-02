import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Contacts from './Components/Contacts';
import AddContactForm from './Components/AddContactForm';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            contacts: [
                {
                    name: "Carl Max",
                    phone: "0244334455",
                    location: "accra"
                },
                {
                    name: "Bob Fox",
                    phone: "0244998877",
                    location: "kumasi"
                },
                {
                    name: "Sam Wood",
                    phone: "0244885533",
                    location: "tamale"
                },
            ]
        }
    }

    addNewContact = (contact) => {
        this.setState({
            contacts: [...this.state.contacts, contact]
        })
    }
    render() {
    return (
        <>
            <Container fluid style={{marginTop: "2rem"}}>
                <Row>
                    <Col md="4">
                        <AddContactForm addContact = {this.addNewContact}/>
                    </Col>
                    <Col>
                        <Contacts contactsData={this.state.contacts} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
}

export default App;