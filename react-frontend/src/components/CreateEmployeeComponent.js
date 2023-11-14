import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {
    createEmployee,
    getEmployeeById,
    updateEmployeeById
} from '../services/EmployeeService';

const CreateEmployeeComponent = () => {
    const {id} = useParams();
    const history = useHistory();

    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
    });

    const isAddMode = id === '_add';

    useEffect(() => {
        if (!isAddMode) {
            getEmployeeById(id).then((res) => {
                const fetchedEmployee = res.data;
                setEmployee(fetchedEmployee);
            });
        }
    }, [id, isAddMode]);

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const {firstName, lastName, emailId} = employee;

        if (isAddMode) {
            createEmployee({firstName, lastName, emailId}).then(() => {
                history.push('/employees');
            });
        } else {
            updateEmployeeById(employee, id).then(() => {
                history.push('/employees');
            });
        }
    };
    
    function IsValidPattern(input, pattern) {
        return pattern.test(input);
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        // Check if the input is valid (only alphabetic characters)
        //TODO : mails may use numerics and underscore
        if(e.target.name === "firstName" || e.target.name === "lastName") 
        {
            const textOnlyPattern = /^[A-Za-z]*$/;
            if(!IsValidPattern(value, textOnlyPattern)) return;
        }
        else if(e.target.name === "emailId")
        {
            const emailPattern = /^([A-Za-z0-9_.-]*@)?([A-Za-z0-9.-]*\.)?([A-Za-z_]+[A-Za-z0-9_]*)?$/;
            if(!IsValidPattern(value, emailPattern)) return;
        }
        
        setEmployee({...employee, [name]: value});
    };

    const cancel = () => {
        history.push('/employees');
    };

    const getTitle = () => {
        return isAddMode ? <h3 className="mt-3 text-center">Add Employee</h3> :
            <h3 className="mt-3 text-center">Update Employee</h3>;
    };

    return (
        <div>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {getTitle()}
                        <div className="card-body">
                            <form onSubmit={saveOrUpdateEmployee}>
                                <div className="form-group">
                                    <label>First Name :</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        className="form-control"
                                        required
                                        value={employee.firstName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        className="form-control"
                                        required
                                        value={employee.lastName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email Address:</label>
                                    <input
                                        type="email"
                                        name="emailId"
                                        placeholder="sample@email.com"
                                        className="form-control"
                                        required
                                        value={employee.emailId}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <input type="submit"
                                       className="btn btn-success"
                                       value="Save"
                                />
                                <button
                                    className="btn btn-danger"
                                    onClick={cancel}
                                    style={{marginLeft: "10px"}}
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateEmployeeComponent;
