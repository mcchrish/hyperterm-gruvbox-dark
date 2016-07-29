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
const gray = '#282828'
const brightBlack = '#ebdbb2'
const brightRed = '#cc241d'
const brightGreen = '#98971a'
const brightYellow = '#d79921'
const brightBlue = '#458588'
const brightMagenta = '#b16286'
const brightCyan = '#689d6a'
const brightWhite = '#a89984'

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: '#665c54',
    cursorColor: '#fbf1c7',
    colors: [
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      gray,

      // bright
      brightBlack,
      brightRed,
      brightGreen,
      brightYellow,
      brightBlue,
      brightMagenta,
      brightCyan,
      brightWhite
    ],
    css: `
      ${config.css || ''}
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor};
      }
      .tab_active {
        background-color: #32302f;
      }
      .tab_active:before {
        border-bottom-color: #98971a !important;
      }
		`
  })
}
