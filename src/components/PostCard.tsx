import { Link } from 'react-router-dom';
import { Post } from '../types/Post';

interface PostCardProps {
  post: Post;
  onDelete: (id: string) => void;
}

const PostCard = ({ post, onDelete }: PostCardProps) => {
  const shortDescription = post.content.substring(0, 100) + '...';
  const formattedDate = new Date(post.createdAt).toLocaleDateString('vi-VN');

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
      onDelete(post.id);
    }
  };

  return (
    <div className="post-card">
      <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={post.thumbnailUrl} alt={post.title} className="card-img" />
        <div className="card-content">
          <h3>{post.title}</h3>
          <p className="card-meta">
            By {post.author} on {formattedDate}
          </p>
          <p>{shortDescription}</p>
        </div>
      </Link>
      <div className="card-actions">
        <Link to={`/posts/${post.id}`} className="btn-link">
          Đọc thêm
        </Link>
        <button onClick={handleDeleteClick} className="btn btn-danger btn-sm">
          Xóa
        </button>
      </div>
    </div>
  );
};

export default PostCard;
