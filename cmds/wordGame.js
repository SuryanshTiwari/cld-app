const qoa = require('qoa');
const {log} = console;

module.exports =  async(args) => {
    var wod = require('./wod')(args)
    wod.then(function(res){
        
    });
    const ps = [
        {
        type: 'input',
        query: 'Type your username:',
        handle: 'username'
        },
        {
        type: 'secure',
        query: 'Type your password:',
        handle: 'password'
        }
    ];
  qoa.prompt(ps).then(log);
}