import { useParams, useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { Post } from '../types/Post';

interface EditPostProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const EditPost = ({ posts, setPosts }: EditPostProps) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const postToEdit = posts.find((p) => p.id === id);

  if (!postToEdit) {
    return <h2>Không tìm thấy bài viết để chỉnh sửa</h2>;
  }

  const handleUpdate = (updatedPostData: Omit<Post, 'id' | 'createdAt'>) => {
    const updatedPost: Post = {
      ...updatedPostData,
      id: postToEdit.id,
      createdAt: postToEdit.createdAt,
    };

    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
    alert('Cập nhật thành công!');
    navigate(`/posts/${updatedPost.id}`);
  };

  return (
    <PostForm
      onSubmit={handleUpdate}
      initialData={postToEdit}
      mode="edit"
    />
  );
};

export default EditPost;
