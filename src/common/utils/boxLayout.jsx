/* eslint-disable object-shorthand */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
import { Grid } from '@mui/material';

export const LayoutBox = ({ children, bg, height, bgrd }) => {
    return (
        <Grid
            container
            direction="row"
            sx={{ backgroundColor: bg, minHeight: height, background: bgrd }}
        >
            <Grid item xs={1} sm={1} md={2} lg={2} xl={2} />
            <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
                {children}
            </Grid>
            <Grid item xs={1} sm={1} md={2} lg={2} xl={2} />
        </Grid>
    );
};
