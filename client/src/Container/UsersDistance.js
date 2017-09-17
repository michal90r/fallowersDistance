import React from 'react';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'

import {reducer} from './Reducer'
import {fetchUsers} from "./Actions";

import {Followers} from '../View/Followers'


const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    users: state.users
});

const mapDispatchToProps = (dispatch) => ({
    onFormSubmit: (e) => (
        dispatch(fetchUsers(e.username))
    )
});

const UsersDistance = connect(
    mapStateToProps,
    mapDispatchToProps
)(Followers);


const WrappedUserDistance = () => (
    <Provider store={store}>
        <UsersDistance/>
    </Provider>
);

export default WrappedUserDistance;