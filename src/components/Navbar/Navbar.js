import React from 'react';
import './navbar.scss';
import {Grid, Button} from '@material-ui/core';
import {Link, useRouteMatch, useHistory} from 'react-router-dom';

const Navbar = () => {
    const home = useRouteMatch('/')
    const history = useHistory()

    const redirect = () => {
        history.push('/addItem')
    }

    return (
        <Grid container direction="row" justify="flex-start" alignItems="center" className="navbar">
            <Grid item xs={6}>
                <Link className={'logo'} to={'/'}>Beeble Test</Link>
            </Grid>
            <Grid item xs={6}>
                { home.url === "/" && <Button variant="contained" color={'primary'} className="add-item-btn" onClick={redirect}>Add Item</Button> }
            </Grid>
        </Grid>
    )
}

export default Navbar;