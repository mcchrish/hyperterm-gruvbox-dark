'use strict'
const foregroundColor = '#ebdbb2'
const backgroundColor = '#282828'
const black = '#282828'
const red = '#cc241d'
const green = '#98971a'
const yellow = '#d79921'
const blue = '#458588'
const magenta = '#b16286'
const cyan = '#689d6a'
const white = '#a89984'
const lightBlack = '#928374'
const lightRed = '#fb4934'
const lightGreen = '#b8bb26'
const lightYellow = '#fabd2f'
const lightBlue = '#83a598'
const lightMagenta = '#d3869b'
const lightCyan = '#8ec07c'
const lightWhite = '#ebdbb2'

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
      },
      .tab_tab {
        background-color: transparent;
      }
      .tab_active {
        background-color: #32302f;
      }
      .tab_active:before {
        border-bottom: 2px solid ${lightGreen} !important;
      }
		`
  })
}
