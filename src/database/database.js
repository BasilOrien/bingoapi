import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("bingo2", "postgres", "Aezakmi11", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
