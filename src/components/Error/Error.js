import React from 'react';
import classes from './Error.module.css';
import errorImage from '../../assets/images/error.png'

const Error = ({children}) => {
    return (
        <div className={classes.Error}>
            <img src={errorImage} alt='error image' className={classes.Image}/>
            {children}
        </div>
    );
}

export default Error;