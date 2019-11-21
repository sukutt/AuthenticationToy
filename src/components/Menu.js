import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/auth">Auth</Link></li>
                <li><Link to="/auth/foo">Auth foo</Link></li>
                <li><Link to="/posts">Posts</Link></li>
            </ul>
            <hr/>
        </div>
    )
}

export default Menu;