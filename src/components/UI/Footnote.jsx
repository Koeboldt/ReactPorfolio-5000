import React from 'react';
import { Link } from 'react-router-dom';
const Footnote= () => {
    return (
        <footer>
        <Link to='/'><button>Linkdin</button></Link>
        <Link to='/'><button>github</button></Link>
      </footer>
    )
}

export default Footnote;