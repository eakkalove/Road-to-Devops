const express = require("express");
const app = express();


app.get('/', (req, res) => {
	    res.send('Hello Eakkalove')   
});

app.listen(80, () => {
	console.log('Listening on port 3000')
});
