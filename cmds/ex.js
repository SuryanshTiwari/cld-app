var request = require('request');
var constant = require("../constant");

module.exports = (args) => {
    var word = args._[1];
    var url = constant.baseUrl+word+constant.examplesEndpoint+constant.api_key;
    request({url: url, json: true, headers: {'User-Agent': 'request'}}, function(err, res, body){
        if(err){
            console.log(err);
        }
        var examples = body.examples;
        if(examples){
            console.log("Examples : ", examples);
        }else{
            console.log("Examples : ", "Examples for this word not found");
        }
    });
}