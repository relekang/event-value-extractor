export function value(func, parser, parserArgs) {
  return (event) => {
    if (!event || !event.target) {
      return func(undefined, undefined)
    }

    const {target} = event
    if (parser) {
      return func(target.name, parser.apply(this, [target.value].concat(parserArgs)))
    }
    return func(target.name, target.value)
  }
}

export function intValue(func) {
  return value(func, parseInt, 10)
}

export function floatValue(func) {
  return value(func, parseFloat, 10)
}
