import React from 'react';
import classes from './New.module.css';
import moment from 'moment';
import 'moment/locale/es';

const New = props => {
    const { newInfo }  = props;

    const date = moment.unix(newInfo.date).locale("es"); 
    return (
        <div className={classes.New}>
            <img loading="lazy" src={newInfo.img_url} alt='new' className={classes.Image}/>
            <span className={classes.Title}>{newInfo.title}</span>
            <span className={classes.Date}>{date.format('dddd, DD [de] MMMM [de] YYYY')}</span>
            <span className={classes.Source}>{newInfo.source_name}</span>
            <a
                className={classes.Link}
                href={newInfo.url}
                target='_blank'
                rel="noopener noreferrer">
                Ver noticia completa <i className="fas fa-external-link-alt"></i>
            </a>
        </div>
    );
}

export default New;