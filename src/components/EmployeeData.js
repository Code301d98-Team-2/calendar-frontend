import axios from "axios";
import { Component } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";


class EmployeeData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
        };
    }

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = async () => {
        try {
            let url = `${process.env.REACT_APP_SERVER}/getallemployees`;
            let urlData = await axios.get(url);
            this.setState({ employees: urlData.data })
        } catch (error) {

        }
    }



    render() {
        return (
            <>
                <h1>This will show all employee data</h1>
                <Container>
                    <Row>
                        {this.state.employees.map((employee, index) => (
                            <Col xs={6} md={3}>
                                <Card key={index}>
                                    <Card.Header>{employee.firstName} {employee.lastName}</Card.Header>
                                    <Card.Body>{employee.level}</Card.Body>
                                    <Card.Body>{employee.employeeId}</Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
        )
    }
}

export default EmployeeData;