import { useEffect, useState } from "react";
import axios from "axios";
import "./Blog.css";

const HomeBlogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    const AllBlogsMethod = async () => {
      try {
        const Data = await axios.get(
          "https://design-script.vercel.app/api/blog"
        );
        if (Data) {
          console.log(Data);
          setAllBlogs(Data.data.blogs);
        }
      } catch (error) {
        console.log(error);
      }
    };
    AllBlogsMethod();
  }, []);

  console.log(allBlogs);

  return (
    <>
      {allBlogs?.map((blog, index) => {
        return (
          <div className="HomeBlogContainer" key={index}>
            <img src={blog.image} alt="" />
            <h2>{blog.title}</h2>
            {/* <p>Date</p> */}
          </div>
        );
      })}
    </>
  );
};

export default HomeBlogs;
