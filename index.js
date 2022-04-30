const express = require('express');
const app = express ();
const port = process.env.port || 5000;

app.get('/', (req, res) => { 
   res.send("Hello world..what's up?!!!! It's working!");
});

app.listen(port, () => {
   console.log('Listening to port', port);
})