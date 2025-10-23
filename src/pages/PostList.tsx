import { useState } from 'react';
import { Post } from '../types/Post';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';

interface PostListProps {
  posts: Post[];
  onDelete: (id: string) => void;
}

const PostList = ({ posts, onDelete }: PostListProps) => {
  const [filter, setFilter] = useState('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="post-list-page">
      <div className="list-header">
        <Link to="/create" className="btn btn-primary">
          Viết bài mới
        </Link>
        <p>Tổng số: {filteredPosts.length} bài viết</p>
      </div>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Lọc theo tiêu đề bài viết..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-input"
        />
      </div>

      <div className="post-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} onDelete={onDelete} />
          ))
        ) : (
          <p>Không tìm thấy bài viết nào.</p>
        )}
      </div>
    </div>
  );
};

export default PostList;