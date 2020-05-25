import React from 'react';
import Logo from '../Logo/Logo';
import CategoryList from '../CategoryList/CategoryList';
import Header from '../Header/Header';
import Toggle from '../Toggle/Toggle';

const Toolbar = props => {
    return (
        <>
            <Header />
            <Logo />
            <Toggle
                optionOneIcon='fas fa-2x fa-newspaper'
                optionTwoIcon='far fa-2x fa-newspaper'
                onClickHandler={props.setColor}
                activeByDefault={props.activeByDefault}
                />
            <hr />
            <CategoryList />
            <hr />
        </>
    );
}

export default Toolbar;