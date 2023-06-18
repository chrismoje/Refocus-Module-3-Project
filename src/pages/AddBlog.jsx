import { PostImage } from "../components/PostImage";
import postsData from "../posts.json";

import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const AddBlog = (props) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const addPostHandler = (e) => {
    e.preventDefault();

    const newPost = {
      title: title,
      author: author,
      date: date,
      content: content,
      id: uuidv4(),
      image_url: image,
      comments: [],
      likes: 0,
      isLiked: false,
    };

    window.alert(
      "Confirm that you will add " +
        newPost.title +
        " Authored by: " +
        newPost.author +
        " Date of Submission: " +
        newPost.date +
        " Blog Content: " +
        newPost.content
    );

    props.setPosts((prev) => [...prev, newPost]);
    resetInputFields();
    navigate("/");
  };

  const resetInputFields = () => {
    setTitle("");
    setAuthor("");
    setDate("");
    setContent("");
  };

  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const changeAuthorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const changeDateHandler = (e) => {
    setDate(e.target.value);
  };

  const changeContentHandler = (e) => {
    setContent(e.target.value);
  };

  const handleImageSuccess = (imageUrl) => {
    setImage(imageUrl);
    // console.log(imageUrl);
  };
  return (
    <div className="new-blog-container">
      <div className="addBlog-add-image">
        <PostImage addImageSuccessful={handleImageSuccess} />
      </div>
      <form onSubmit={addPostHandler} className="new-blog">
        <h1>You can contribute to my blog by adding your ideas here.</h1>
        <div>
          <input
            required
            type="text"
            className="addBlog-input-title"
            placeholder="title"
            value={title}
            onChange={changeTitleHandler}
          ></input>
        </div>
        <div>
          <input
            className="addBlog-input-author"
            placeholder="author"
            value={author}
            onChange={changeAuthorHandler}
          ></input>
        </div>
        <div>
          <input
            type="date"
            className="addBlog-input-date"
            placeholder="date"
            value={date}
            onChange={changeDateHandler}
          ></input>
        </div>
        <div className="addBlog-content">
          <textarea
            id="addBlog-textarea"
            placeholder="blog content here"
            value={content}
            onChange={changeContentHandler}
          ></textarea>
        </div>
        <button className="addBlog-submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AddBlog;
