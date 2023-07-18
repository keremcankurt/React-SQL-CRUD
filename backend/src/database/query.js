export default {
    getAllEmployees: "SELECT * from Employees",
    addNewEmployee: 'INSERT INTO Employees (name, surname, role, salary) VALUES (@name, @surname, @role, @salary)',
    removeEmployee: 'DELETE FROM Employees WHERE ID = @id',
    updateEmployeeById: 'UPDATE Employees SET Name = @name, Surname = @surname, Salary = @salary, Role = @role WHERE ID = @id',
    getEmployeeById: "SELECT * FROM employees WHERE id = @employeeId;"
}