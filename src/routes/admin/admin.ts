import express from 'express';
import { adminData } from '../../controllers/admin/adminData';
import { courseRouter } from './Course';

const adminRouter: express.Router = express.Router();

adminRouter.get('/dashboard', adminData);

adminRouter.use('/courses', courseRouter);

export { adminRouter }
