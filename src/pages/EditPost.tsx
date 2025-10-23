
import React from 'react'; //
import { useParams, useNavigate } from 'react-router-dom'; //
import PostForm from '../components/PostForm';
import { Post } from '../types/Post';

interface EditPostProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const EditPost: React.FC<EditPostProps> = ({ posts, setPosts }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); //
  const postToEdit = posts.find((p) => p.id === id);

  if (!postToEdit) {
    return <h2>Không tìm thấy bài viết để chỉnh sửa</h2>;
  }

  const handleUpdate = (updatedPost: Post) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
    alert('Cập nhật thành công!');
    navigate(`/posts/${updatedPost.id}`); //
  };

  const handleSubmit = (data: Omit<Post, 'id' | 'createdAt'> | Post) => {
    handleUpdate(data as Post);
  };

  return (
    <PostForm
      onSubmit={handleSubmit}
      initialData={postToEdit}
      mode="edit"
    />
  );
};

export default EditPost;