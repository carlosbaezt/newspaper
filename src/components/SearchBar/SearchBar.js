import React, {useState} from 'react';
import classes from './SearchBar.module.css';
import { useHistory } from 'react-router-dom'

const SearchBar = () => {

    const history = useHistory();

    const [search, setSearch] = useState('');

    const onKeyUpHandler = (event) => {
        if (event.key === "Enter" && search !== '') {
            history.push(`/search/${search}`);
        }
    }

    const onClickHandler = () => {
        if (search !== '') {
            history.push(`/search/${search}`);
        }
    }

    return (
        <div className={classes.SearchBar}>
            <input
                onKeyUp={onKeyUpHandler}
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                type='text'
                placeholder='Digite su búsqueda'
                className={classes.input}></input>
            <button
                onClick={onClickHandler}
                className={classes.button}>
                Buscar
            </button>
        </div>
    );
}

export default SearchBar;