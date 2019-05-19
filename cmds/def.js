var request = require('request');
var constant = require("../constant");

module.exports = (args) => {
    return new Promise((resolve, reject)=>{
    var word = args._[1];
    var url = constant.baseUrl+word+constant.definitionsEndpoint+constant.api_key;
    request({url: url, json: true, headers: {'User-Agent': 'request'}}, function(err, res, body){
        if(err){
            reject(err);
        }
        // console.log(body)
        if(body)
        resolve(body);
    });
    });
}