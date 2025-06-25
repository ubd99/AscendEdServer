import { CoursePublic } from "../Models/coursePublic";

const getCourses = async () => {
  try {
    const publicCourses = await CoursePublic.findAll();
    return publicCourses;
  } catch (e) {
    console.log("Error in getCourses: ", e);
    return []
  }
};

export { getCourses };
