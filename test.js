const { validasiNomor } = require('./index')

// console.log(validasiNomor('6285314811297'));
test('Cek Nomer Telkomsel', () => {
  expect(validasiNomor('6285314811297')).toBe('Telkomsel')
})