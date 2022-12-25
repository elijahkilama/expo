/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/order */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { LayoutBox } from '../../utils/boxLayout';
import { Grid, TextField, Typography, InputAdornment, Button } from '@mui/material';

export const Subscribe = () => {
    return (
        <LayoutBox
            bg="#FCFBFF"
            height="40vh"
            children={
                <Grid
                    container
                    direcion="column"
                    gap={4}
                    mt={10}
                    sx={{
                        paddingLeft: {
                            sm: '180px',
                            md: '200px',
                            lg: '150px',
                            xl: '140px',
                        },
                        paddingRight: {
                            sm: '180px',
                            md: '200px',
                            lg: '150px',
                            xl: '140px',
                        },
                    }}
                >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography align="center" variant="h1">
                            Get the lastest tips for your business
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography align="center" variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint mollit
                            anim id est laborum.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        container
                        sx={{
                            position: 'relative',
                            zIndex: 23,
                            boxShadow:
                                ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        }}
                        // width="50%"
                    >
                        <TextField
                            fullWidth={true}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <Button
                                            sx={{
                                                textTransform: 'none',
                                                height: '30px',
                                                padding: '20px',
                                                backgroundColor: '#1D79FB',
                                                '&.MuiButton-root:hover': {
                                                    backgroundColor: '#1D79FB',
                                                },
                                            }}
                                        >
                                            Subscribe
                                        </Button>
                                    </InputAdornment>
                                ),
                                disableUnderline: true,
                            }}
                            variant="filled"
                            placeholder="Email Address"
                            sx={{
                                border: '1px solid #FFF',
                                '& .MuiFilledInput-root': {
                                    backgroundColor: '#FFF',
                                    height: '50px',
                                    paddingBottom: '18px',
                                    paddingRight: '2px',
                                },
                            }}
                        />
                    </Grid>
                </Grid>
            }
        />
    );
};
