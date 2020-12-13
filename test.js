const mongoose = require("mongoose");
const schema = new mongoose.Schema({ name: "string", size: "string" });
const Tank = mongoose.model("Tank", schema);

mongoose.connect("mongodb://localhost/gettingstarted", {
  useNewUrlParser: true,
});

const small = new Tank({ size: "small" });
small.save(function (err) {
  if (err) return handleError(err);
  // saved!
});

// or

Tank.create({ size: "small" }, function (err, small) {
  if (err) return handleError(err);
  // saved!
});

// or, for inserting large batches of documents
Tank.insertMany([{ size: "small" }], function (err) {});

Tank.find({})
  .exec()
  .then((data) => console.log(data));
