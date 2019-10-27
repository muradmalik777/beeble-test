import React, {useState} from 'react';
import {Container, Grid, TextField, Button, Snackbar, Grow} from '@material-ui/core';
import {post as POST} from '../helpers/Api';
import {useHistory} from 'react-router-dom';

const AddItems = () => {
    const [file, setFile] = useState({})
    const [title, setTitle] = useState("")
    const [quantity, setQuantity] = useState("")
    const [description, setDescription] = useState("")
    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState("Please fill out all the information")
    const [messageType, setMessageType] = useState("error")
    const history = useHistory()
    
    const fileChnage = (event) => {
        setFile(event.target.files[0])
    }

    const changeTitle = (event) => {
        setTitle(event.target.value)
    }

    const changeQuantity = (event) => {
        setQuantity(event.target.value)
    }

    const changeDescription = (event) => {
        setDescription(event.target.value)
    }

    const changeAlert = (msg=null, type=null) => {
        setAlert(!alert)
        setMessage(msg)
        setMessageType(type)
    }

    const submit = async () => {
        let formData = new FormData()
        if(title){
            formData.append('title', title)
            if(quantity){
                formData.append('quantity', quantity)
                if(description){
                    formData.append('description', description)
                    if(file && file.name){
                        formData.append('image', file)
                        try{
                            const resp = await POST('/items/', formData)
                            console.log(resp.data.success)
                            changeAlert("New Item added successfully", "success")
                            history.push("/")
                        } catch(error){
                            changeAlert("Server Error", "error")
                        }
                    } else{
                        changeAlert("Please select item image", "error")
                    }
                } else{
                    changeAlert("Please enter item description", "error")
                }
            } else{
                changeAlert("Please enter item quantity", "error")
            }
        } else{
            changeAlert("Please enter item title", "error")
        }
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
                            onChange={changeTitle}
                            variant="outlined"
                            className="input"
                            fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Quantity"
                            onChange={changeQuantity}
                            variant="outlined"
                            placeholder="enter item quantity"
                            type="number"
                            className="input"
                            fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Description"
                            placeholder="enter item desxription"
                            onChange={changeDescription}
                            multiline
                            fullWidth
                            variant="outlined"/>
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
                        <Button color="primary" variant="contained" size="large" className="f-r" onClick={submit}>Save</Button>
                    </Grid>
                </Grid>
            </div>

            <Snackbar 
                key={Math.random()}
                autoHideDuration={5000} 
                open={alert} 
                className={messageType} 
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{message}</span>} 
                onClose={() => {changeAlert("Server Error", "error")}} 
                TransitionComponent={Grow}/>
        </Container>
    )
}

export default AddItems;