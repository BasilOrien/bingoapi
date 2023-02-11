import app from "./src/app.js";
import { sequelize } from "./src/database/database.js";
import "./src/models/Player.js";
import "./src/models/Data.js";

async function startServer() {
  try {
    await sequelize.sync({ force: true });
    app.listen(3001, console.log("SvOK"));
  } catch (error) {
    throw new Error(error);
  }
}

startServer();
