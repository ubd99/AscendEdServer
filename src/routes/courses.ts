import express from 'express';
import { getPublicCourses } from '../controllers/admin/Course/readCourseC';

const PCourseRouter: express.Router = express.Router();

PCourseRouter.get('/publicCourses', getPublicCourses)

export {PCourseRouter}