/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/no-children-prop */
/* eslint-disable import/order */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable react/function-component-definition */
import { AppBar, Menu, Box, IconButton, Toolbar, Typography, MenuItem, Grid } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import { navLink } from '../../constant/navLinks';
import { Link } from 'react-router-dom';
import { LayoutBox } from '../../utils/boxLayout';
import { SiExpo } from 'react-icons/si';
import { IconContext } from 'react-icons';

const Navbar = () => {
    return (
        <AppBar position="fixed" color="primary" elevation={0}>
            <LayoutBox
                children={
                    // <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <IconContext.Provider
                            value={{
                                color: '#06B79E',
                                size: '30px',
                            }}
                        >
                            <SiExpo />
                        </IconContext.Provider>
                        <Typography variant="h1">Xport</Typography>
                        <div
                            style={{
                                flexGrow: 1,
                            }}
                        />
                        <Grid
                            sx={{
                                // paddingLeft: '40px',
                                display: { xs: 'none', md: 'block' },
                            }}
                        />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {navLink.map((page, index) => (
                                <Link to={page.link} key={index} style={{ textDecoration: 'none' }}>
                                    <MenuItem
                                        // onClick={handleCloseNavMenu}
                                        sx={{ my: 2, display: 'block' }}
                                    >
                                        <Typography variant="subtitle1">{page.name}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Box>

                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <MenuIcon sx={{ color: '#0AB79E' }} />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(null)}
                                // onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {navLink.map((page, index) => (
                                    <Link to={page.link} key={index}>
                                        <MenuItem

                                        // onClick={handleCloseNavMenu}
                                        >
                                            <Typography textAlign="center">{page.name}</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                    // </Container>
                }
            />
        </AppBar>
    );
};

export default Navbar;
