import React from 'react';
import PropTypes from 'prop-types';
import Form from '../View/Form'
import List from '../View/List'

import '../App.css';
import logo from '../logo.svg'


class Followers extends React.Component {

    static propTypes = {
        rows: PropTypes.array.isRequired,
        isLoading: PropTypes.bool.isRequired,
        onFormSubmit: PropTypes.func.isRequired,
    };

    state = {
        rows: this.props.rows || {
            username: "",
            distance: ""
        },
        isLoading: this.props.isLoading
    };

    componentWillReceiveProps(update) {
        console.log('this.props.rows', this.props.rows, update);
        this.setState({
            rows: update.rows
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
                        <List rows={this.state.rows}/>
                    </div>
                }
                </div>
            </div>
        )
    }
}


export {Followers};