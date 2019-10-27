import React from 'react';
import './list.scss';
import {Grid, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import img from '../../assets/images/logo.svg'

const List = (props) => {
    return (
        <Grid container direction="row" justify="flex-start" className="list-item">
            <Grid item xs={2}>
                <img src={img} className="item-image" alt="Murad"/>
            </Grid>
            <Grid item xs={9}>
                <h3>Title</h3>
                <h4>Quantity: </h4>
                <p>Descrioption will be shown here</p>
            </Grid>
            <Grid item xs={1} align-items-xs-flex-end="true">
                <IconButton aria-label="delete" className="icon f-r">
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default List;
