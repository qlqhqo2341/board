import { Router } from "express";
import repository from "./repository";
import { generateHandler } from "./exceptionHandler";

const router = Router();
router.get("/post/list", async (req, res) => {
  const errhandler = generateHandler("error with get post list", 500, req, res);
  repository
    .getList()
    .exec()
    .then((doc) => res.send(doc))
    .catch(errhandler);
});
router.get("/post/:id", async (req, res) => {
  const errHandler = generateHandler("error with get post", 500, req, res);
  repository
    .getPost(req.params.id)
    .exec()
    .then((doc) => res.send(doc))
    .catch(errHandler);
});
router.post("/post", (req, res, next) => {
  const errHandler = generateHandler("error with create post ", 500, req, res);
  repository
    .createPost(req.body)
    .then((doc) => res.send(doc))
    .catch(errHandler);
});
router.post("/post/:id", (req, res, next) => {
  const errHandler = generateHandler("error with update post", 500, req, res);
  repository
    .updatePost(req.params.id, req.body)
    .exec()
    .then((doc) => res.send(doc))
    .catch(errHandler);
});
router.delete("/post/:id", (req, res, next) => {
  const errHandler = generateHandler("error with delete post", 500, req, res);
  repository
    .deletePost(req.params.id)
    .exec()
    .then((doc) => res.send(doc))
    .catch(errHandler);
});

export default router;
