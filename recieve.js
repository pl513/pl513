const express = require('express');
const app = express();

app.use(express.json());

app.post('/pl513', (req, res) => {
    console.log(req.body);  // handle the received data
    res.send('Data received');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
