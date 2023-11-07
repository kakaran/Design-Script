const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    
  },
  BlogDetail: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
