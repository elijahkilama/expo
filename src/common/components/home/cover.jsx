/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/react-in-jsx-scope */
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { Button, useMediaQuery, useTheme, Grid, Typography } from '@mui/material';
import { LayoutBox } from '../../utils/boxLayout';

export const Cover = () => {
    const theme = useTheme();
    const media = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <LayoutBox
            height={media ? 'auto' : '90vh'}
            children={
                <Grid container direction="row" pt={4} pb={4} spacing={4}>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={4}
                        xl={4}
                        container
                        direction="column"
                        spacing={media ? 4 : 6}
                        mt={media ? 0 : 10}
                    >
                        <Grid item container>
                            <Typography variant="h1">
                                Single platform for your global supply chain
                            </Typography>
                        </Grid>
                        <Grid item container>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                        </Grid>
                        <Grid item container direction="row" spacing={2}>
                            <Grid item>
                                <Button>Contact Us</Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    endIcon={<EastRoundedIcon />}
                                    variant="text"
                                    sx={{
                                        backgroundColor: 'transparent',
                                        color: '#0AB79E',
                                        textTransform: 'capitalize',
                                        '&.MuiButton-root:hover': {
                                            backgroundColor: 'transparent',
                                            color: '#06B79E',
                                        },
                                    }}
                                >
                                    Learn More
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={8}
                        md={8}
                        lg={8}
                        xl={8}
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <img
                            alt="img"
                            loading="lazy"
                            src="https://res.cloudinary.com/dwz5lx2k7/image/upload/v1671913036/export/Container-Ship-Transparent-File_1-removebg-preview_ow7zly.png"
                            height="auto"
                            width="100%"
                        />
                    </Grid>
                </Grid>
            }
        />
    );
};
