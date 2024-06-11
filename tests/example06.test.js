import { expect } from 'chai'
import example06 from '../src/example06.js'

describe('#example6', function () {
    it ('Write a JavaScript function that hides email addresses to prevent unauthorized access.', function() {
        expect(example06('robin_singh@example.com')).to.equal("robin...@example.com")
    })
})