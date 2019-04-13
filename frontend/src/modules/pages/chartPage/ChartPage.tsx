import * as React from "react";
import Drawer from '@material-ui/core/Drawer';
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import {Link} from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Description from '@material-ui/icons/Description';

interface IProps {
    children?: any
}

class ChartPage extends React.Component {
    render () {
        const {children} = this.props;
        return (
            <div>
                <Drawer
                    variant="permanent"
                    anchor="left"
                >
                    <List>
                        <Link to="/">
                            <ListItem button>
                                <>
                                    <Description />
                                    main
                                </>
                            </ListItem>
                        </Link>
                        <Link to="/usage">
                            <ListItem button>
                                <>
                                    <Description />
                                    usage
                                </>
                            </ListItem>
                        </Link>
                        <Link to="/tariffs">
                            <ListItem button>
                                <>
                                    <Description />
                                    tariffs
                                </>
                            </ListItem>
                        </Link>
                    </List>
                </Drawer>
                {children && children}
            </div>
        )
    }
}

export default ChartPage
