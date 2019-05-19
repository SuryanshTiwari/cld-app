module.exports = (args) => {
    var res = require('./def')(args);
    res.then((def)=>console.log("Definition : ", def));

    var res = require('./ant')(args);
    res.then((ant)=>console.log("Antonyms : ", ant));

    var res = require('./syn')(args);
    res.then((syn)=>console.log("Synonyms : ", syn));

    var res = require('./ex')(args);
    res.then((ex)=>console.log("Examples : ", ex));   
}