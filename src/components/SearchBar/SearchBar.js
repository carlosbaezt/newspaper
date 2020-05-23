import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={classes.SearchBar}>
            <input type='text' placeholder='Digite su busqueda' className={classes.input}></input>
            <button className={classes.button}>Buscar</button>
        </div>
    );
}

export default SearchBar;