const express = require('express');
const fs = require('fs');
const { promisify } = require('util');
const app = express();
const readFile = promisify(fs.readFile);

app.use(express.static('public'));

app.get('/', async function(request, response) {
    const html = await readFile('./index.html', 'utf8');

    response.send(html);
});

app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});
