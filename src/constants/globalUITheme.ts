import { createMuiTheme, Theme } from '@material-ui/core/styles'

export const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#008ede',
      main: '#029df4',
      light: '#35b1f6',
      contrastText: '#fff',
    },
    error: {
      dark: '#f77581',
      main: '#f55361',
      light: '#e7303f',
      contrastText: '#fff',
    },
    warning: {
      dark: '#d1a908',
      main: '#dcb823',
      light: '#e3c64f',
      contrastText: '#fff',
    },
    info: {
      dark: '#84cd7e',
      main: '#65c15e',
      light: '#41bc38',
      contrastText: '#fff',
    },
    success: {
      dark: '#0097b8',
      main: '#0aaace',
      light: '#3bbbd8',
      contrastText: '#fff',
    },
  },
  spacing: 4,
})
