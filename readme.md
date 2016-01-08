# event-value-extractor [![Build status][build-badge]][last-build] [![Coverage status][coverage-badge]][last-build]


## Installation

```
npm install --save event-value-extractor
```

## Usage
It can be used with all event listeners which sends an object with
a target object that has a value attribute.

```javascript
var React = require('react');
var eve = require('event-value-extractor');

React.createClass({
  render: function() {
    return <input onChange={eve.value(this.props.onChange)} />;
  }
});
```

#### `.value(func, parser, parserArguments)`
This will return a function that extracts `arguments[0].target.name`
and `arguments[0].target.value`, which is used as arguments when `func`
gets called. If parser is specified it will be called with the value
as first argument and the arguments in parserArguments(must be one
value or a list of values) as the next parameters.

#### `.intValue(func)`
This is a shortcut for `value(func, parseInt, 10);`

#### `.floatValue(func)`
This is a shortcut for `value(func, parseFloat, 10);`

#### `.boolValue(func)`
This is an extractor which will convert the following:
```
'true' or '1' or 1 => true
'false' or '0' or 0 => false
```

----------------------

MIT © Rolf Erik Lekang

[build-badge]: https://ci.frigg.io/relekang/event-value-extractor.svg
[coverage-badge]: https://ci.frigg.io/relekang/event-value-extractor/coverage.svg
[last-build]: https://ci.frigg.io/relekang/event-value-extractor/last
