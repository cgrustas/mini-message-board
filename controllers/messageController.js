import { getMessageById } from "../db/queries.js";
import CustomNotFoundError from "../errors/CustomNotFoundError.js";

export async function getMessage(req, res) {
  const message = await getMessageById(req.params.id);
  if (!message) {
    throw new CustomNotFoundError("Message not found");
  }

  res.render("message", { message });
}
