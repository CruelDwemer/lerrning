import * as React from 'react';

import * as styles from './App.pcss';
import StatisticsPage from '../../statistics/components/StatisticsPage';


export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className={styles.container}>
        <StatisticsPage />
      </div>
    );
  }
}
