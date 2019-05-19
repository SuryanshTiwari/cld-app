const minimist = require('minimist')

module.exports = () => {
  const args = minimist(process.argv.slice(2))
  const cmd = args._[0]

  switch (cmd) {
    case 'def':
      var res = require('./cmds/def')(args);
      res.then((def)=>console.log("Definition : ", def));
      break
    case 'ant':
      var res = require('./cmds/ant')(args);
      res.then((ant)=>console.log("Antonyms : ", ant));
      break
    case 'syn':
      var res = require('./cmds/syn')(args);
      res.then((syn)=>console.log("Synonyms : ", syn));
      break
    case 'ex':
      var res = require('./cmds/ex')(args);
      res.then((ex)=>console.log("Examples : ", ex));
      break
    case 'dict':
      require('./cmds/fullDict')(args);
      break
    case 'wod':
      require('./cmds/wod')(args)
      break
    case 'play':
      var wordGame = require('./cmds/wordGame');
      wordGame.play(args);
      break
    default:
      require('./cmds/wodDict')(args)
      break
  }
};