const minimist = require('minimist')

module.exports = () => {
  const args = minimist(process.argv.slice(2))
  const cmd = args._[0]

  switch (cmd) {
    case 'def':
      require('./cmds/def')(args)
      break
    case 'ant':
      require('./cmds/ant')(args)
      break
    case 'syn':
      require('./cmds/syn')(args)
      break
    case 'ex':
      require('./cmds/ex')(args)
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