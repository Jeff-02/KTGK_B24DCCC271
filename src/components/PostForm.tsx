import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Post } from '../types/Post';

type PostFormData = Omit<Post, 'id' | 'createdAt'>;

interface PostFormProps {
  onSubmit: (data: PostFormData | Post) => void; 
  initialData?: Post; 
  mode: 'create' | 'edit';
}

const categories = ['Công nghệ', 'Du lịch', 'Ẩm thực', 'Đời sống', 'Khác'];

const PostForm = ({ onSubmit, initialData, mode }: PostFormProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<PostFormData>({
    title: '',
    author: '',
    thumbnailUrl: '',
    content: '',
    category: 'Công nghệ',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof PostFormData, string>>>({});

  useEffect(() => {
    if (initialData && mode === 'edit') {
      const { id, createdAt, ...rest } = initialData;
      setFormData(rest);
    }
  }, [initialData, mode]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof PostFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof PostFormData, string>> = {};
    
    if (!formData.title.trim()) newErrors.title = 'Tiêu đề là bắt buộc';
    else if (formData.title.length < 5) newErrors.title = 'Tiêu đề phải có ít nhất 5 ký tự';

    if (!formData.author.trim()) newErrors.author = 'Tác giả là bắt buộc';
    else if (formData.author.length < 2) newErrors.author = 'Tác giả phải có ít nhất 2 ký tự';

    if (!formData.content.trim()) newErrors.content = 'Nội dung là bắt buộc';
    else if (formData.content.length < 20) newErrors.content = 'Nội dung phải có ít nhất 20 ký tự';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h2>{mode === 'create' ? 'Tạo bài viết mới' : 'Chỉnh sửa bài viết'}</h2>

      <div className="form-group">
        <label htmlFor="title">Tiêu đề</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          value={formData.title} 
          onChange={handleChange} 
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="author">Tác giả</label>
        <input 
          type="text" 
          id="author" 
          name="author" 
          value={formData.author} 
          onChange={handleChange} 
        />
        {errors.author && <span className="error">{errors.author}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="thumbnailUrl">URL ảnh thumbnail</label>
        <input 
          type="text" 
          id="thumbnailUrl" 
          name="thumbnailUrl" 
          value={formData.thumbnailUrl} 
          onChange={handleChange} 
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Thể loại</label>
        <select 
          id="category" 
          name="category" 
          value={formData.category} 
          onChange={handleChange}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="content">Nội dung bài viết</label>
        <textarea 
          id="content" 
          name="content" 
          rows={10} 
          value={formData.content} 
          onChange={handleChange}
        ></textarea>
        {errors.content && <span className="error">{errors.content}</span>}
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {mode === 'create' ? 'Đăng bài' : 'Cập nhật'}
        </button>
        <button type="button" onClick={handleCancel} className="btn">
          Hủy
        </button>
      </div>
    </form>
  );
};

export default PostForm;
