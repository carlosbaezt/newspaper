import React from 'react';
import classes from './NewList.module.css';
import New from '../New/New';

const NewList = ({news = []}) => {
    return (
        <div className={classes.NewList}>
            {news.map(newInternal => {
                return <New key={newInternal.news_id} newInfo={newInternal} />
            })}
        </div>
    );
}

export default NewList;