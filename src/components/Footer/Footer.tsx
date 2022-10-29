import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <Typography variant='body2' align='center' sx={{ flexGrow: 1, fontSize: '12px', color: '#3a3a3a', margin: '20px'}}>
                Desenvolvido em Revisão
            </Typography>
        </Box>
    )
}

export { Footer }