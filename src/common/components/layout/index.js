/* eslint-disable import/extensions */
/* eslint-disable react/no-children-prop */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { Grid } from '@mui/material';
import Navbar from './navbar';
import Footer from './footer';
import { LayoutBox } from '../../utils/boxLayout';

export const Layout = ({ children }) => {
    return (
        <Grid containe direction="column">
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                sx={{
                    minHeight: '10vh',
                }}
            >
                <Navbar />
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                sx={{
                    minHeight: '90vh',
                }}
            >
                {children}
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                sx={{
                    minHeight: '20vh',
                    backgroundColor: '#293F6D',
                }}
            >
                <LayoutBox children={<Footer />} />
            </Grid>
        </Grid>
    );
};
