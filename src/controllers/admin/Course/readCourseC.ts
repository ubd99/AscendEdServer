import { Request, Response } from "express";
import { getCourses } from "../../../DB/getCourseDB";

const getPublicCourses = async (req: Request, res: Response) => {
  try {
    console.log('getPublicCourses hit')
    const courses = await getCourses();
    const limit = parseInt(req.query.limit as string);
    console.log("from getPublicCourses: limit is ", limit)
    if (limit === 0) {
      res.json({
        courses: courses
      });
    } else {
      let sliced = courses.slice(0, limit);
      res.json({
        courses: sliced
      });
    }
  } catch (e) {
    console.log("error in getPublicCourses: ", e);
  }
};

export { getPublicCourses };
