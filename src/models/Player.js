import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Data } from "./Data.js";

export const Player = sequelize.define("Players", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  surname: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.INTEGER,
  },
});

Player.hasOne(Data, {
  foreignKey: "playerId",
  sourceKey: "id",
});

Data.belongsTo(Player, {
  foreignKey: "playerId",
  targetId: "id",
});
