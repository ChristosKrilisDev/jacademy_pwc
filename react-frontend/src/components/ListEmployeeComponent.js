import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {getEmployees, deleteEmployeeById} from '../services/EmployeeService'

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const history = useHistory();

    const removeEmployee = (id) => {
        deleteEmployeeById(id).then(() => {
            setEmployees(employees.filter(employee => employee.id !== id));
        });
    }

    const viewEmployee = (id) => {
        history.push(`/view-employee/${id}`);
    }

    const editEmployee = (id) => {
        history.push(`/add-employee/${id}`);
    }

    const addEmployee = () => {
        history.push('/add-employee/_add');
    }

    useEffect(() => {
        getEmployees().then((res) => {
            setEmployees(res.data);
        });
    }, []);

    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={addEmployee}>Add Employee</button>
            </div>
            <br />
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email ID</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                            <td>
                                <button style={{ marginLeft: "10px" }} onClick={() => viewEmployee(employee.id)} className="btn btn-secondary">View</button>
                                <button style={{ marginLeft: "10px" }} onClick={() => editEmployee(employee.id)} className="btn btn-info">Update</button>
                                <button style={{ marginLeft: "10px" }} onClick={() => removeEmployee(employee.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListEmployeeComponent;

