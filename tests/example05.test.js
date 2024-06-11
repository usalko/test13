import { expect } from 'chai'
import example05 from '../src/example05.js'

describe('#example5', function () {
   it ('Write a JavaScript function to convert a string into abbreviated form.', function() {
    expect(example05('Robin Singh')).to.equal("Robin S.")
})
})