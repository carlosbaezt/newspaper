import React from 'react';
import moment from 'moment';
import classes from './Header.module.css';
import 'moment/locale/es';
import SearchBar from '../SearchBar/SearchBar';


const Header = () => {

    const date = moment().locale("es");
    return (
        <>
            <div className={classes.Header}>
                <div className={classes.Date}>{date.format('dddd, DD [de] MMMM [de] YYYY')}</div>
                <SearchBar />
            </div>
            <hr className={classes.Hr} />
        </>
    );
}

export default Header;