import { Link } from "react-router-dom";

function Navbar() {
  // stuff
  return (
    <nav>
      <Link className="nav-link" to={'/'}>Home</Link>
      <Link className="nav-link" to={'/characters'}>Characters</Link>
      <Link className="nav-link" to={'/movies'}>Movies</Link>
    </nav>
  )
}

export default Navbar;