import { expect } from 'chai'
import example12 from '../src/example12.js'

describe('#example12', function () {
   it ('Write a JavaScript program to display the current day and time in the following format.', function() {
    const dateTime = new Date()
    const weekday = Intl.DateTimeFormat('ru-RU', {weekday: 'long'}).format(dateTime)

    console.log(`${result}`)
    expect(example12()).to.equal(`Today is : ${weekday}
Current time is : 10 PM : 30 : 38`)
})
})