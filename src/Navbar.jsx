import { Link } from "react-router-dom";

function Navbar() {
  // stuff
  return (
    <nav>
      <Link to={'/'}>Home</Link>
      <Link to={'/characters'}>Characters</Link>
      <Link to={'/movies'}>Movies</Link>
    </nav>
  )
}

export default Navbar;