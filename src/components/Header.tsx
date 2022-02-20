import * as React from "react";
import { Link } from "gatsby";

const Header: React.FC = () => {
  return (
    <header className="ly_header bl_header">
      <div className="ly_header_inner">
        <Link to="/" className="bl_logo">
          <img src="/icon/icon_normal.svg" alt="icon" width="60" height="60" />
          <img src="/mv/moji.svg" alt="Maki" width="504" height="162" />
        </Link>
        <nav className="bl_nav">
          <ul>
            <li>
              <Link to="">ABOUT</Link>
            </li>
            <li>
              <Link to="">WORKS</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
