/**
 * 將正整數轉換成具有千位分隔符的字串
 *
 * @param number - 整數，如無輸入預設為 0
 * @returns 具有千位分隔符的字串
 * @example thousandth(1000) // '1,000'
 */

export function thousandth(number: number) {
  const isInteger = Number.isInteger(number)
  if (isInteger) {
    return number.toString().replace(/\B(?=(\d{3})+$)/g, ',')
  } else {
    throw new RangeError('輸入必須是整數')
  }
}
