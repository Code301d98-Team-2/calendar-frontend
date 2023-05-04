import axios from "axios";
import { Component } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import { Form, Button } from "react-bootstrap";

class EmployeeData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            authToken: '',
        };
    }

    componentDidMount() {
        this.getEmployees();
    }


    // jeanette code for delete and update buttons

    // handleEmployeeDeleteSubmit = (event) =>{
    //     event.preventDefault();
    //     let employeeObj = {
    //         firstName: event.target.firstName.value,
    //         lastName:event.target.lastName.value,
    //         employeeId:event.target.employeeId.value,
    //         level: event.target.employeeLevel.value,
    //     }

    //     console.log(employeeObj);
    //     console.log('hello');

    //     alert ('hello');
    //     this.deleteEmployee(employeeObj);   
    // }

    // deleteEmployee = async(employeeObj) =>{
    //     try {
    //     let url = `${process.env.REACT_APP_SERVER}/postemployee`;

    //     await axios.post(url, employeeObj);

    //     console.log('Employee removed to database with no errors');

    //     }catch(e){
    //         console.log(e.message);
    //     }
    // }


    // handleEmployeeUpdate = (event) =>{
    //     event.preventDefault();
    //     let employeeObj = {
    //         firstName: event.target.fName.value,
    //         lastName:event.target.lName.value,
    //         employeeId:event.target.employeeId.value,
    //         email: event.target.email.value,
    //         level: event.target.employeeLevel.value
    //     }

    //     console.log(employeeObj);

    //     this.updateEmployee(employeeObj);

        
    // }

    // updateEmployee = async(employeeObj) =>{
    //     try{
    //     let url = `${process.env.REACT_APP_SERVER}/postemployee`;

    //     await axios.post(url, employeeObj);

    //     console.log('Employee added to database with no errors');

    //     }catch(e){
    //         console.log(e.message);
    //     }
    // }


// end of Jeanette code


    getEmployees = async () => {
        if (this.props.auth0.isAuthenticated) {
          const res = await this.props.auth0.getIdTokenClaims();
      
          this.setState({ authToken: res.__raw });
      
          console.log("res obj from token:", res);
          console.log("res from token: " + res.__raw);
      
          try {
            let url = `${process.env.REACT_APP_SERVER}/getallemployees`;
            let urlData = await axios.get(url, {
              headers: {
                Authorization: `Bearer ${res.__raw}`,
              },
            });
            this.setState({ employees: urlData.data });
          } catch (error) {
            console.error("Error fetching employee data:", error);
          }
        }
      };



    render() {
        return (
            <>
                <h1>This will show all employee data</h1>
             
                <Container>
                    <Row>
                        {this.state.employees.map((employee, index) => (

                            <Col xs={6} md={3} key={index}>
                        <Form onSubmit={this.handleEmployeeDeleteSubmit}>   
                        <Form.Text name="firstName">{employee.firstName}</Form.Text>
                        <Form.Text name="lastName">{employee.lastName}</Form.Text>
                        <Form.Text name="level">{employee.level}</Form.Text>
                        <Button variant="primary" type="submit"> Delete </Button>
                        <Button variant="primary" type="submit"> Update </Button>
                                </Form>
                                <Card
                                border="info"
                                style={{ margin: 10 }}
                                key={index}
                                >
                                   
                                     <Card.Header>{employee.firstName} {employee.lastName}</Card.Header>
                                    <Card.Body>Level: {employee.level}</Card.Body>
                                    <Card.Body>ID: {employee.employeeId}</Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
        )
    }
}

export default withAuth0(EmployeeData);