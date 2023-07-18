import React, { useEffect, useState } from 'react';
import { getAllEmployees, removeEmployee, updateEmployee } from '../services/employee';
import './HomePage.scss'; // Import the SCSS file
import AddNewEmployee from '../components/addNewEmployee/AddNewEmployee';
import EmployeeInformation from '../components/employeeInformation/EmployeeInformation';
import UpdateModal from '../components/updateModal/UpdateModal';

export default function HomePage() {
    const [employees, setEmployees] = useState([]);
    
    const [selectedEmployee, setSelectedEmployee] = useState(null); // Step 1: State for selected employee
  
    useEffect(() => {
      GetAllEmployees();
    }, []);

    function GetAllEmployees(){
      getAllEmployees()
        .then((res) => {
          setEmployees(res);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    

    const handleUpdateClick = (employeeId) => {
      // Step 2: Set the selectedEmployee state
      const employeeToUpdate = employees.find((employee) => employee.ID === employeeId);
      setSelectedEmployee(employeeToUpdate);
    };

    const handleUpdateEmployee = () => {
      if (selectedEmployee) {
        updateEmployee(selectedEmployee)
          .then((res) => {
            GetAllEmployees();
            setSelectedEmployee(null);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    };

    const handleDeleteClick = (employeeId) => {
        setSelectedEmployee(null);
      removeEmployee(employeeId)
        .then((res) => {
          const updatedEmployees = employees.filter((employee) => employee.ID !== employeeId);
          setEmployees(updatedEmployees);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

  return (
    <div>
     <AddNewEmployee GetAllEmployees={GetAllEmployees}/>
      <EmployeeInformation handleDeleteClick={handleDeleteClick} handleUpdateClick={handleUpdateClick} employees = {employees}/>
      <div>
        {selectedEmployee && (
            <UpdateModal 
            selectedEmployee = {selectedEmployee}
            setSelectedEmployee = {setSelectedEmployee} 
            handleUpdateEmployee = {handleUpdateEmployee} />
        )}

      </div>
    </div>
    
  );
}
