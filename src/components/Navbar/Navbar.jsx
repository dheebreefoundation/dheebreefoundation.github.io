import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">DHEEBREE FOUNDATION</div>

        <ul className="navbar-menu">
          <li>Home</li>
          <li>About</li>
          <li>Programs</li>
          <li>Reports</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
