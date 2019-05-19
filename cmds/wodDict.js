var request = require('request');
var constant = require("../constant");
var utilities = require("../utilities");


module.exports =  async(args) => {
    var wod = require('./wod')(args)
    wod.then(function(res){
        res._[1] = res._[0];
        require('./fullDict')(res)
    });
}