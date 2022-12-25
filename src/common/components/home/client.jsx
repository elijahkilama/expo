/* eslint-disable react/jsx-key */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-children-prop */
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Divider,
    Grid,
    Typography,
} from '@mui/material';
import { LayoutBox } from '../../utils/boxLayout';
import { clients } from '../../constant/clientData';

export const Client = () => {
    return (
        <LayoutBox
            height="80vh"
            children={
                <Container>
                    <Grid container direction="column" pt={4} pb={4} gap={6}>
                        <Grid item>
                            <Typography align="center" variant="h1">
                                Our Client and Footprint
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            lg={12}
                            xl={12}
                            container
                            justifyContent="center"
                        >
                            <Typography align="center" variant="body1" width="50%">
                                Clients includes Banks, Non - Banking Financial Institutions,
                                Insurance, companies, Broker Dealers, Payment Processors, Check
                                Cashers
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid container direction="row" spacing={6}>
                                {clients.map((item) => (
                                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={item.id}>
                                        <Card elevation={1}>
                                            <CardActionArea>
                                                <Grid container direction="column" spacing={2}>
                                                    <Grid item>
                                                        <CardMedia
                                                            component="img"
                                                            src={item.img}
                                                            sx={{
                                                                height: {
                                                                    xs: '100px',
                                                                },
                                                                objectFit: 'contain',
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography
                                                            align="center"
                                                            variant="h2"
                                                            color="primary"
                                                        >
                                                            {item.continent}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Divider variant="middle" />
                                                    </Grid>

                                                    <CardActions>
                                                        <CardContent>
                                                            <Grid
                                                                item
                                                                container
                                                                direction="column"
                                                                // gap={3}
                                                                spacing={3}
                                                                sx={{ padding: '20px' }}
                                                            >
                                                                {item.country.map((sub) => (
                                                                    <Grid item>
                                                                        <Typography variant="body1">
                                                                            {sub.name}
                                                                        </Typography>
                                                                    </Grid>
                                                                ))}
                                                            </Grid>
                                                        </CardContent>
                                                    </CardActions>
                                                </Grid>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            }
        />
    );
};
