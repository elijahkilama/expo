/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-children-prop */
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { LayoutBox } from '../../utils/boxLayout';

export const Visibilities = () => {
    const theme = useTheme();
    const media = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <LayoutBox
            height={media ? 'auto' : '50vh'}
            bg="#293F6D"
            children={
                <Grid container direction="row" pt={4} pb={4} spacing={6}>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        xl={6}
                        container
                        justifyContent="center"
                    >
                        <img
                            src="https://res.cloudinary.com/dwz5lx2k7/image/upload/v1671894255/expor/6454365_preview_oqirwq.png"
                            alt="business"
                            height={media ? '100px' : '75%'}
                            loading={true}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        xl={6}
                        container
                        direction="column"
                        pt={6}
                        spacing={4}
                        mt={media ? 0 : 6}
                    >
                        <Grid
                            item
                            container
                            width={media ? null : '50%'}
                            justifyContent={media ? 'center' : 'flex-start'}
                        >
                            <Typography variant="h1" sx={{ color: '#FFF' }}>
                                Visibilit, Analytics, Intelligence
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            width={media ? null : '50%'}
                            justifyContent={media ? 'center' : 'flex-start'}
                        >
                            <Typography
                                variant="body1"
                                sx={{ color: '#FFF' }}
                                align={media ? 'center' : 'flex-start'}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam,
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            }
        />
    );
};
