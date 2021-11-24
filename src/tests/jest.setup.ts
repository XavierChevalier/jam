function isVueWarn(message: string) {
  return message.startsWith('[Vue warn]')
}

const failOnVueWarn = (message: string) => {
  if (isVueWarn(message)) throw new Error(message)
}

const warn = console.warn
console.warn = (...args) => {
  warn.apply(console, args) // keep default behaviour
  failOnVueWarn(args[0])
}
