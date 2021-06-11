import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import MaterialUiTest from './pages/MaterialUiTest'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple, yellow } from '@material-ui/core/colors'
import Layout from './components/Layout'

const theme = createMuiTheme({

  pallette: {
    primary: {
      main: '#c1c1c1'
    },
    secondary: yellow
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: '400',
    fontWeightRegular: ' 500',
    fontWeightMedium: '600',
    fontWeightBold: '700'
  }

})

function App() {
  return (

    <ThemeProvider theme={theme}>

      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/test">
              <MaterialUiTest />
            </Route>
          </Switch>
        </Layout>

      </Router>

    </ThemeProvider>
  );
}

export default App;
