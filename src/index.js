const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
import router from "./router";
import path from "path";

// json enable
app.use(express.json());

app.use("/api", router);
// api router
app.get("/api/hello-world", (req, res) => res.send("Hello World!"));

// react static files
app.use(express.static("fe/build"));
app.get("*", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "..", "fe", "build", "index.html"));
});

app.listen(port, () =>
  console.log(`Example app listening on port on ${port}!`)
);
