const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
import router from "./router";

// json enable
app.use(express.json());

// react static files
app.use(express.static("fe/build"));

app.use("/api", router);
// api router
app.get("/api/hello-world", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening on port on ${port}!`)
);
