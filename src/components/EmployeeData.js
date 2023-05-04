import axios from "axios";
import { Component } from "react";
import { Card, Col, Row, Container, Button } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import DeleteEmployeeModal from "./DeleteEmployee";
import UpdateEmployeeModal from "./UpdateEmployee";


class EmployeeData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            authToken: '',
            selectedEmployee: null,
            showDeleteModal: false,
            showUpdateModal: false,
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
            // console.log("res from token: " + res.__raw);

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

    handleDeleteModalClose = () => {
        this.setState({ showDeleteModal: false });
    };

    handleUpdateModalClose = () => {
        this.setState({ showUpdateModal: false });
    };

    updateEmployee = async (employeeToUpdate) => {
        console.log("Updating employee:", employeeToUpdate);
        try {
            let url = `${process.env.REACT_APP_SERVER}/employee/${employeeToUpdate._id}`;
            let urlUpdate = await axios.put(url, employeeToUpdate);
            let updatedEmployeeArr = this.state.employees.map(existingEmployee => {
                return existingEmployee._id === employeeToUpdate._id ? urlUpdate.data : existingEmployee
            })
            this.setState({ employees: updatedEmployeeArr });
            this.handleUpdateModalClose();
            window.location.reload();
            this.getEmployees();
        } catch (error) {
            console.log(error.message);
        }
    };

    deleteEmployee = async (employeeToDelete) => {
        try {
            let url = `${process.env.REACT_APP_SERVER}/employee/${employeeToDelete._id}`;
            await axios.delete(url);
            let updatedEmployees = this.state.employees.filter(employee => employee._id !== employeeToDelete._id)
            this.setState({ employees: updatedEmployees });
        } catch (error) {
            console.log(error.message)
        }
    };

    render() {
        return (
            <>
                <h1>This will show all employee data</h1>
                <Button onClick={() => this.setState({ showDeleteModal: true })}>Delete Employee</Button>
                <Button onClick={() => this.setState({ showUpdateModal: true })}>Update Employee</Button>
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
                <DeleteEmployeeModal
                    show={this.state.showDeleteModal}
                    onHide={this.handleDeleteModalClose}
                    employees={this.state.employees}
                    selectedEmployee={this.state.selectedEmployee}
                    onSelectEmployee={e => this.setState({ selectedEmployee: this.state.employees[e.target.value] })}
                    onDelete={this.deleteEmployee}
                />
                <UpdateEmployeeModal
                    show={this.state.showUpdateModal}
                    onHide={this.handleUpdateModalClose}
                    employees={this.state.employees}
                    selectedEmployee={this.state.selectedEmployee}
                    onSelectEmployee={e => this.setState({ selectedEmployee: this.state.employees[e.target.value] })}
                    onUpdate={updatedInfo => this.updateEmployee({ ...this.state.selectedEmployee, ...updatedInfo })}
                />
            </>
        )
    }
}

export default withAuth0(EmployeeData);