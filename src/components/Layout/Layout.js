import React , { useState } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import NewsContainer from '../NewsContainer/NewsContainer';
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from '../../redux/reducer';
import styled from 'styled-components';
const { updateShowOld } = actions;

const Layout = ({updateShowOld, showOld}) => {
    const defaultColor = '#fdebd3';
    const color = showOld ? defaultColor : '#fff';
    
    const Container = styled.div`
        background-color: ${color};
        min-height: 100vh
    `;

    return (
        <Container>
            <Toolbar setColor={updateShowOld} activeByDefault={color !== defaultColor} />
            <Switch>
                <Route
                    path="/category/:categoryName"
                    render={(props) => <NewsContainer home={false} defaultPosition={1} category={props.match.params.categoryName} {...props} />}  />
                <Route
                    path="/search/:search"
                    render={(props) => <NewsContainer home={false} defaultPosition={1} search={props.match.params.search} {...props} />}  />
                <Route path="/">
                    <NewsContainer defaultPosition={1} home={true} />
                </Route>
            </Switch>
        </Container>
    );
}

const mapStatetoProps = state => {
    return {
        showOld: state.showOld
    };
};

export default connect( mapStatetoProps, { updateShowOld })(Layout);