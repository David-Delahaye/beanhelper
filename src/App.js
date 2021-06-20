import "./App.css";
import db from "./firebase.config";
import React, { useState, useEffect } from "react";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    fetch(
      "https://us-central1-beanhelper-c8b6a.cloudfunctions.net/randomNumber"
    ).then((number) => {
      setNumber(number);
    });

    const response = db.collection("Blogs");
    response.get().then((data) => {
      data.docs.forEach((item) => {
        setBlogs([item.data()]);
      });
    });
  }, []);

  if (blogs.length === 0) {
    return "HEY";
  }

  return (
    <div className="App">
      <h2>{number}</h2>
      {blogs.map((blog) => {
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
