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
    default:
      console.error(`"${cmd}" is not a valid command!`)
      break
  }
}