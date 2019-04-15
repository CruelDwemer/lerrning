import * as React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/styles';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import createSagaMiddleware from 'redux-saga';
import blueGrey from '@material-ui/core/colors/blueGrey';
import cyan from '@material-ui/core/colors/cyan';
import {withStyles, WithStyles} from '@material-ui/styles';

// import * as styles from './App.pcss';
import Main from '../../pages/startPage';
import AddUsage from '../../pages/AddUsage';
import ChartPage from '../../pages/chartPage/ChartPage';
import fillUsageReducer from '../../store/reducers';
import rootSaga from "../../store/sagas";
// import StatisticsPage from '../../statistics/components/StatisticsPage';

type Styles = "container";

const styles = {
    container: {
        textAlign: "center",
        backgroundColor: blueGrey[700]
    }
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(fillUsageReducer, applyMiddleware(sagaMiddleware));
const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[200],
    },
    secondary: {
      main: cyan[200]
    }
  }
});

sagaMiddleware.run(rootSaga);

class App extends React.Component<WithStyles<Styles>> {
  public render(): React.ReactNode {
    const {classes} = this.props;
    return (
      <MuiThemeProvider theme={theme} >
        <Provider store={store}>
          <div className={classes.container}>
            <Router>
              <ChartPage />

              <Route path="/" exact component={Main} />
              <Route path="/usage" component={AddUsage} />
              <Route path="/tariffs" component={Tariffs} />
            </Router>
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default withStyles<{}>(styles)(App);

class Usage extends React.Component {
  render() {
    return <div>usage</div>
  }
}

class Tariffs extends React.Component {
  render() {
    return <div>tariffs</div>
  }
}
