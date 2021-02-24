import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles(() => ({
    root: {
    },
    title:{
        textAlign: 'center',
        marginTop: '3vw'
    }
}));

export default function Cart() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.title} > Krepšelis </h1>
            <List>
                <ListItem>
                    <ListItemText
                        primary="Single-line item"
                    />
                </ListItem>,
            </List>
        </div>
    );
};

