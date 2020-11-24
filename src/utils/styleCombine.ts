// 根据值是否存在决定是否添加 css 属性
type CSSKeys = keyof CSSStyleDeclaration
type StyleObj = {
  [key in CSSKeys]: string | number | undefined
}

export function styleCombine(styleObj: Partial<StyleObj>, unit: string) {
  const styles: { [propName: string]: number | string } = {}

  for (const [k, v] of Object.entries(styleObj)) {
    if (v) {
      styles[k] = `${v}${unit}`
    }
  }

  return styles
}

// 颜色
export function getColorArr() {
  const basicColorArr = [
    '#5B8FF9',
    '#5AD8A6',
    '#5D7092',
    '#E2582C',
    '#ED9D3E',
    '#ef5b9c',
    '#444693',
    '#7f7522',
    '#f47920',
    '#2a5caa',
    '#f05b72',
    '#905a3d',
    '#b2d235',
    '#faa755',
    '#d71345',
    '#5c7a29',
    '#181d4b',
    '#b3424a',
    '#7fb80e',
    '#6a6da9',
    '#b22c46',
    '#1d953f',
    '#867892',
    '#007d65',
    '#ed1941',
    '#845538',
    '#225a1f',
    '#6f599c',
    '#69541b',
    '#f26522',
    '#c88400',
    '#27342b',
    '#c77eb5',
    '#ea66a6',
    '#005344',
    '#e0861a',
    '#892f1b',
    '#ffc20e',
    '#53261f',
    '#f47a55',
    '#ffd400',
    '#7bbfea',
    '#3c3645',
    '#b7704f',
    '#281f1d',
    '#1b315e',
    '#596032',
    '#a03939',
    '#b54334',
    '#006c54',
    '#7d5886',
    '#007947',
    '#d5c59f',
    '#ae6642',
    '#d2553d',
    '#cd9a5b',
    '#375830',
    '#411445',
    '#ffce7b',
    '#896a45',
    '#33a3dc',
    '#2468a2',
    '#1d1626',
    '#cbc547',
    '#f391a9',
  ]

  return basicColorArr
}

export function getColor(index: number) {
  const colorArr = [...getColorArr(), ...getColorArr(), ...getColorArr(), ...getColorArr()]
  return colorArr[index]
}
