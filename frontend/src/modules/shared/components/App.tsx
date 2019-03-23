import * as React from 'react';

import * as styles from './App.pcss';
import Main from '../../pages/startPage';
// import StatisticsPage from '../../statistics/components/StatisticsPage';

export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className={styles.container}>
        <Main />
      </div>
    );
  }
}
