/* eslint-disable prefer-template */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
/* eslint-disable react/function-component-definition */
import {
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import React from 'react';
import { footerLink } from '../../constant/footerLinks';
import { socialLink } from '../../constant/socialLinks';

const Footer = () => {
    return (
        <Grid container direction="row" mt={2} mb={2} spacing={3}>
            {footerLink.map((item) => (
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4} key={item.id}>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary={
                                    <Typography variant="h2">
                                        {item.icon} {item.name}
                                    </Typography>
                                }
                            />
                        </ListItem>
                        {item.items.map((sub) => (
                            <ListItemButton>
                                {sub.icon ? <ListItemIcon>{sub.icon}</ListItemIcon> : null}
                                <ListItemText>
                                    <Typography variant="body2">
                                        {sub.title}
                                        {sub.email ? ' : ' + sub.email : null}
                                        {sub.address ? ' : ' + sub.address : null}
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        ))}
                    </List>
                </Grid>
            ))}
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Divider sx={{ backgroundColor: '#8C95A8' }} />
            </Grid>
            <Grid
                item
                container
                direction="row"
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                spacing={2}
            >
                <Grid item xs={12} sm={10} md={8} lg={10} xl={10}>
                    <Typography variant="body2">
                        Copyright &copy; 2022
                        <span style={{ color: 'orange' }}> Xport. All Right Reserved</span>
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={4}
                    md={4}
                    lg={2}
                    xl={2}
                    container
                    direction="row"
                    spacing={1}
                    // justifyContent="flex-end"
                >
                    {socialLink.map((item) => (
                        <Grid item key={item.id}>
                            <IconButton
                                sx={{
                                    border: '1px solid #8C95A8',
                                    backgroundColor: item.orange ? 'orange' : 'transparent',
                                }}
                            >
                                {item.icon}
                            </IconButton>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Footer;
