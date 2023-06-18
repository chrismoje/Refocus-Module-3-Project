import { Link } from "react-router-dom";

export const PostsList = ({ posts }) => {
  // TODO: the code below is just for demo,
  // so feel free to delete it and write your own.
  return (
    <>
      <h1>Here my latest Blogs...Enjoy reading...</h1>
      <div className="blog-parent">
        {posts.map((post) => (
          <div className="blog-container" key={post.id}>
            <Link to={`posts/${post.id}`}>
              <img
                src={post.image_url}
                alt="blog-image"
                width={400}
                height={200}
                className="images"
                id={post.image_url}
              />

              <div className="blog-title">{post.title}</div>
              <div className="blog-contents">{post.text} </div>
            </Link>
            <div className="blog-line"></div>
            <div className="blog-auto-layout">
              <div className="blog-date">{post.date}</div>
              <div className="blog-author">{post.author}</div>
              <div className="blog-comments-vector">
                <img
                  src={"../assets/comments_vector.png"}
                  alt="comments_vector"
                  width={35}
                  height={25}
                  className="blogContents-comments-vector"
                />
                <span className="blogContents-comments-length">
                  {post.comments.length}
                </span>
              </div>
              <div className="blog-likes-vector">
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
                  />
                )}
                <span className="blogContents-likes">{post.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
