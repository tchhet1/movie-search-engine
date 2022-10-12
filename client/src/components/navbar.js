import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'

function Navbar() {
    
    return (
     <header>
        <div className="header">
          <div className="logo"><Link to="/" className="nav-links">All About Movies</Link></div>
            <nav>      
              <ul>
                <li><Link to="/" className="nav-links">Home</Link></li>
                <li><Link to="/new" className="nav-links">New</Link></li>
                <li><Link to="/popular" className="nav-links">Popular</Link></li>
                <li><Link to="/watchlisted" className="nav-links">Watchlist</Link></li>
                <li><Link to="/search" className="nav-links"><FaSearch /></Link></li>
            </ul>
            </nav>
        </div>          
      </header>
    )
}

export default Navbar;