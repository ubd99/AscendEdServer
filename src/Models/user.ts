import { DataTypes } from "sequelize"
import { sequelise } from "../DB/postgres"

const userModel = sequelise.define(
    'User',
    {
      uid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      f_name : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      l_name : {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isadmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
      tableName: 'users',
      timestamps: true,
    }
  )

  export { userModel }