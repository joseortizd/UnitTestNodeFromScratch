const { calcule } = require('../src/calculations');

test('Calculations', () => {
    expect(calcule(2,2)).toBe(4);
    expect(calcule(2,2)).toBe(5);
})