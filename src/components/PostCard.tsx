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
    <Link to={`/posts/${post.id}`} className="post-card">
      <img src={post.thumbnailUrl} alt={post.title} className="card-img" />
      <div className="card-content">
        <h3>{post.title}</h3>
        <p className="card-meta">
          By {post.author} on {formattedDate}
        </p>
        <p>{shortDescription}</p>
        <div className="card-actions">
          <span className="btn-link">Đọc thêm</span>
          
          <button onClick={handleDeleteClick} className="btn btn-danger btn-sm">
            Xóa
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;