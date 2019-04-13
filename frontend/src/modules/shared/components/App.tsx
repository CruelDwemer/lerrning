import * as React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import * as styles from './App.pcss';
import Main from '../../pages/startPage';
import AddUsage from '../../pages/AddUsage';
import ChartPage from '../../pages/chartPage/ChartPage';
import fillUsageReducer from '../../store/reducers';
// import StatisticsPage from '../../statistics/components/StatisticsPage';

const store = createStore(fillUsageReducer);

const theme = createMuiTheme();

export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <ThemeProvider theme={theme} >
      <Provider store={store}>
        
          <div className={styles.container}>
            <Router>
              <ChartPage />

              <Route path="/" exact component={Main} />
              <Route path="/usage" component={AddUsage} />
              <Route path="/tariffs" component={Tariffs} />
            </Router>
          </div>
        
      </Provider>
      </ThemeProvider>
    );
  }
}

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
