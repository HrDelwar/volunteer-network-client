import { Button, Container, FormControl, FormHelperText, Grid, Input, InputLabel, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddEvents = () => {
    document.title= "Add Event || Volunteer Network";
    const [success, setSuccess] = useState(false);
    const [uploadedImage, setUploadedImage] = useState({});
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        axios.post('https://limitless-tundra-84892.herokuapp.com/addEvent', data)
            .then(result => {
                setSuccess(result.data);
            })
            .catch(err => {
                console.log(err);
            })

    };

    const uploadImage = event => {

        const imageData = new FormData()
        imageData.set('key', '9ddb0ca249618eed0af3ca818a61f2db');
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (res) {
                setUploadedImage(res.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <Container style={{ marginTop: '1rem' }}>
            <Typography variant="h4" variantMapping={{ h4: 'h1' }} align="center">Add your awesome event!</Typography>


            <form onSubmit={handleSubmit(onSubmit)}>

                <TextField name="name"
                    error={errors.name}
                    helperText={errors.name && errors.name.message}
                    inputRef={register({
                        required: {
                            value: true,
                            message: 'Event must have name'
                        }
                    })} label="Event Name" fullWidth variant="outlined" margin="normal" />

                <TextField name="description"
                    error={errors.description}
                    helperText={errors.description && errors.description.message}
                    inputRef={register({
                        required: {
                            value: true,
                            message: 'Description must have be added'
                        }
                    })}
                    label="Description" fullWidth variant="outlined" margin="normal" />
                <TextField name="startDate" label="Start Date" defaultValue={moment(new Date).format('YYYY-MM-DD')} type="date" inputRef={register} fullWidth variant="outlined" margin="normal" />
                <TextField name="endDate" label="End Date" defaultValue={moment(new Date).format('YYYY-MM-DD')} helperText="Start date" type="date" inputRef={register} fullWidth variant="outlined" margin="normal" />
                <input hidden type="text" name="image" value={uploadedImage.display_url}
                    ref={register({
                        required: {
                            value: true,
                            message: 'Image is required'
                        }
                    })}
                />

                {uploadedImage.display_url && <Grid container justify="center" style={{ maxWidth: '200px' }}>
                    <img style={{ width: '100%', padding: '5px', boxShadow: '2px 2px 12px #999' }} src={uploadedImage.display_url} alt="" />
                </Grid>}
                <TextField
                    error={errors.image}
                    helperText={errors.image && errors.image.message}
                    onChange={uploadImage} label="Image" type="file" fullWidth variant="outlined" margin="normal" />

                <Button type="submit" variant="outlined" color="primary">Submit</Button>
            </form>
            { success && <Typography style={{color:'#0f09'}} variant="h4" variantMapping={{ h4: 'h1' }} align="center">Event add successfully!</Typography>}
        </Container>
    );
};

export default AddEvents;