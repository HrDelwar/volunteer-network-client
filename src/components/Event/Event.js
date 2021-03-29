import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    media: {
        height: 200,
    },
});

const Event = ({ event }) => {
    const classes = useStyles();
    const { name, image, _id, description } = event;

    const deleteItem = (id) => {
        const element = document.querySelector(`.grid-${id}`);
        const url = `https://limitless-tundra-84892.herokuapp.com/deleteEvent/${id}`
        axios.delete(url)
            .then(result => {
                if (result.data) element.style.display = 'none';
            })
            .catch(err => {
                // console.log(false);
            })
    }
    return (

        <Grid item xs={12} sm={6} md={4} lg={3} container justify="center" className={'grid-' + _id}>
            <Card className={classes.root} >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{name}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" onClick={() => deleteItem(_id)} color="secondary">Delete</Button>
                </CardActions>
            </Card>
        </Grid >
    );
};

export default Event;