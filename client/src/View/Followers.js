import React from 'react';

import Form from '../View/Form'
import List from '../View/List'

import '../App.css';


const Followers = (props) => (
    <div>
        <h1>{props.title}</h1>
        <div id="formWrapper">
            <Form
                onSubmit={props.onFormSubmit}
            />
        </div>
        <div id="listWrapper">
            <List
                rows={props.usersDistance}
            />
        </div>
    </div>
);

export {Followers};