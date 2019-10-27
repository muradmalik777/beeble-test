import React, {useState, useEffect, createRef} from 'react';
import {Container, Grid, TextField, Button} from '@material-ui/core';

const AddItems = () => {
    const [file, setFile] = useState({})
    
    const fileChnage = (event) => {
        setFile(event.target.files[0])
        console.log(event.target.files[0])
    }
    const handleChange = (event) => {

    }

    return(
        <Container className="add-item">
            <h3>Add Item</h3>
            <div className="m-t">
                <Grid container direction="row" justify="space-evenly" spacing={3}>
                    <Grid item xs={6}>
                        <TextField
                            label="Title"
                            placeholder="enter item title"
                            onChange={handleChange}
                            variant="outlined"
                            className="input"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Quantity"
                            onChange={handleChange}
                            variant="outlined"
                            placeholder="enter item quantity"
                            type="number"
                            className="input"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Description"
                            placeholder="enter item desxription"
                            multiline
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <input accept="image/*" id="image" type="file" onChange={fileChnage} className="file-input"/>
                        <label htmlFor="image" className="m-b">
                            <Button variant="contained" color="default" component="span">Upload Image</Button>
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                        <span className="m-t">{file ? file.name : ""}</span>
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="primary" variant="contained" size="large" className="f-r">Save</Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default AddItems;