const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/Besan', (req, res) => {
    res.send('My name is Besan');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
