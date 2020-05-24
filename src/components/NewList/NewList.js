import React from 'react';
import classes from './NewList.module.css';
import New from '../New/New';
import Pagination from '../Pagination/Pagination';

const NewList = ({news = [], pagination,positionActive, setPositionActive }) => {
    return (
        <>
            <div className={classes.NewList}>
                {news.map(newInternal => {
                    return <New key={newInternal.news_id} newInfo={newInternal} />
                })}
            </div>
            <Pagination totalNews={pagination} positionActive={positionActive} setPositionActive={setPositionActive}/>
        </>
    );
}

export default NewList;