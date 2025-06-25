import { Request, Response } from "express";
import { createCourseDB } from "../../../DB/createCourseDB";
import { Course } from "../../../interfaces/course";

const CourseCreate = async (req: Request, res: Response) => {
  try {
    const course: Course = {
        name: req.body.name,
        description: req.body.description,
    }
    await createCourseDB(course)
    res.status(200);
  } catch (e) {
    console.log("Error in CourseCreate: ", e);
    res.status(401);
  }
};

export { CourseCreate };
