import * as React from 'react';

import { Consumer } from '../components/StatisticsPage';

export interface Props {

}

class StatisticsTable extends React.PureComponent<Props> {
    private value: any = undefined;

    componentDidMount() {
        if(this.value) {
            console.log(this.value);
            this.value.fetchStats();
        }
    }

    public render(): React.ReactNode {
        return (
            <Consumer>
                {(value) => {
                    this.value = value;
                    return(
                        <div>{JSON.stringify(value.data)}</div>
                    )
                }}
            </Consumer>
        );
    }
}

export default StatisticsTable;
