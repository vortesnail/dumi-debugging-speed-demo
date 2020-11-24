// 金额格式化方法
export function formatMoney(val: string | number | undefined | readonly string[]) {
  if (val === undefined) {
    return ''
  }
  const valTmp = Number(val).toFixed(2)
  let integer = valTmp
  let decimal = '00'
  const decimalPointIndex = valTmp.indexOf('.')
  if (decimalPointIndex !== -1) {
    integer = valTmp.slice(0, decimalPointIndex)
    decimal = valTmp.slice(decimalPointIndex + 1)
  }

  let formatInteger = ''
  integer
    .split('')
    .reverse()
    .forEach((v, i, arr) => {
      formatInteger = v + formatInteger
      if ((i + 1) % 3 === 0 && arr.length !== i + 1) {
        formatInteger = `,${formatInteger}`
      }
    })

  return `${formatInteger}.${decimal}`
}

// 去除字符 ,
export function deleteDecimal(val: string | number | readonly string[] | undefined) {
  const valTmp = val?.toString()?.replace(',', '') || ''

  return valTmp
}
