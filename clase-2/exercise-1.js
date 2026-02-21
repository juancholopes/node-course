const os = require('node:os')

function stats() {
  const hostName = os.hostname()
  const architecture = os.machine()
  const totalMemory = os.totalmem() / 1024 / 1024
  const uptime = os.uptime() / 3600
  const USER_NAME = process.env.USER_NAME

  function saludar(USER_NAME) {
    console.log(`Hola ${USER_NAME}`)
    console.log(hostName, architecture, totalMemory, uptime)
  }

  return USER_NAME !== undefined ? saludar(USER_NAME) : console.log(hostName, architecture, totalMemory, uptime)
}

module.exports = stats()
