import React, { ReactNode } from 'react';

import { Grid, Container } from '@mui/material';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { MeuGrid } from './style';

interface LayoutDefaultProps {
    children: ReactNode,
    showHeader?: boolean
}

const LayoutDefault = ({ showHeader, children}: LayoutDefaultProps) => {
    return (
        <MeuGrid container>
            { showHeader && (
                <Grid item xs={12}>
                    <Header/>
                </Grid>
            )}

            <Grid item xs={12} container alignContent='center'>
                <Container>{children}</Container>
            </Grid>

            <Grid item xs={12} container alignItems='flex-end'>
                <Footer />
            </Grid> 
        </MeuGrid>
    )
}

export { LayoutDefault }

/*
EXEMPLO
    xs = tamanho < 576px
    sm = tamanho >= 576px
    md = tamanho >= 1000px
*/