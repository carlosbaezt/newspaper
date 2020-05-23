import React from 'react';
import classes from './NewList.module.css';
import New from '../New/New';
import axios from 'axios';

class NewList extends React.Component {

    state = {
        news: []
    };

    async componentDidMount () {
        try {
            const request = await axios.get('https://api.canillitapp.com/latest/2020-05-22');
            const news = request.data;
            this.setState({
                news: news.splice(0,12)
            });
        }catch (error) {

        }
    }

    render() {
        return (
            <div className={classes.NewList}>
                {this.state.news.map(newInternal => {
                    return <New key={newInternal.news_id} newInfo={newInternal} />
                })}
            </div>
        );
    }
}

export default NewList;