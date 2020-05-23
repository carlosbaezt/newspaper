import React , { useEffect } from 'react';
import NewList from '../NewList/NewList';
import { connect } from "react-redux";
import { actions } from '../../redux/reducer';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

const { getNews } = actions;

const NewsContainer = ({news = [], loading, error, getNews, category}) => {

    useEffect(() => {
        getNews();
    }, []);

    if(loading) {
        return <Loader />
    }

    if(error) {
        return <Error message={error} />
    }

    if(news.length > 0) {
        const newsToDisplay = news.splice(0,12);
        return (
            <NewList news={newsToDisplay} />
        );
    }

    return null;
}

const mapStatetoProps = state => {
    console.log(state);
    return {
      news: state.news,
      loading: state.fetching,
      error: state.error
    };
  };
  
export default connect(mapStatetoProps, {getNews})(NewsContainer);