import { getMessages } from "../db/queries.js";

export async function getIndex(req, res) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: await getMessages(),
  });
}
