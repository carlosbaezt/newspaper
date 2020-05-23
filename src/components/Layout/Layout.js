import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import NewsContainer from '../NewsContainer/NewsContainer';

const Layout = () => {
    return (
        <div>
            <Toolbar />
            <NewsContainer category='social' />
        </div>
    );
}

export default Layout;