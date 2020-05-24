import React from 'react';
import classes from './Pagination.module.css';

const Pagination = ({totalNews, positionActive, setPositionActive}) => {

    let numbers = [];

    let startPagination = 1;
    let finishPagination = totalNews < 10 ? totalNews : 10;

    if(positionActive > 5) {
        startPagination =  positionActive - 5;
        finishPagination = positionActive + 5 < totalNews ? positionActive + 5 : totalNews
    }
    
    for (let index = startPagination; index <= finishPagination; index++) {
        const classesToAdd = index === positionActive ? [classes.Position, classes.Active] : [classes.Position] ;
        numbers.push(
                        <span
                            key={index}
                            className={classesToAdd.join(' ')}
                            onClick={() => setPositionActive(index)}>
                            {index}
                        </span>);
    }
    
    const goBackHandler = () => {
        if(positionActive > 1) {
            setPositionActive(positionActive - 1)
        }
    }

    const goForwardHandler = () => {
        if(positionActive < totalNews) {
            setPositionActive(positionActive + 1)
        }
    }

    return (
        <div className={classes.Pagination}>
            <i className="fas fa-3x fa-arrow-circle-left" onClick={goBackHandler}></i>
            {numbers}
            <i className="fas fa-3x fa-arrow-circle-right" onClick={goForwardHandler}></i>
        </div>
    );
}

export default Pagination;