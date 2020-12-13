require("dotenv").config();
import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
import { postSchema } from "./model";

const { MONGO_URI } = process.env;

// connect
const connection = mongoose.createConnection(MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
autoIncrement.initialize(connection);

postSchema.plugin(autoIncrement.plugin, {
  model: "post",
  field: "id",
  startAt: 1,
  increment: 1,
});
const Post = connection.model("post", postSchema);

export default {
  getList: () => {
    return Post.find({}, { _id: -1, id: 1, title: 1, text: 1 });
  },
  getPost: (id) => {
    return Post.findOne({ id });
  },
  createPost: (postData) => {
    const post = new Post(postData);
    return post.save();
  },
  updatePost: (id, post) => {
    return Post.findOneAndUpdate({ id: id }, post, { new: true });
  },
  deletePost: (id) => {
    return Post.remove({ id });
  },
};
