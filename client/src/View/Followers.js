import React from 'react';
import PropTypes from 'prop-types';
import Form from '../View/Form'
import List from '../View/List'

import '../App.css';
import logo from '../logo.svg'


class Followers extends React.Component {

    static propTypes = {
        users: PropTypes.array.isRequired,
        isLoading: PropTypes.bool.isRequired,
        onFormSubmit: PropTypes.func.isRequired,
    };

    state = {
        users: this.props.users || {
            username: "",
            distance: ""
        },
        isLoading: this.props.isLoading
    };

    componentWillReceiveProps(update) {
        console.log('this.props.rows', this.props.users, update);
        this.setState({
            users: update.users,
            isLoading: update.isLoading
        });
    }

    render() {
        return (
            <div>
                <div id="formWrapper">
                    <Form
                        onSubmit={this.props.onFormSubmit}
                    />
                </div>
                <div className="list&loading">
                {
                    this.state.isLoading &&
                    <div className="loading">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <div className="loadingText">LOADING</div>
                    </div>
                }
                {
                    !this.state.isLoading &&
                    <div id="listWrapper">
                        <List users={this.state.users}/>
                    </div>
                }
                </div>
            </div>
        )
    }
}


export {Followers};