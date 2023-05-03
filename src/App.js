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
                    location: "accra",
                    id: "444"
                },
                {
                    name: "Bob Fox",
                    phone: "0244998877",
                    location: "kumasi",
                    id: "555"
                },
                {
                    name: "Sam Wood",
                    phone: "0244885533",
                    location: "tamale",
                    id: "666"
                },
            ]
        }
    }

    addNewContact = (contact) => {
        contact.id = Math.random().toString()
        this.setState({
            contacts: [...this.state.contacts, contact]
        })
    }

    deleteContact = (id) => {
        let undeletedContacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({
            contacts: undeletedContacts
        })
    }

    editContact = (id, updatedContact) => {
        this.setState({
          contacts: this.state.contacts.map(contact => contact.id === id ? updatedContact : contact)
        })
      }
    render() {
    return (
        <>
            <Container fluid style={{marginTop: "2rem"}}>
                <Row>
                    <Col md="4">
                    <h4>Add Contact</h4>
                    <br/>
                        <AddContactForm addContact = {this.addNewContact}/>
                    </Col>
                    <Col>
                    <h4>All Contacts</h4>
                    <br/>
                        <Contacts contactsData={this.state.contacts} deleteContact={this.deleteContact} editContact={this.editContact} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
}

export default App;