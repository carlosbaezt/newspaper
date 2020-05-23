import React from 'react';
import classes from './Loader.module.css';

const Loader = () => {
    return (
        <div className={classes.Loader}>
            <div className={[classes.sk_cube1 , classes.sk_cube].join(' ')}></div>
            <div className={[classes.sk_cube2 , classes.sk_cube].join(' ')}></div>
            <div className={[classes.sk_cube4 , classes.sk_cube].join(' ')}></div>
            <div className={[classes.sk_cube3 , classes.sk_cube].join(' ')}></div>
        </div>
    );
}

export default Loader;