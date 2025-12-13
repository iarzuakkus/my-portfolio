// File: C:\Users\ASUS\my-portfolio\src\components\header\Header.jsx

import "./header.css";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <HeaderLeft />
        <HeaderRight />
      </div>
    </header>
  );
}
