const express = require('express');

import Followers from './Followers'

const app = express();

app.set('port', (process.env.API_PORT || 3001));

app.get('/api/user', (req, res) => {
    const userName = req.query.userName;

    Followers.getUserLocation(userName).then((userData) => (
        res.json(userData)
    ))
});


app.get('/api/distance', (req, res) => {
    const username = req.query.username;

    Followers.getTenTheFarthest(username).then((distance) => (
        res.json(distance)
    ))
});

app.get('/api/user/users_distance', (req, res) => {
    const userName = req.query.userName;

    Followers.getFollowersLocation(userName).then((followersData) => (
        res.json(followersData)
    ))

});

export default app;
