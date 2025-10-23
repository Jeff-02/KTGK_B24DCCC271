
import PostForm from '../components/PostForm';
import { Post } from '../types/Post';
import { useNavigate } from 'react-router-dom'; //
import { v4 as uuidv4 } from 'uuid'; //

interface CreatePostProps {
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const CreatePost = ({ setPosts }: CreatePostProps) => {
  const navigate = useNavigate(); //

  const handleCreate = (newPostData: Omit<Post, 'id' | 'createdAt'>) => {
    const newPost: Post = {
      ...newPostData,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
    };
    
    setPosts((prevPosts) => [newPost, ...prevPosts]);
    
    alert('Đăng bài thành công!');
    navigate('/'); //
  };

  const handleSubmit = (data: Omit<Post, 'id' | 'createdAt'> | Post) => {
    handleCreate(data as Omit<Post, 'id' | 'createdAt'>);
  };

  return (
    <PostForm 
      onSubmit={handleSubmit} 
      mode="create" 
    />
  );
};

export default CreatePost;