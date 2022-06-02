import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import './comp.css'


const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api", {
        title,
        author,
        description,
      })
      .then((res) => {
        console.log(res);
        setTitle("");
        setAuthor("");
        setDescription("");
      });
  }
  // setTitle(e.target.title.value);
  // setAuthor(e.target.author.value);
  // setDescription(e.target.description.value);
  // setIsLoading(true);
  // console.log(title, author, description);
  // axios.post('http://localhost:3000/api', {
  //     title,
  //     author,
  //     description
  // }).then(res => {
  //     console.log(res);
  //     setIsLoading(false);
  // })

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Create Book</h1>
            <form>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label>Author</label>
                <input
                  type="text"
                  className="form-control"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBooks;
