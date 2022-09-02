

function Navbar() {
    
    return (
     <header>
        <div className="header">
          <div className="logo">Movie Maniac</div>
            <nav>      
              <ul>
                
                <li>New</li>
                <li>Popular</li>
                <li><a href="">Watchlist</a></li>
              </ul>
            </nav>
        </div>          
      </header>
    )
}

export default Navbar;