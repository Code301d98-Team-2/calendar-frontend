import { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from 'axios'

class EmployeeForm extends Component{

    handleEmployeeSubmit = (event) =>{
        event.preventDefault();
        let employeeObj = {
            firstName: event.target.fName.value,
            lastName:event.target.lName.value,
            employeeId:event.target.employeeId.value,
            email: event.target.email.value,
            level: event.target.employeeLevel.value
        }

        console.log(employeeObj);

        this.postEmployee(employeeObj);

        
    }

    postEmployee = async(employeeObj) =>{
        try{
        let url = `${process.env.REACT_APP_SERVER}/postemployee`;

        await axios.post(url, employeeObj);

        console.log('Employee added to database with no errors');

        }catch(e){
            console.log(e.message);
        }
    }
    

    render(){
        return(
            <>
            <Form onSubmit={this.handleEmployeeSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="fName">
                    <Form.Label column sm={2}>
                    First Name:
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control type="text" placeholder="First Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="lName">
                    <Form.Label column sm={2}>
                    Last Name:
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control type="text" placeholder="Last Name" />
                    </Col>
                    </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="email">
                    <Form.Label column sm={2}>
                    Email:
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control type="text" placeholder="email" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="employeeId">
                    <Form.Label column sm={2}>
                    Employee ID:
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control type="text" placeholder="Employee ID" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3"controlId="employeeLevel">
                    <Col sm={7}>
                    <Form.Select aria-label="Default select example">
                        <option>Select Employee Level</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                    </Form.Select>
                </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Save User</Button>
                    </Col>
                </Form.Group>
                
            </Form>
            </>
        )
    }
}

export default EmployeeForm;