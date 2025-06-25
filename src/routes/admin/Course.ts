import express from "express";
import { CourseCreate } from "../../controllers/admin/Course/createCourseC";
import { getPublicCourses } from "../../controllers/admin/Course/readCourseC";

const courseRouter: express.Router = express.Router();

courseRouter.post("/new_course", CourseCreate);

courseRouter.get('/publicCourses', getPublicCourses)

export { courseRouter };