import {Router} from 'express';
import { addNewEmployee, getEmployees, removeEmployee, updateEmployeeByID } from '../controllers/employee.js';

const router = Router()

router.get("/employees", getEmployees);
router.post("/newemployee", addNewEmployee);
router.delete("/removeemployee/:id", removeEmployee);
router.put("/updateemployee/:id", updateEmployeeByID);


export default router