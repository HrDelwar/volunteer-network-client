import { CircularProgress, Container, Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';


const Home = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://limitless-tundra-84892.herokuapp.com/allEvents')
            .then(res => {
                setEvents(res.data);
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <Container>
            <Grid container spacing={3} justify="center" style={{ marginTop: '1rem' }}>
                {
                    loading ?
                        <Grid container alignItems="center" justify="center" style={{minHeight:'calc(100vh - 150px)',}}>
                            <CircularProgress />
                        </Grid>
                        :
                        events.map(event => <Event key={event._id} event={event} />)
                }
            </Grid>
        </Container>
    );
};

export default Home;