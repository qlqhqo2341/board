import { Schema } from "mongoose";

// generate schema
const postSchema = new Schema({
  id: Number,
  title: String,
  text: String,
});

export { postSchema };
