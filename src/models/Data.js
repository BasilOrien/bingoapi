import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Data = sequelize.define("Data", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  money: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});
