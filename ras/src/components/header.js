import React from 'react';
import NavLink from './nav-link'


export default () => (
    <header className="header">
        <div>Rich Ass Society</div>
        <nav>
            <ul>
                <NavLink title="Home" href="/" />
                <NavLink title="What is" href="/" />
                <NavLink title="Links" href="/" />
                <NavLink title="Sign up" href="/" />
                <NavLink title="Log in" href="/" />
            </ul>
        </nav>
    </header>
)