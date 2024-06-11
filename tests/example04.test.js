import { expect } from 'chai'
import example04 from '../src/example04.js'

describe('#example4', function () {
    it ('Write a JavaScript function to extract a specified number of characters from a string.', function() {
        expect(example04("Robin Singh",4)).to.equal("Robi")
    })
})