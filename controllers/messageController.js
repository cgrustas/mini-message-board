import messages from "../db.js";
import CustomNotFoundError from "../errors/CustomNotFoundError.js";

export function getMessage(req, res) {
  const index = Number(req.params.id);

  if (index < 0 || index >= messages.length) {
    throw new CustomNotFoundError("Message not found");
  }

  res.render("message", { message: messages[index] });
}
