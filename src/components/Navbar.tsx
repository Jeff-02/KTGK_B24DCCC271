import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        Blog Management
      </NavLink>
      <div className="nav-links">
        <NavLink to="/" end>
          Trang chủ
        </NavLink>
        <NavLink to="/create" className="btn btn-primary">
          Viết bài mới
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;