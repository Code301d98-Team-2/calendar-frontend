import React, { Component } from "react";
import { Modal, Form } from "react-bootstrap";
import EmployeeForm from "./EmployeeForm";

class UpdateEmployeeModal extends Component {
    render() {
        const { show, onHide, employees, selectedEmployee, onSelectEmployee, onUpdate } = this.props;
        return (
            <Modal show={show} onHide={onHide} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Modify Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Select onChange={onSelectEmployee} value={employees.indexOf(selectedEmployee)}>
                        <option>Select Employee</option>
                        {employees.map((employee, index) => (
                            <option key={index} value={index}>{employee.firstName} {employee.lastName}</option>
                        ))}
                    </Form.Select>
                    {selectedEmployee && <EmployeeForm employee={selectedEmployee} onSave={onUpdate} />}
                </Modal.Body>
            </Modal>
        );
    }
}

export default UpdateEmployeeModal;