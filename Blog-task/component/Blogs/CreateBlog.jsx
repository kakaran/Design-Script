import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const CreateBlog = () => {
  const [value, setValue] = useState("");
  const [titleImage, setTitleImage] = useState("");
  const [title, setTitle] = useState("");
  const { user } = useAuth0();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("title", title);
      formData.append("titleImage", titleImage);
      formData.append("value", value);
      formData.append("email", user.email);

      const response = await axios.post(
        "https://design-script.vercel.app/api/blog",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      ).data;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="CreateBlogContainer">
        <form className="CreateBlogform" onSubmit={handleSubmit}>
          <div className="BlogInputContainer">
            <label htmlFor="Title">Blog Title</label>
            <input
              type="text"
              placeholder="Title"
              id="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="BlogInputContainer">
            <label htmlFor="title_Image">Blog Image</label>
            <input
              type="file"
              name=""
              id="image"
              onChange={(e) => {
                setTitleImage(e.target.files[0]);
              }}
            />
          </div>

          <ReactQuill theme="snow" value={value} onChange={setValue} />

          <button
            type="submit"
            className="button-7"
            style={{ margin: "10px 0px" }}
          >
            {" "}
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
