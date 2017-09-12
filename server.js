const express = require('express');
const fs = require('fs');

import GithubClient from './GithubClient'
import Followers from './Followers'

const app = express();

app.set('port', (process.env.API_PORT || 3001));

app.get('/api/user', (req, res) => {
    const userName = req.query.userName;

    Followers.getUserLocation(userName).then((userData) => (
        res.json(userData)
    ))/*.catch((error) => (
        res.status(500).json({
            success: false,
            message: 'There was an error when interfacing with Github'
            error: error
        })
    ))*/
});


app.get('/api/user/followers', (req, res) => {
    const userName = req.query.userName;

    GithubClient.getUserFollowers(userName).then((userFollowers) => (
        res.json(userFollowers)
    ))
});

app.get('/api/user/users_distance', (req, res) => {
    const userName = req.query.userName;

    Followers.followersLocation(userName).then((followersData) => (
        res.json(followersData)
    ))

});

export default app;
