// Get passed arguments
const argv = process.argv
console.log(argv)

// Current working directory
const cwd = process.cwd()
console.log(cwd)

// Environment
const env = process.env
console.log(env)

// Control process events
process.on('exit', () => {
  // Clean resources
})

// Control the process and its output
process.exit(0) // 0 Ok - 1 Error
