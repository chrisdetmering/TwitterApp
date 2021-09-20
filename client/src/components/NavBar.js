import React from 'react';
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
      <div>  
        <ul id="navBar">
          <li className="nav-bar-links">
            <Link className="nav-bar-link-text" style={{textDecoration:"none"}} to='/'>Home</Link>
          </li>
          <li className="nav-bar-links">
            <Link className="nav-bar-link-text " style={{textDecoration:"none"}} to='/TwitterLive'>Live</Link>
          </li> 
          <li className="nav-bar-links">
            <Link className="nav-bar-link-text" style={{textDecoration:"none"}} to='/TwitterSearch'>Search</Link>
          </li> 
          </ul>
      </div>
    )
}
