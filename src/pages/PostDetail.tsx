import React from 'react'; 
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Post } from '../types/Post';

interface PostDetailProps {
  posts: Post[];
  onDelete: (id: string) => void;
}

const PostDetail: React.FC<PostDetailProps> = ({ posts, onDelete }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <h2>Không tìm thấy bài viết</h2>;
  }

  const handleDelete = () => {
    if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
      onDelete(post.id);
      navigate('/');
    }
  };

  const formattedDate = new Date(post.createdAt).toLocaleDateString('vi-VN');

  return (
    <div className="post-detail">
      <h1 className="detail-title">{post.title}</h1>
      <p className="detail-meta">
        By {post.author} on {formattedDate} | Thể loại: {post.category}
      </p>
      <img src={post.thumbnailUrl} alt={post.title} className="detail-img" />

      <div className="detail-content">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="detail-actions">
        <button onClick={() => navigate('/')} className="btn">
          Quay lại trang chủ
        </button>
        <Link to={`/posts/edit/${post.id}`} className="btn btn-primary">
          Chỉnh sửa
        </Link>
        <button onClick={handleDelete} className="btn btn-danger">
          Xóa bài viết
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
