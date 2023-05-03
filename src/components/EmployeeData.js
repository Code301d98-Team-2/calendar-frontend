import axios from "axios";
import { Component } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";


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