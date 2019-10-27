import React, {useState, useEffect} from 'react';
import List from '../components/List/List';
import {Paper, Container} from '@material-ui/core';

const Items = (props) => {
    const [items, setItems] = useState([])

    return (
        <Container maxWidth="md" mt="3rem" direction="row" justify="center" className="box">
            <h3>List of all items</h3>
            <Paper>
                <List items={items} />
            </Paper>
        </Container>
    )
}

export default Items;