import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const CreateEmployee = () => {
  const navigate = useNavigate();
  //step 2
  const { id } = useParams();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [loading, setLoading] = useState(false);


  //step 3
  useEffect(() => {
    //step 4
    if (id !== "_add") {
      setLoading(true);
      EmployeeService.getEmployeeById(id)
        .then((res) => {
          let employee = res.data;
          setFirstName(employee.firstName);
          setLastName(employee.lastName);
          setEmailId(employee.emailId);
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  const SaveOrUpdateEmployee = (e) => {
    e.preventDefault();
    let employee = { firstName, lastName, emailId };

    //step 5
    if (id === "_add") {
      EmployeeService.createEmployee(employee)
        .then((res) => navigate('/employees'))
        .catch((error) => console.error("Error creating employee:", error));
    } else {
      EmployeeService.updateEmployee(employee, id)
        .then((res) => navigate('/employees'))
        .catch((error) => console.error("Error updating employee:", error));
    }
  };

  const cancel = () => {
    navigate('/employees');
};

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            {/* step 6 */}
            <h3>{id === "_add" ? "Add Employee" : "Update Employee"}</h3>
            <div className='card-body'>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <form>
                  <div className='form-group'>
                    <label>First Name</label>
                    <input
                      className='form-control'
                      placeholder='First Name'
                      name='firstName'
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Last Name</label>
                    <input
                      className='form-control'
                      placeholder='Last Name'
                      name='lastName'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Email</label>
                    <input
                      className='form-control'
                      placeholder='Email'
                      name='emailId'
                      value={emailId}
                      onChange={(e) => setEmailId(e.target.value)}
                    />
                  </div>

                    <button className="btn btn-success" onClick={SaveOrUpdateEmployee}>Save</button>
                    <button
                        className="btn btn-danger"
                        onClick={cancel}
                        style={{ marginLeft: '10px' }}
                    >
                        Cancel
                    </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
