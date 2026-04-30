import './Navbar.css'
import logoImg from "../assets/main logo.png"; 
export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#" className="logo" id="logo-link">
  <img src={logoImg} alt="logo" className="logo-img" />

</a>

      <ul className="nav-links">
        
        <li><a href="#" id="nav-solutions">Solutions <span className="caret">▾</span></a></li>
        <li><a href="#" id="nav-features">Features</a></li>
        <li><a href="#" id="nav-pricing">Pricing</a></li>
        <li><a href="#" id="nav-blog">Blog <span className="caret">▾</span></a></li>
        <li><a href="#" id="nav-restaurants">Restaurants</a></li>
        <li><a href="#" id="nav-food">Food <span className="caret">▾</span></a></li>
      </ul>

      <div className="nav-actions">
        <button className="btn-sign" id="btn-signin">Sign in</button>
        <button className="btn-get" id="btn-getolive">Get Olive &thinsp;→</button>
      </div>
      <div className="menu-icon">
  <span></span>
  <span></span>
  <span></span>
</div>
    </nav>
  )
}