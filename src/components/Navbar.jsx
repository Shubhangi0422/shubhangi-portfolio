
// import "../styles/Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">

//         <div className="logo">
//           <span className="white">Shubhangi</span>
//           <span className="cyan"> Jain</span>
//         </div>

//         <div className="nav-links">
//           <a href="#about">About</a>
//           <a href="#skills">Skills</a>
//           <a href="#experience">Experience</a>
//           <a href="#projects">Projects</a>
//           <a href="#blog">Blog</a>
//           <a href="#contact">Contact</a>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;




import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <span className="white">Shubhangi</span>
          <span className="cyan"> Jain</span>
        </div>

        <div className="desktop-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;