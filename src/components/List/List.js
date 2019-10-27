import React, {Fragment} from 'react';
import './list.scss';
import {Grid, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const List = (props) => {
    
    const deleteItem = (id) => {
        props.onDelete(id)
    }
    return (
        <Fragment>
            { props.items && props.items.map (item => 
                <Grid key={item._id} container direction="row" justify="flex-start" className="list-item">
                    <Grid item xs={2}>
                        <img src={"http://localhost:8081/"+item.image} className="item-image" alt="Murad"/>
                    </Grid>
                    <Grid item xs={9}>
                        <h3>Title: {item.title}</h3>
                        <h4>Quantity: {item.quantity}</h4>
                        <p>{item.description}</p>
                    </Grid>
                    <Grid item xs={1} align-items-xs-flex-end="true">
                        <IconButton aria-label="delete" className="icon f-r" onClick={() => {deleteItem(item._id)}}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            )}
            { props.items.length === 0 && <h4>No items found</h4>}
        </Fragment>
    )
}

export default List;
