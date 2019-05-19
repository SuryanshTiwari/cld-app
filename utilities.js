const fs = require("fs");
var request = require('request');
var constant = require("./constant");

module.exports = class utilities {
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    generateWord() {
        return new Promise((resolve, reject) => {
            var url = constant.randomWordurl+constant.api_key;
            request({url: url,json: true, headers: {'User-Agent': 'request'}}, function(err, res, body){
                if(err){
                    reject(err);
                }
                resolve(body);
            });
        });
    }
}
