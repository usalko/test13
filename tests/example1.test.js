import { expect } from 'chai'
import example1 from '../src/example1.js'

describe('#example1', function () {
   it ('Write a JavaScript function to check whether an \'input\' is a string or not.', function() {
    expect(example1('w3resource')).to.equal(true)
    expect(example1([1, 2, 4, 0])).to.equal(false)
})
})