import React from 'react';
import classes from './Toggle.module.css'

const Toggle = props => {
    return (
        <div className={classes.Toggle} onClick={() => props.onClickHandler()}>
            <i className={props.optionOneIcon}></i>
            <label className={classes.switch}>
                <input type="checkbox" checked={props.activeByDefault} />
                <span className={[classes.slider, classes.round].join(' ') }></span>
            </label>
            <i className={props.optionTwoIcon}></i>
        </div>
    );
}

export default Toggle;