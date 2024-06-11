import { expect } from 'chai'
import example11 from '../src/example11.js'

describe('#example11', function () {
   it ('Write a JavaScript function to convert a string into camel case.', function() {
    expect(example11('JavaScript Exercises')).to.equal('JavaScriptExercises')
    expect(example11('JavaScript exercises')).to.equal('JavaScriptExercises')
    expect(example11('JavaScriptExercises')).to.equal('JavaScriptExercises')
})
})