const express = require('express')
const routes = require("./routes");
const bp = require("./bodyParser");

const app = express()
const port = process.env.PORT || 5000;

bp(app);
routes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
