import express from 'express';
import config from './config.js';
import employeesRoutes from './routes/employee.js'
import cors from 'cors';
const app = express();

app.set('port', config.port)

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(employeesRoutes)

export default app