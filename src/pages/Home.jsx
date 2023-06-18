import { PostsList } from "../components/PostsList";
// I commented this as we will take the posts from App.jsx instead
// import posts from "../posts.json";
import "../App.css";

function Home(props) {
  return (
    <div>
      <PostsList posts={props.posts} />
    </div>
  );
}

export default Home;
