import React from 'react';
import classes from './New.module.css';
import moment from 'moment';
import 'moment/locale/es';

const New = props => {
    const { newInfo }  = props;

    const date = moment.unix(newInfo.date).locale("es"); 
    return (
        <div className={classes.New}>
            <img src={newInfo.img_url} alt='new' className={classes.Image}/>
            <span className={classes.Title}>{newInfo.title}</span>
            <span className={classes.Date}>{date.format('dddd, DD [de] MMMM [de] YYYY')}</span>
            <span className={classes.Source}>{newInfo.source_name}</span>
        </div>
    );
}

export default New;