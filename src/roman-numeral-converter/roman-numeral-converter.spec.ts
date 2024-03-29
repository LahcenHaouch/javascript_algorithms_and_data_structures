import { convertToRoman } from './roman-numeral-converter'

describe('roman-numeral-converter', () => {
  const TEST_CASES = [
    {
      input: 2,
      expected: 'II',
    },
    {
      input: 3,
      expected: 'III',
    },
    {
      input: 4,
      expected: 'IV',
    },
    {
      input: 5,
      expected: 'V',
    },
    {
      input: 9,
      expected: 'IX',
    },
    {
      input: 12,
      expected: 'XII',
    },
    {
      input: 16,
      expected: 'XVI',
    },
    {
      input: 29,
      expected: 'XXIX',
    },
    {
      input: 44,
      expected: 'XLIV',
    },
    {
      input: 45,
      expected: 'XLV',
    },
    {
      input: 68,
      expected: 'LXVIII',
    },
    {
      input: 83,
      expected: 'LXXXIII',
    },
    {
      input: 97,
      expected: 'XCVII',
    },
    {
      input: 99,
      expected: 'XCIX',
    },
    {
      input: 400,
      expected: 'CD',
    },
    {
      input: 500,
      expected: 'D',
    },
    {
      input: 501,
      expected: 'DI',
    },
    {
      input: 649,
      expected: 'DCXLIX',
    },
    {
      input: 798,
      expected: 'DCCXCVIII',
    },
    {
      input: 891,
      expected: 'DCCCXCI',
    },
    {
      input: 1000,
      expected: 'M',
    },
    {
      input: 1004,
      expected: 'MIV',
    },
    {
      input: 1006,
      expected: 'MVI',
    },
    {
      input: 1023,
      expected: 'MXXIII',
    },
    {
      input: 2014,
      expected: 'MMXIV',
    },
    {
      input: 3999,
      expected: 'MMMCMXCIX',
    },
  ]

  TEST_CASES.forEach(element => {
    const { input, expected } = element

    test(`convertToRoman(${input}) should return ${expected}`, () => {
      const result = convertToRoman(input)

      expect(result).toEqual(expected)
    })
  })
})
