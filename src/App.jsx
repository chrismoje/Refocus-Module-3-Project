import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  useParams,
} from "react-router-dom";

import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import BlogContent from "./components/BlogContent";
import Reviews from "./pages/Reviews";
import Login from "./pages/Login";
import RouteLayout from "./layouts/RouteLayout";
import postsData from "./posts.json"; // Take the posts data

import { useState } from "react";

function App() {
  const [posts, setPosts] = useState(postsData); // ito yung ibabato natin both sa home.jsx at addblog.jsx

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />}>
        {
          // dinagdag ko ung posts useState sa Home
          //at yung setPosts sa addBlog
        }
        <Route index element={<Home posts={posts} />} />
        <Route path="AddBlog" element={<AddBlog setPosts={setPosts} />} />
        <Route path="Reviews" element={<Reviews />} />
        <Route path="Login" element={<Login />} />

        <Route path="/posts/:id" element={<BlogContent posts={posts} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
