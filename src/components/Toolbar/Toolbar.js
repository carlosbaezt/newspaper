import React from 'react';
import Logo from '../Logo/Logo';
import CategoryList from '../CategoryList/CategoryList';
import Header from '../Header/Header';

const Toolbar = () => {
    return (
        <>
            <Header />
            <Logo />
            <hr />
            <CategoryList />
            <hr />
        </>
    );
}

export default Toolbar;