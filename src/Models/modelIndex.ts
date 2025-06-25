import { sequelise } from "../DB/postgres";
import { userModel } from "./user";
import { CoursePublic, Chapter } from "./coursePublic";

CoursePublic.hasMany(Chapter, {
  foreignKey: "id",
});

Chapter.belongsTo(CoursePublic, {
    foreignKey: "id"
});

(async () => {
  console.log("syncing sequelize ORM with db");
  await sequelise.sync();
})();

export { CoursePublic, Chapter, userModel };
