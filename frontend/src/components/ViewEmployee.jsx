import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ViewEmployee = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((res) => {
            let employeeData = res.data;
            setEmployee(employeeData);
        });
    }, [id]);

    return (
        <div>
            <div className='card col-md-6 offset-md-3'>
                <h3 className='text-center'>View Employee</h3>
                <div className='card-body'>
                    <div className='row'>
                        <label>First Name : {employee.firstName}</label>
                        
                    </div>
                    <div className='row'>
                        <label>Last Name : {employee.lastName}</label>
                        
                    </div>
                    <div className='row'>
                        <label>Email Id : {employee.emailId}</label>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewEmployee;
