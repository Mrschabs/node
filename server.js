import express from 'express';

const app = express();

app.get('/', (req, res) => {
    const user = {
        name: 'Romano',
        hobby: 'trading'
    }
    res.send(user);
});

app.listen(3000);