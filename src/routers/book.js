import express from "express";
import { create, findAll, update, findOne, remove } from "../controllers/bookController.js";
const bookRouter = express.Router();

bookRouter.route("/")
    .get(findAll)
    .post(create);

bookRouter.route("/:id")
    .get(findOne)
    .put(update)
    .delete(remove);

export { bookRouter };

