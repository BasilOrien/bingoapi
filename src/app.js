import express, { json } from "express";
import router from "./routes/index.js";

const app = express();

//middlewares
app.use(json());

//routes
app.use("/", router);

export default app;
