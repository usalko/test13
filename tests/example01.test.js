import { expect } from 'chai'
import example01 from '../src/example01.js'

describe('#example1', function () {
   it ('Write a JavaScript function to check whether an \'input\' is a string or not.', function() {
    expect(example01('w3resource')).to.equal(true)
    expect(example01([1, 2, 4, 0])).to.equal(false)
})
})