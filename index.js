'use strict'
const foregroundColor = '#ebdbb2'
const backgroundColor = '#282828'
const black = '#928374'
const red = '#fb4934'
const green = '#b8bb26'
const yellow = '#fabd2f'
const blue = '#83a598'
const magenta = '#d3869b'
const cyan = '#8ec07c'
const white = '#fbf1c7'
const lightBlack = '#ebdbb2'
const lightRed = '#cc241d'
const lightGreen = '#98971a'
const lightYellow = '#d79921'
const lightBlue = '#458588'
const lightMagenta = '#b16286'
const lightCyan = '#689d6a'
const lightWhite = '#a89984'

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: '#665c54',
    cursorColor: '#fbf1c7',
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,

      // light
      lightBlack,
      lightRed,
      lightGreen,
      lightYellow,
      lightBlue,
      lightMagenta,
      lightCyan,
      lightWhite
    },
    css: `
      ${config.css || ''}
      .tabs_list,
      .tab_tab,
      .tabs_borderShim {
        color: ${foregroundColor} !important;
        border-color: transparent !important;
      }
      .tab_tab {
        background-color: transparent;
      }
      .tab_active {
        background-color: #32302f;
        border-bottom: 2px solid ${lightGreen} !important;
      }
		`
  })
}
