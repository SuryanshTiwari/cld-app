const minimist = require('minimist')

module.exports = () => {
  const args = minimist(process.argv.slice(2))
  const cmd = args._[0]

  switch (cmd) {
    case 'def':
      var res = require('./cmds/def')(args);
      res.then((res1)=>console.log("Definition : ", res1));
      break
    case 'ant':
      var res = require('./cmds/ant')(args);
      res.then((res1)=>console.log("Antonyms : ", res1));
      break
    case 'syn':
      var res = require('./cmds/syn')(args);
      res.then((res1)=>console.log("Synonyms : ", res1));
      break
    case 'ex':
      var res = require('./cmds/ex')(args);
      res.then((res1)=>console.log("Examples : ", res1));
      break
    case 'dict':
      require('./cmds/ex')(args)
      require('./cmds/def')(args)
      require('./cmds/syn')(args)
      require('./cmds/ant')(args)
      break
    case 'wod':
      require('./cmds/wod')(args)
      break
    default:
      require('./cmds/wodDict')(args)
      break
  }
};