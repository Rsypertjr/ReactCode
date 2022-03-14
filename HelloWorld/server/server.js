/* server/server.js */
/* server.js */

let express = require('express');
let app = express();

app.use(express.static(__dirname+'/../static'));

let server = app.listen(3002, () =>{
    console.log('Server started listening on 3002');
})