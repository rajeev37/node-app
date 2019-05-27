const express = require('express');
const bodyParser = require("body-parser");
const config = require('config')
const app = express();
const port = config.get('port');

// middleware.
app.use(bodyParser.json());
// Routes.
app.get('/', (req, res) => res.send('Hello World!'));
app.use("/", require("./routes/userRoutes"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))