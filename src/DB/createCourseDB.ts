import { Course } from "../interfaces/course";
import { CoursePublic } from "../Models/coursePublic";

const createCourseDB = async (course: Course) => {
  try {
    await CoursePublic.create({
      name: course.name,
      description: course.description,
      rating: course.rating,
    });
    console.log("from createCourseDB: created Store ", course.name, "successfully.")
  } catch (e) {
    console.log('error in createCourseDB: ', e);
  }
};

export { createCourseDB };
