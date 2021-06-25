const evenlySpaced = require("./evenlySpaced");


test('2, 4, 6 is evenly spaced, it should return true', () => {
    expect(evenlySpaced(2, 4, 6)).toEqual(true)
})

test('3, 6, 12 is not evenly spaced, it should return false', () => {
    expect(evenlySpaced(3, 6, 12)).toEqual(false)
})

test('3, 6, 9 evenly spaced is true', () => {
    expect(evenlySpaced(3, 6, 9)).toEqual(true)
})

test('4, 12, 24 is not evenly spaced', () => {
    expect(evenlySpaced(4, 12, 24)).toEqual(false)
})
