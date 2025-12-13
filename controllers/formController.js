import messages from "../db.js";

export function getForm(req, res) {
  res.render("form");
}

export function postForm(req, res) {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
}
