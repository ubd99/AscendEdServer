import { DataTypes } from "sequelize";
import { sequelise } from "../DB/postgres";
import { UUIDV4 } from "sequelize";

const CoursePublic = sequelise.define(
  "PublicCourse",
  {
    id: {
      type: DataTypes.UUID,
      unique: true,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "PublicCourses",
  }
);

const Chapter = sequelise.define(
  "chapter",
  {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey:true,
        unique: true
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    courseId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'PublicCourses',
            key: 'id',
        }
    },
  },
  {
    tableName: "chapters",
  }
);

export { CoursePublic, Chapter };
