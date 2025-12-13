import { Router } from "express";
import { getIndex } from "../controllers/indexController.js";
import { getForm, postForm } from "../controllers/formController.js";
import { getMessage } from "../controllers/messageController.js";

const indexRouter = Router();

indexRouter.get("/", getIndex);
indexRouter.get("/new", getForm);
indexRouter.post("/new", postForm);
indexRouter.get("/message/:id", getMessage);

export default indexRouter;
