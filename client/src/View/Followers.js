import React from 'react';

import Form from '../View/Form'
import List from '../View/List'

import '../App.css';


const Followers = (props) => (
    <div>
        <div id="formWrapper">
            <Form
                onSubmit={props.onFormSubmit}
            />
        </div>
        <div id="listWrapper">
            <List
                rows={props.rows}
            />
        </div>
    </div>
);

export {Followers};