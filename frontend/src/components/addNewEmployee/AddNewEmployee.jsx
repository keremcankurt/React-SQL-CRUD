import React, { useState } from 'react'
import { addNewEmployee,  } from '../../services/employee';
import './AddNewEmployee.scss'

export default function AddNewEmployee({GetAllEmployees}) {
    const [newEmployee, setNewEmployee] = useState({
        name: '',
        surname: '',
        role: '',
        salary: ''
      });
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
      };
  
      const handleAddEmployee = () => {
        if (newEmployee.name && newEmployee.surname && newEmployee.role && newEmployee.salary) {
          addNewEmployee(newEmployee)
          .then((res) => {
              GetAllEmployees();
          })
          .catch((err) => {
            console.log(err.message);
          });
          
          setNewEmployee({
            name: '',
            surname: '',
            role: '',
            salary: ''
          });
        }
      };
  return (
    <div className="new-employee">
        <h2>Add New Employee</h2>
        <div>
          <input
            type="text"
            name="name"
            value={newEmployee.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="surname"
            value={newEmployee.surname}
            onChange={handleInputChange}
            placeholder="Surname"
            required
          />
          <input
            type="text"
            name="role"
            value={newEmployee.role}
            onChange={handleInputChange}
            placeholder="Role"
            required
          />
          <input
            type="number"
            name="salary"
            value={newEmployee.salary}
            onChange={handleInputChange}
            placeholder="Salary"
            required
          />
          <button onClick={handleAddEmployee}>Add Employee</button>
        </div>
      </div>
  )
}
