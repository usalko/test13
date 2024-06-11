import { expect } from 'chai'
import example09 from '../src/example09.js'

describe('#example9', function () {
   it ('Write a JavaScript function to capitalize the first letter of each word in a string.', function() {
    expect(example09('js string exercises')).to.equal('Js String Exercises')
})
})