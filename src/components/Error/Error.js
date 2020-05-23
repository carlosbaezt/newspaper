import React from 'react';
import classes from './Error.module.css';
import errorImage from '../../assets/images/error.png'

const Error = ({message}) => {
    return (
        <div className={classes.Error}>
            <img src={errorImage} alt='error image' className={classes.Image}/>
            <div className={classes.Text}>Lo sentimos, algo salió mal. </div>
            <div className={classes.Text}>Detalles del error: {message}</div>
        </div>
    );
}

export default Error;