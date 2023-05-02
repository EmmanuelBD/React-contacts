import React, { Component } from 'react';
import { Form , Button} from 'react-bootstrap';

class AddContactForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"",
            phone:"",
            location:"",
        };
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value,
        });
       
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addContact(this.state);
        this.setState({
            name:"",
            phone:"",
            location:"",
        });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleChange} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Enter phone number" name="phone" value={this.state.phone} onChange={this.handleChange} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter location" name="location"  value={this.state.location}  onChange={this.handleChange}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        );
    }
}

export default AddContactForm;
