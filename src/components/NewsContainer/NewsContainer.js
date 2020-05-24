import React, {useState, useEffect} from 'react';
import NewList from '../NewList/NewList';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import { connect } from "react-redux";
import errorClasses from '../Error/Error.module.css';

class NewsContainer extends React.Component {

    state = {positionActive: this.props.defaultPosition}

    componentWillReceiveProps(newProps) {
        if(newProps.category !== this.props.category || newProps.search !== this.props.search) {
            this.setState({
                positionActive: this.props.defaultPosition
            })
        }
    }

    setPositionActive = (newPosition) => {
        this.setState({
            positionActive: newPosition
        })
    }
    
    render() {
        const { loading, error, news = [], category, search } = this.props;

        if(loading) {
            return <Loader />
        } else if(error) {
            return (
                <Error>
                    <div className={errorClasses.Text}>Lo sentimos, algo salió mal. </div>
                    <div className={errorClasses.Text}>Detalles del error: {error}</div>
                </Error>
            )
        }    
    
        if(news.length > 0) {
            let newsToDisplay = news;
    
            if(category) {
                newsToDisplay = this.filterNewsByCategory(news, category);
            } else if (search) {
                newsToDisplay = this.filterNewsBySearch(news, search);
            }
    
            if(newsToDisplay.length > 0) {
                const numberOfNewsPerPage = 9;

                const start = (this.state.positionActive - 1) * numberOfNewsPerPage;
                const end = start + numberOfNewsPerPage;
                const total = Math.ceil(newsToDisplay.length/numberOfNewsPerPage);
                newsToDisplay = newsToDisplay.slice(start, end);
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                return (
                    <NewList
                        news={newsToDisplay}
                        pagination={total}
                        positionActive={this.state.positionActive}
                        setPositionActive={this.setPositionActive} />
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

    filterNewsByCategory = (news, category) => {
        const newsToDisplay = news.filter((newInternal) => {
            if(newInternal.category) {
                return newInternal.category.toUpperCase()  === category.toUpperCase();
            }
            return false;
        });
        return newsToDisplay;
    }
    
    filterNewsBySearch = (news, search) => {
        const newsToDisplay = news.filter((newInternal) => {
            if(newInternal.title) {
                return newInternal.title.toUpperCase().includes(search.toUpperCase());
            }
            return false;
        });
        return newsToDisplay;
    }
}

const mapStatetoProps = state => {
    return {
        news: state.news,
        loading: state.fetching,
        error: state.error
    };
};

export default connect(mapStatetoProps)(NewsContainer);