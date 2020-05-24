import React , { useEffect } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import NewsContainer from '../NewsContainer/NewsContainer';
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from '../../redux/reducer';

const { getNews } = actions;

const Layout = ({getNews}) => {

    useEffect(() => {
        getNews();
    }, []);

    return (
        <div>
            <Toolbar />
            <Switch>
                <Route
                    path="/category/:categoryName"
                    render={(props) => <NewsContainer defaultPosition={1} category={props.match.params.categoryName} {...props} />}  />
                <Route
                    path="/search/:search"
                    render={(props) => <NewsContainer defaultPosition={1} search={props.match.params.search} {...props} />}  />
                <Route path="/">
                    <NewsContainer defaultPosition={1} />
                </Route>
            </Switch>
        </div>
    );
}

export default connect( null, { getNews })(Layout);