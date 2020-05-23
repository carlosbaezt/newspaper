import React from 'react';
import NewList from '../NewList/NewList';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import { connect } from "react-redux";
import errorClasses from '../Error/Error.module.css';

const NewsContainer = props => {

    const {loading, error} = props;
    if(loading) {
        return <Loader />
    }else if(error) {
        return (
            <Error>
                <div className={errorClasses.Text}>Lo sentimos, algo salió mal. </div>
                <div className={errorClasses.Text}>Detalles del error: {error}</div>
            </Error>
        )
    }

    const {news = [], category, search} = props;

    if(news.length > 0) {
        let newsToDisplay = [];

        if(category) {
            newsToDisplay = filterNewsByCategory(news, category);
        } else if (search) {
            newsToDisplay = filterNewsBySearch(news, search);
        } else {
            newsToDisplay = news.splice(0,12);
        }
        if(newsToDisplay.length > 0) {
            return (
                <NewList news={newsToDisplay} />
            )
        } else {
            return (
                <Error>
                    <div className={errorClasses.Text}>Lo sentimos, no hemos encontrado resultados para su búsqueda. </div>
                </Error>
            );
        }
    }

    
    return null;
}

const filterNewsByCategory = (news, category) => {
    const newsToDisplay = news.filter((newInternal) => {
        if(newInternal.category) {
            return newInternal.category.toUpperCase()  === category.toUpperCase();
        }
        return false;
    });
    return newsToDisplay.splice(0,12);
}

const filterNewsBySearch = (news, search) => {
    const newsToDisplay = news.filter((newInternal) => {
        if(newInternal.title) {
            return newInternal.title.toUpperCase().includes(search.toUpperCase());
        }
        return false;
    });
    return newsToDisplay.splice(0,12);
}


const mapStatetoProps = state => {
    return {
      news: state.news,
      loading: state.fetching,
      error: state.error
    };
  };
  
export default connect(mapStatetoProps)(NewsContainer);