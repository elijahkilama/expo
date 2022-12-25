/* eslint-disable react/jsx-key */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-children-prop */
import {
    Container,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { LayoutBox } from '../../utils/boxLayout';
import { need } from '../../constant/need';

export const Needs = () => {
    const theme = useTheme();
    const media = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <LayoutBox
            height="50vh"
            bgrd="linear-gradient(90deg, rgba(80,128,220,1) 0%, rgba(90,200,234,1) 100%);"
            children={
                <Container>
                    <Grid container direction="row" pt={4} pb={4}>
                        <Grid item xs={8} sm={6} md={6} lg={6} xl={6}>
                            <Grid container direction="column" spacing={6}>
                                <Grid item>
                                    <Typography variant="h1" sx={{ color: '#FFF' }}>
                                        {need.title}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1" sx={{ color: '#FFF' }}>
                                        {need.description}
                                    </Typography>
                                </Grid>
                                <Grid item container direction="row">
                                    {need.items.map((item) => (
                                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                            <List>
                                                <ListItem>
                                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                                    <ListItemText
                                                        primary={
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: '#FFF' }}
                                                            >
                                                                {item.title}
                                                            </Typography>
                                                        }
                                                    />
                                                </ListItem>
                                            </List>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={0}
                            sm={6}
                            md={6}
                            lg={6}
                            xl={6}
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            <img
                                src="https://res.cloudinary.com/dwz5lx2k7/image/upload/v1671908686/export/png-transparent-air-transportation-cargo-freight-transport-logistics-logistic-people-mode-of-transport-intermodal-freight-transport-thumbnail-removebg-preview_jhakvs.png"
                                alt="img"
                                height="auto"
                                width={media ? '80%' : '100%'}
                                loading="lazy"
                            />
                        </Grid>
                    </Grid>
                </Container>
            }
        />
    );
};
