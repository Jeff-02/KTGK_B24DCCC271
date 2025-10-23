import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import { Post } from './types/Post';
import { INITIAL_POSTS } from './data/initialPosts';
import MainLayout from './layouts/MainLayout';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';

function App() {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);

  const handleDelete = (id: string) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={<PostList posts={posts} onDelete={handleDelete} />}
        />
        <Route
          path="/posts"
          element={<PostList posts={posts} onDelete={handleDelete} />}
        />
        <Route
          path="/create"
          element={<CreatePost setPosts={setPosts} />}
        />
        <Route
          path="/posts/:id"
          element={<PostDetail posts={posts} onDelete={handleDelete} />}
        />
        <Route
          path="/posts/edit/:id"
          element={<EditPost posts={posts} setPosts={setPosts} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
