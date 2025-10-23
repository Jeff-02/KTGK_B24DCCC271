import { Post } from '../types/Post';
import { v4 as uuidv4 } from 'uuid';

export const INITIAL_POSTS: Post[] = [
  {
    id: uuidv4(),
    title: 'Khám phá React 19: Các tính năng mới',
    author: 'Thanh PQ',
    thumbnailUrl: 'https://via.placeholder.com/300x200?text=React+19',
    content: 'React 19 mang đến nhiều cải tiến đáng chú ý, bao gồm React Compiler, Actions, và cải thiện về server-side rendering.\nTrong bài viết này, chúng ta sẽ đi sâu vào từng tính năng và cách chúng thay đổi cách chúng ta xây dựng ứng dụng React.\nNội dung này đủ dài để vượt qua 50 ký tự validation.',
    category: 'Công nghệ',
    createdAt: new Date('2025-10-20T09:00:00Z').toISOString(),
  },
  {
    id: uuidv4(),
    title: 'Top 5 địa điểm du lịch nhất định phải đến ở Nhật Bản',
    author: 'Travel Blogger',
    thumbnailUrl: 'https://via.placeholder.com/300x200?text=Japan+Travel',
    content: 'Nhật Bản luôn là điểm đến hấp dẫn với văn hóa độc đáo và cảnh quan tuyệt đẹp.\nBài viết này tổng hợp 5 địa điểm bạn không thể bỏ qua khi đến thăm đất nước mặt trời mọc, từ Tokyo sầm uất đến Kyoto cổ kính.\nĐây là nội dung demo cho bài viết du lịch.',
    category: 'Du lịch',
    createdAt: new Date('2025-10-18T14:30:00Z').toISOString(),
  },
  {
    id: uuidv4(),
    title: 'Bí quyết nấu phở bò gia truyền ngon đúng vị',
    author: 'Vua Bếp',
    thumbnailUrl: 'https://via.placeholder.com/300x200?text=Pho+Bo',
    content: 'Phở bò là món ăn tinh hoa của ẩm thực Việt Nam. Để có một bát phở ngon, nước dùng là yếu tố quan trọng nhất.\nHãy cùng tìm hiểu bí quyết hầm xương, nêm nếm gia vị để có nồi nước dùng trong, ngọt thanh và thơm lừng.\nCông thức này đã được 50 ký tự.',
    category: 'Ẩm thực',
    createdAt: new Date('2025-10-15T08:00:00Z').toISOString(),
  },
  {
    id: uuidv4(),
    title: 'Thiết lập môi trường phát triển TypeScript với React',
    author: 'Dev Senior',
    thumbnailUrl: 'https://via.placeholder.com/300x200?text=React+TS',
    content: 'TypeScript mang lại sự an toàn về kiểu dữ liệu cho các dự án React lớn. Bài viết sẽ hướng dẫn bạn cách thiết lập một dự án React mới với TypeScript từ đầu sử dụng Vite.\nChúng ta cũng sẽ cấu hình ESLint và Prettier.\nNội dung này đủ dài.',
    category: 'Công nghệ',
    createdAt: new Date('2025-10-12T11:20:00Z').toISOString(),
  },
  {
    id: uuidv4(),
    title: 'Cách quản lý tài chính cá nhân hiệu quả cho người mới',
    author: 'Chuyên gia tài chính',
    thumbnailUrl: 'https://via.placeholder.com/300x200?text=Finance',
    content: 'Quản lý tài chính cá nhân là kỹ năng quan trọng. Bắt đầu bằng việc lập ngân sách, theo dõi chi tiêu và tiết kiệm một phần thu nhập.\nTránh các khoản nợ không cần thiết và bắt đầu đầu tư sớm.\nĐây là nội dung rất dài để test validation.',
    category: 'Đời sống',
    createdAt: new Date('2025-10-10T16:45:00Z').toISOString(),
  },
];