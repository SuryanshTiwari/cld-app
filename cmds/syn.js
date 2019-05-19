var request = require('request');
var constant = require("../constant");

module.exports = (args) => {
    return new Promise((resolve, reject)=>{

    var word = args._[1];
    var url = constant.baseUrl+word+constant.synonymsEndpoint+constant.api_key;
    request({url: url, json: true, headers: {'User-Agent': 'request'}}, function(err, res, body){
        if(err){
            reject(err);
        }
        if(body[0] && body[0].relationshipType == 'synonym')
            resolve( body[0].words);
        else if(body[1] && body[1].relationshipType == 'synonym')
            resolve( body[1].words);
        else
            resolve( "Synonyms for this word not found");
    });
});
}