import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        background: 'rgba(0,0,0,0.5)',
        margin: '20px',
        transition: "transform 0.15s ease-in-out",
    },
    media: {
        height: 250,
    },
    title:{
      fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize:'2rem',
        color: '#fff'
    },
    description:{
        fontFamily: 'Nunito',
        fontSize:'1.1rem',
        color:'#ddd'
    },
    cardHovered: {
        transform: "scale3d(1.05, 1.05, 1)"
    }
});

export default function ImageCard({card}) {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    const [state, setState] = useState({
        raised:false,
        shadow:1,
    });



    return (
        <Collapse in={checked}  {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
        <Card
            className={classes.root}
            classes={{root: state.raised ? classes.cardHovered : ""}}
            onMouseOver={()=>setState({ raised: true, shadow:3})}
            onMouseOut={()=>setState({ raised:false, shadow:1 })}
            raised={state.raised} zdepth={state.shadow}>
                <CardMedia
                    className={classes.media}
                    image={card.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h1"
                        className={classes.title}
                    >
                        {card.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.description}
                    >
                        {card.description}
                    </Typography>
                </CardContent>
        </Card>
        </Collapse>
    );
}