import React from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';

const Header = () => {
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='secondary'>
                <Toolbar>
                    <IconButton
                        size="medium"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Controle de dinheiro
                    </Typography>
                    <Typography variant="h6">
                        Saldo atual R$ {" "}0,00
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export { Header };