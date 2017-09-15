const express = require('express');

import Followers from './Followers'

const app = express();

app.set('port', (process.env.API_PORT || 3001));


app.get('/api/distance', (req, res) => {
    const username = req.query.username;

    Followers.getTenTheFarthest(username).then((distance) => (
        res.json(distance)
    )).catch((error) => (
        res.status(500).json({
            success: false,
            message: 'There was an error when interfacing with Github or Dystans.org',
            error: error,
        })
    ));
});


export default app;
