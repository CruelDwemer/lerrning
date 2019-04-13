import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

interface IState {
    inputValue: string
}

class Main extends React.Component<{}, IState> {
    constructor (props: {}) {
        super(props);
        this.state = {
          inputValue: ""
        }
    }

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ inputValue: e.target.value })
    }

    private testFetch = async() => {
        const res = await fetch("/api/stats");
        if(res.ok) {
            console.log(await res.json());
            return
        }
        console.log("ne ok");
    }

    public render(): React.ReactNode {
        const {inputValue} = this.state;
        return (
            <div>
                <TextField value={inputValue} onChange={this.onChange} />
                <Button
                    onClick={this.testFetch}
                >Submit</Button>
            </div>
        );
    }
}

export default Main
