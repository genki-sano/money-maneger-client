import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Page from 'components/05_pages/PaymentPage'
import { theme } from 'constants/globalUITheme'
import { store } from 'stores/configureStore'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <CssBaseline />
            <Page />
          </StyledThemeProvider>
        </MaterialThemeProvider>
      </StylesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
