/* server.js */

let express = require('express');
let app = express();
app.use(express.static(__dirname+'/utility/utilityBackboneNoConflictExample'));

let server = app.listen(3004, () =>{
    console.log('Server started listening on 3004');
})