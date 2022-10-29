import React from 'react';
import { Grid, Fab } from '@mui/material';
import { Add }  from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    // aqui deve ser declarado os hooks e todas as funções que executam esses hooks
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/register')
    }


    return (
        <Grid item>
            <Grid item container spacing={2}>
                <Grid item xs={12} md={6}>
                    <h1>Entradas</h1>
                </Grid>
                <Grid item xs={12} md={6}>
                    <h1>Saídas</h1>
                </Grid>
            </Grid>


            <Fab color="primary" aria-label="add" onClick={handleClick}>
                <Add />
            </Fab>
        </Grid>
    )
}

export { Home }