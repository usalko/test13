import { expect } from 'chai'
import example07 from '../src/example07.js'

describe('#example7', function () {
   it ('Write a JavaScript function to parameterize a string.', function() {
    expect(example07("Robin Singh from Russia.")).to.equal('robin-singh-from-russia')
})
})