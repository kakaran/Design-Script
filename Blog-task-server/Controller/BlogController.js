const Blog = require("../Model/Blog");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

const BlogCreate = async (req, res) => {
  try {
    const { email, title, value } = req.fields;
    const { titleImage } = req.files;
    console.log(titleImage.path);

    if (!email || !title || !titleImage || !value) {
      return res
        .status(400)
        .send({ message: "All fileds are required", status: false });
    }

    const newBlog = await new Blog({
      user: email,
      title,
      BlogDetail: value,
    });

    const CloudinaryResponse = await cloudinary.uploader.upload(
      titleImage.path,
      {
        resource_type: "auto",
        format: "webp",
      }
    );

    if (CloudinaryResponse) {
      newBlog.image = CloudinaryResponse.url;
      await newBlog.save();
    }

    return res.status(200).send({ message: "Blog created", status: true });
  } catch (error) {
    console.log(error);
  }
};

const ShowAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    if (!blogs)
      return res.status(400).send({ message: "No blogs found", status: false });
    return res.status(200).send({ blogs, status: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { BlogCreate, ShowAllBlogs };
