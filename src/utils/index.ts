export const numberWithDelimiter = (num: number): string => {
  return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
}
