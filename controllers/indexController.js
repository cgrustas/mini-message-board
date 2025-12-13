import messages from "../db.js";

export function getIndex(req, res) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
}
