import React from 'react'
import './UpdateModal.scss'

export default function UpdateModal({selectedEmployee, setSelectedEmployee, handleUpdateEmployee}) {
  return (
    <div className="update-modal">
    <h2>Update Employee</h2>
    <button className="close-btn" onClick={() => setSelectedEmployee(null)}>
      X
    </button>
    <div>
      <input
        type="text"
        name="name"
        value={selectedEmployee.Name}
        onChange={(e) => setSelectedEmployee({ ...selectedEmployee, Name: e.target.value })}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="surname"
        value={selectedEmployee.Surname}
        onChange={(e) => setSelectedEmployee({ ...selectedEmployee, Surname: e.target.value })}
        placeholder="Surname"
        required
      />
      <input
        type="text"
        name="role"
        value={selectedEmployee.Role}
        onChange={(e) => setSelectedEmployee({ ...selectedEmployee, Role: e.target.value })}
        placeholder="Role"
        required
      />
      <input
        type="number"
        name="salary"
        value={selectedEmployee.Salary}
        onChange={(e) => setSelectedEmployee({ ...selectedEmployee, Salary: e.target.value })}
        placeholder="Salary"
        required
      />
      <button onClick={handleUpdateEmployee}>Update</button>
    </div>
  </div>
  )
}
