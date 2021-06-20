import "./App.css";
import db from "./firebase.config";
import React, { useState, useEffect } from "react";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const response = db.collection("Blogs");
    response.get().then((data) => {
      data.docs.forEach((item) => {
        setBlogs(item.data());
      });
    });
  }, []);

  return (
    <div className="App">
      {blogs &&
        blogs.length !== 0 &&
        blogs.map((blog) => {
          return (
            <div
              className="blog-container"
              style={{ width: 500 + "px", textAlign: "center" }}
            >
              <h4>{blog.title}</h4>
              <h5>{blog.posted_by}</h5>
              <p>{blog.body}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
