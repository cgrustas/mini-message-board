import { Router } from "express";
import { getIndex } from "../controllers/indexController.js";
import { getForm, postForm } from "../controllers/formController.js";

const indexRouter = Router();

indexRouter.get("/", getIndex);
indexRouter.get("/new", getForm);
indexRouter.post("/new", postForm);

export default indexRouter;
