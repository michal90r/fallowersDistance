const express = require('express');
const fs = require('fs');

const app = express();

app.set('port', (process.env.API_PORT || 3001));


export default app;
