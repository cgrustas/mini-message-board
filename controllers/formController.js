import { body, validationResult } from "express-validator";
import { createUserPost } from "../db/queries.js";

const validateMessage = [
  body("messageText").trim().notEmpty().withMessage("Message cannot be empty"),
  body("messageUser").trim().notEmpty().withMessage("Username cannot be empty"),
];

export function getForm(req, res) {
  res.render("form");
}

export const postForm = [
  validateMessage,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        errors: errors.array(),
      });
    }

    await createUserPost(req.body.messageText, req.body.messageUser);
    res.redirect("/");
  },
];
