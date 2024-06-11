import { expect } from 'chai'
import example03 from '../src/example03.js'

describe('#example3', function () {
   it ('Write a JavaScript function to split a string and convert it into an array of words.', function() {
    expect(example03("Robin Singh",4)).to.equal(["Robin", "Singh"])
})
})