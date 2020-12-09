const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT||3000;


app.get('/', (req, res) => {
    req.sendFile(
        path.join(__dirname, 'views', 'index.html')
    )
})



app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`Server is running on the port: ${PORT}`)
})