const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        name: 'Rafael Oliveira',
        city: 'João Pessoa'
    });
});

app.listen(3333);
