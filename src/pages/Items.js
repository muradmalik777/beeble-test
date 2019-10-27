import React, {useState, useEffect} from 'react';
import List from '../components/List/List';
import {Paper, Container} from '@material-ui/core';
import {getList as GET, deleteItem as DELETE} from '../helpers/Api';

const Items = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const resp = await GET("/items/")
        setItems(resp)
    }

    const deleteItem = async (id) => {
        const resp = await DELETE("/items", id)
        console.log(resp.data.success)
        fetchData()
    }

    return (
        <Container maxWidth="md" mt="3rem" direction="row" justify="center" className="box">
            <h3>List of all items</h3>
            <Paper>
                <List items={items} onDelete={deleteItem}/>
            </Paper>
        </Container>
    )
}

export default Items;