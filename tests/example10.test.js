import { expect } from 'chai'
import example10 from '../src/example10.js'

describe('#example10', function () {
   it ('Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.', function() {
    expect(example10('AaBbc')).to.equal('aAbBC')
})
})