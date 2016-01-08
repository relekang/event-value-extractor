import 'babel-core/register'
import test from 'ava'
import sinon from 'sinon'

import * as eve from './index'

const testValueExtraction = (t, extractor, value, outValue) => {
  const spy = sinon.spy()
  extractor(spy)({target: {name: 'fieldName', value: value}})
  t.ok(spy.called)
  t.same(spy.args[0], ['fieldName', outValue || value])
}

test('value should call func with the value in the target object', t => {
  testValueExtraction(t, eve.value, 'hi there')
})

test('intValue(func) should call func with an parsed int of the value in the target object', t => {
  testValueExtraction(t, eve.intValue, '42', 42)
  testValueExtraction(t, eve.intValue, '3.14', 3)
})

test('floatValue(func) should call func with an parsed float of the value in the target object', t => {
  testValueExtraction(t, eve.floatValue, '3.14', 3.14)
})
