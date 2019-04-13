import * as React from "react";
import { connect } from "react-redux";
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { withStyles, WithStyles } from '@material-ui/styles';


import { setUsageValues as setUsageValuesAction } from "../../store/actions";
import { Usage } from "../../../constants";

type Styles = "container";

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}

interface IState {
    [Usage.hotWaterUsage]?: number,
    [Usage.coldWaterUsage]?: number,
    [Usage.electricityUsage]?: number
}

interface IProps extends WithStyles<Styles> {
    setUsageValues: typeof setUsageValuesAction
}

class AddUsage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {}
    }

    handleInput = (key: Usage) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) || e.target.value === "," || e.target.value === "") {
            this.setState({ [key]: e.target.value });
        }
    }

    saveUsage = () => {
        if(this.state.hotWaterUsage && this.state.coldWaterUsage && this.state.electricityUsage) {
            this.props.setUsageValues({...this.state});
        }
    }

    public render(): React.ReactNode {
        const {
            hotWaterUsage,
            coldWaterUsage,
            electricityUsage
        } = this.state;

        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <TextField
                    error={!hotWaterUsage}
                    value={hotWaterUsage || ""}
                    onChange={this.handleInput(Usage.hotWaterUsage)}
                    label="Горячая вода"
                />
                <TextField
                    error={!coldWaterUsage}
                    value={coldWaterUsage || ""}
                    onChange={this.handleInput(Usage.coldWaterUsage)}
                    label="Холодная вода"
                />
                <TextField
                    error={!electricityUsage}
                    value={electricityUsage || ""}
                    onChange={this.handleInput(Usage.electricityUsage)}
                    label="Электроэнергия"
                />
                <Button
                    onClick={this.saveUsage}
                >Save</Button>
            </div>
        )
    }
}

export default connect(null, {setUsageValues: setUsageValuesAction})(withStyles<{}>(styles)(AddUsage));
