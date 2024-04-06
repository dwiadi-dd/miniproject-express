import express from "express";
import router from "./router/index";
import { logger } from "./modules/middleware";

const app = express();
app.use(express.json());
app.use(logger);
app.use("/", router);

export default app;
