function isVueWarnForFailedPropTypeCheck(message: string) {
  return message.startsWith(
    '[Vue warn]: Invalid prop: type check failed for prop'
  )
}

const failOnVueWarn = (message: string, args: unknown[]) => {
  if (isVueWarnForFailedPropTypeCheck(message)) throw new Error(args.join(''))
}

const warn = console.warn
console.warn = (...args) => {
  warn.apply(console, args) // keep default behaviour
  failOnVueWarn(args[0], args)
}
