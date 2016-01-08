import 'babel-core/register'
import test from 'ava'
import sinon from 'sinon'

import * as eve from './index'

const testValueExtraction = (t, extractor, value, outValue) => {
  const spy = sinon.spy()
  extractor(spy)({target: {name: 'fieldName', value: value}})
  t.ok(spy.called)
  t.same(spy.args[0], ['fieldName', typeof outValue !== 'undefined' ? outValue : value])
}

test('value(func, parser, parserArguments) should return the value in the target object', t => {
  testValueExtraction(t, eve.value, 'hi there')
})

test('intValue(func) should return an parsed int of the value in the target object', t => {
  testValueExtraction(t, eve.intValue, '42', 42)
  testValueExtraction(t, eve.intValue, '3.14', 3)
})

test('floatValue(func) should return an parsed float of  the value in the target object', t => {
  testValueExtraction(t, eve.floatValue, '3.14', 3.14)
})

test('boolValue(func) should call func with the parsed boolean value in the target object', t => {
  testValueExtraction(t, eve.boolValue, 'true', true)
  testValueExtraction(t, eve.boolValue, 'false', false)
})

test('boolValue(func) should call func with the parsed boolean value from 0 or 1', t => {
  testValueExtraction(t, eve.boolValue, '1', true)
  testValueExtraction(t, eve.boolValue, '0', false)
  testValueExtraction(t, eve.boolValue, 1, true)
  testValueExtraction(t, eve.boolValue, 0, false)
})
