const express = require('express');
const fs = require('fs');

import GithubClient from './GithubClient'

const app = express();

app.set('port', (process.env.API_PORT || 3001));

app.get('/api/user', (req, res) => {
    const userName = req.query.userName;

    GithubClient.getUser(userName).then((userData) => (
        res.json(userData)
    ))/*.catch((error) => (
        res.status(500).json({
            success: false,
            message: 'There was an error when interfacing with Github'
            error: error
        })
    ))*/
});

export default app;
