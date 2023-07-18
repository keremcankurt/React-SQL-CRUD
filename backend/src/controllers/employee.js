import {getConnection, sql} from '../database/connection.js'
import query from '../database/query.js'

export const getEmployees = async(req,res) => {
    try {
        const pool = await getConnection();
    const result = await pool.request().query(query.getAllEmployees)
    res.json(result.recordset);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}

export const addNewEmployee = async(req, res) => {

    const {name, surname, role, salary} = req.body
    if(name == null || surname == null || role == null || salary == null){
        return res.status(400).json({message: "Please Fill all fields" })
    }
    try {
        const pool = await getConnection()
        await pool.request()
        .input("name", sql.NVarChar, name)
        .input("surname", sql.NVarChar, surname)
        .input("role", sql.NVarChar, role)
        .input("salary", sql.Int, salary)
        .query(query.addNewEmployee)

        res.json({message: "New employee added"})
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}

export const removeEmployee = async(req, res) => {

    const {id} = req.params
    try {
        const pool = await getConnection()
        await pool.request()
        .input("id", sql.Int, id)
        .query(query.removeEmployee)
        res.json({message: "Employee removed successfully"})
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}

export const updateEmployeeByID = async(req, res) => {
    const {id} = req.params
    
    console.log(req.body)
    const {Name, Surname, Role, Salary} = req.body
    if(Name == null || Surname == null || Role == null || Salary == null){
        return res.status(400).json({message: "Please Fill all fields" })
    }
    try {
        const pool = await getConnection()
        await pool.request()
        .input("name", sql.NVarChar, Name)
        .input("surname", sql.NVarChar, Surname)
        .input("role", sql.NVarChar, Role)
        .input("salary", sql.Int, Salary)
        .input("id", sql.Int, id)
        .query(query.updateEmployeeById)

        res.json({message: "Employee updated successfully"})
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}