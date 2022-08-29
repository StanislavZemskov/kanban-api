const bodyParser = require("body-parser");

function bp(app) {
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
}
module.exports = bp;