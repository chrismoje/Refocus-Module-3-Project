import { useParams } from "react-router-dom";
//import { posts } from "Postslist";
import posts from "../posts.json";
import { useState } from "react";

const BlogContent = (props) => {
  const routeParams = useParams();
  const post = props.posts.find((post) => post.id == routeParams.id);

  const [comment, setComment] = useState("");
  const [isLiked, setIsLiked] = useState(post.isLiked);

  const addCommentHandler = (e) => {
    const dateToday = new Date();
    const myComment = {
      author: "anonymous",
      date: dateToday.toDateString(),
      text: comment,
    };

    post.comments.push(myComment);

    setComment("");
  };

  const handleLike = () => {
    post.likes += 1;
    post.isLiked = !post.isLiked;
    setIsLiked(!isLiked);
  };

  //return <pre>{JSON.stringify(post, null, 2)}</pre>;
  return (
    <>
      <div className="blogContents-flex">
        <div className="blogContents-image-container">
          <img
            src={post?.image_url}
            alt="blog-image"
            className="blogContents-images"
            id={"image" + post.id}
          />
        </div>

        <div className="blogContents-parent">
          <div className="blogContents-title">{post.title}</div>
          <div className="blogContents-author">Author: {post.author}</div>
          <div className="blogContents-date">Date: {post.date}</div>

          <div className="blogContents-text">{post.text}</div>
          <div className="blogContents-vector">
            <img
              src={"../assets/comments_vector.png"}
              alt="comments_vector"
              width={35}
              height={25}
              className="blogContents-vector"
            />
            <span className="blogContents-length">{post.comments.length}</span>
          </div>

          <div className="blogContents-likes">
            {post.isLiked ? (
              <img
                src={"../assets/heart_vector.png"}
                alt="heart_vector"
                width={50}
                height={30}
                className="blogContents-heart_likes"
              />
            ) : (
              <img
                src={"../assets/heart_vector_outline.png"}
                alt="heart_vector"
                width={30}
                height={20}
                className="blogContents-heart_likes"
                onClick={handleLike}
              />
            )}
            {post.likes}
          </div>

          <div className="blogContents-comment-title">Leave a Comment:</div>

          <div className="blogContents-comment-textarea">
            <textarea onChange={(e) => setComment(e.target.value)}></textarea>
            <button
              className="blogContents-button-submit"
              id="btnSubmit"
              onClick={() => addCommentHandler(post.comments.content)}
            >
              Submit
            </button>
          </div>
          <div className="blogContents-comments">
            {post.comments.map((comments) => (
              <div>
                <br></br>
                <div>Comments: {comments.text}</div>
                <div>Author: {comments.author}</div>
                <div>Date: {comments.date}</div>
                <div>Likes: {comments.likes}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogContent;
