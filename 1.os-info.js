const os = require('node:os')

console.log('System info')
console.log('-----------')
console.log('OS Name', os.platform())
console.log('OS Version', os.release())
console.log('Architechture', os.arch())
console.log('CPUs', os.cpus().map(item => item.model).join(' - '))
console.log('Free Memory (MB)', os.freemem() / 1024 / 1024)
console.log('Total Memory (MB)', os.totalmem() / 1024 / 1024)
console.log('Uptime (days)', os.uptime() / 60 / 60)
