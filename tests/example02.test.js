import { expect } from 'chai'
import example02 from '../src/example02.js'

describe('#example2', function () {
   it ('Write a JavaScript function to check whether a string is blank or not.', function() {
    expect(example02('')).to.equal(true)
    expect(example02('abc')).to.equal(false)
})
})