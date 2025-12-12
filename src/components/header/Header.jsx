import "./header.css";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <HeaderLeft />
        <HeaderRight />
      </div>
    </header>
  );
}
