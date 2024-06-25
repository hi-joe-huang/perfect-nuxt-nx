import { thousandth } from './thousandth'

describe('轉換數值使用 thousandth', () => {
  it('正整數', () => {
    expect(thousandth(1000)).toEqual('1,000')
    expect(thousandth(1000000)).toEqual('1,000,000')
    expect(thousandth(1234567890)).toEqual('1,234,567,890')
  })

  it('負整數', () => {
    expect(thousandth(-1000)).toEqual('-1,000')
    expect(thousandth(-1000000)).toEqual('-1,000,000')
    expect(thousandth(-1234567890)).toEqual('-1,234,567,890')
  })

  it('小數', () => {
    expect(() => thousandth(1234.56)).toThrowError('輸入必須是整數')
    expect(() => thousandth(1234567.89)).toThrowError('輸入必須是整數')
  })

  it('零', () => {
    expect(thousandth(0)).toEqual('0')
  })

  it('非數字', () => {
    expect(() => thousandth('abc')).toThrowError('輸入必須是整數')
    expect(() => thousandth(null)).toThrowError('輸入必須是整數')
    expect(() => thousandth(NaN)).toThrowError('輸入必須是整數')
    expect(() => thousandth({})).toThrowError('輸入必須是整數')
    expect(() => thousandth([])).toThrowError('輸入必須是整數')
    expect(() => thousandth(undefined)).toThrowError('輸入必須是整數')
  })
})
