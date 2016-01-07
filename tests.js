/* eslint-env mocha */
import chai from 'chai'
import sinonChai from 'sinon-chai'
import sinon from 'sinon'

import * as eve from './index'

chai.use(sinonChai)
const {expect} = chai

const testValueExtraction = (extractor, value, outValue) => {
  const spy = sinon.spy()
  extractor(spy)({target: {name: 'fieldName', value: value}})
  expect(spy).to.have.been.calledWith('fieldName', outValue || value)
}

describe('value(func, parser, parserArguments)', () => {
  it('should return the value in the target object', () => {
    testValueExtraction(eve.value, 'hi there')
  })
})

describe('intValue(func)', () => {
  it('should return an parsed int of the value in the target object', () => {
    testValueExtraction(eve.intValue, '42', 42)
    testValueExtraction(eve.intValue, '3.14', 3)
  })
})

describe('floatValue(func)', () => {
  it('should return an parsed float of  the value in the target object', () => {
    testValueExtraction(eve.floatValue, '3.14', 3.14)
  })
})
