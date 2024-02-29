import React from 'react';
import { Link } from 'react-router-dom';
const Navbar= () => {
    return (
        <header>
        <h1>Koeboldt</h1>
        <div className='navbar'>
            <Link to='/'><button>Home</button></Link>
            <Link to='About'><button>About Me</button></Link>
            <Link to='MyWork'><button>My Projects</button></Link>
            <Link to='Contact'><button>Contact Me</button></Link>
        </div>
      </header>
    )
}

export default Navbar;