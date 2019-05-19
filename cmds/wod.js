var request = require('request');
var constant = require("../constant");
var utilities = require("../utilities");

module.exports =  async(args) => {
    this.utilities = new utilities();
    var  WordsList = [];
    var idx = this.utilities.getRandomInt(4);
    var c = 0;
    for(var i = 0; ;i++){
        var word = await this.utilities.generateWord();
        if(c == idx){
            args._[0] = word.word
            return args;
        }
        c++;
    }   
};