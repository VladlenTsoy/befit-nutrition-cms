const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  apps: [{
    name: process.env.APP_NAME,
    script: 'yarn',
    args: 'start'
  }]
}
