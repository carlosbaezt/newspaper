import React , { useEffect, useState } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import NewsContainer from '../NewsContainer/NewsContainer';
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from '../../redux/reducer';
import styled from 'styled-components';

const { getNews } = actions;

const Layout = ({getNews}) => {
    const defaultColor = '#fdebd3';
    const [color, setColor] = useState(defaultColor);

    useEffect(() => {
        getNews();
    }, []);

    const setColorHandler = () => {
        setColor(color === defaultColor ? '#fff' : defaultColor);
    }

    const Container = styled.div`
        background-color: ${color};
        min-height: 100vh
    `;

    return (
        <Container>
            <Toolbar setColor={setColorHandler} activeByDefault={color !== defaultColor} />
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
        </Container>
    );
}

export default connect( null, { getNews })(Layout);