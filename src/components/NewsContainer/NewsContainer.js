import React from 'react';
import NewList from '../NewList/NewList';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import { connect } from "react-redux";
import errorClasses from '../Error/Error.module.css';
import { actions } from '../../redux/reducer';
import categories from '../../utils/categories';
const { getNewsBySearch, getNewsByCategoryId, getAllNews } = actions;

class NewsContainer extends React.PureComponent {

    state = {positionActive: this.props.defaultPosition}

    componentDidMount() {
        if(this.props.home) {
            this.props.getAllNews();
        } else if (this.props.category !== undefined) {
            const categoryObject = categories.find(category => category.name === this.props.category);
            this.props.getNewsByCategoryId(categoryObject.id);
        } else if (this.props.search) {
            this.props.getNewsBySearch(this.props.search);
        }
    }

    componentWillReceiveProps(newProps) {
        if(this.props.home === false && newProps.home === true) {
            this.setState({ positionActive: this.props.defaultPosition });
            this.props.getAllNews();
        }else if(newProps.category !== undefined && newProps.category !== this.props.category) {
            this.setState({ positionActive: this.props.defaultPosition });
            const categoryObject = categories.find(category => category.name === newProps.category);
            this.props.getNewsByCategoryId(categoryObject.id);
        }else if(newProps.search !== undefined && newProps.search !== this.props.search) {
            this.setState({ positionActive: this.props.defaultPosition });
            this.props.getNewsBySearch(newProps.search);
        }
    }
    
    setPositionActive = (newPosition) => {
        this.setState({
            positionActive: newPosition
        })
    }
    
    render() {
        const { loading, error, news = [] } = this.props;

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
                return this.getErrorMessage();
            }
        }
        return this.getErrorMessage();
    }

    getErrorMessage = () => {
        return (
            <Error>
                <div className={errorClasses.Text}>Lo sentimos, no hemos encontrado resultados para su búsqueda. </div>
            </Error>
        );
    }
}


const mapStatetoProps = state => {
    return {
        news: state.news,
        loading: state.fetching,
        error: state.error
    };
};

export default connect(mapStatetoProps, {getNewsBySearch, getNewsByCategoryId, getAllNews })(NewsContainer);