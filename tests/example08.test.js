import { expect } from 'chai'
import example08 from '../src/example08.js'

describe('#example8', function () {
   it ('Write a JavaScript function to capitalize the first letter of a string.', function() {
    expect(example08('js string exercises')).to.equal('Js string exercises')
})
})