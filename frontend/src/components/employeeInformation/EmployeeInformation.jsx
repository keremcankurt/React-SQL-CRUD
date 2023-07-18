import React from 'react'
import './EmployeeInformation.scss'

export default function EmployeeInformation({employees, handleDeleteClick, handleUpdateClick}) {
  return (
    <div>
        <h1>Employee Information</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.ID}>
              <td>{employee.Name}</td>
              <td>{employee.Surname}</td>
              <td>{employee.Role}</td>
              <td>{employee.Salary}</td>
              <td className='actions'>
                <button className='update' onClick={() => handleUpdateClick(employee.ID)}>Update</button>
                <button className='delete' onClick={() => handleDeleteClick(employee.ID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
