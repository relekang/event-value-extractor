export function value(func, parser, parserArgs) {
  return ({target}) => {
    const _value = target.value;
    if (parser) {
      return func(parser.apply(this, [_value].concat(parserArgs)));
    }
    return func(_value);
  };
}

export function intValue(func) {
  return value(func, parseInt, 10);
}

export function floatValue(func) {
  return value(func, parseFloat, 10);
}
