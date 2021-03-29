import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';

const NotFound = () => {
    document.title= "404 || Volunteer Network";

    return (
        <Container>
            <Grid container justify="center" alignItems="center" style={{minHeight:'calc(100vh - 120px)'}}>
                <Grid item>
                    <Typography variantMapping={{h3:'h1'}} align="center" variant="h3">404</Typography>
                    <Typography variantMapping={{h4:'h1'}} align="center" variant="h4">Page Not Found!</Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default NotFound;