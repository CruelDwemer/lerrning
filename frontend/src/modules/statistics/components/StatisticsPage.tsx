import * as React from 'react';

import * as urls from '../../shared/core/urls';
import { StatisticsSchema } from '../types.d';
import StatisticsTable from '../StatisticsTable';

export interface Props {

}

export interface State {
    data?: StatisticsSchema,
    fetchStats: Function,
}

const { Provider, Consumer } = React.createContext<Partial<State>>({});

class StatisticsPage extends React.PureComponent<Props, State> {
    public readonly state: State = {
        fetchStats: this.fetchStats.bind(this),
    };

    public render(): React.ReactNode {
        return (
            <Provider value={this.state}>
                <StatisticsTable />
            </Provider>
        );
    }

    private async fetchStats() {
        const response: Response = await fetch(urls.stats());
        const data: StatisticsSchema = await response.json();
        this.setState({ data });
    }
}

export { Consumer };

export default StatisticsPage;
