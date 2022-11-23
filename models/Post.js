const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
   title: {
      type: String,
      require: [true, "Please add a title"],
      trim: true,
      maxLength: [40, "Title cannot be more than 40 characters"],
   },
   content: {
      type: String,
      require: true,
   },
});
module.exports = mongoose.models.Post || mongoose.model("Post", PostSchema);
