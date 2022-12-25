/* eslint-disable react/jsx-key */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-children-prop */
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { LayoutBox } from '../../utils/boxLayout';
import { feature } from '../../constant/feature';

export const Feature = () => {
    const theme = useTheme();
    const media = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <LayoutBox
            height={media ? 'auto' : '50vh'}
            children={
                <Grid container direction="column" pt={4} pb={4} spacing={6}>
                    <Grid item>
                        <Typography align="center" variant="h1">
                            Check Out All Features
                        </Typography>
                    </Grid>
                    <Grid item container justifyContent="center">
                        <Typography align="center" variant="body1" width={media ? null : '50%'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </Grid>
                    <Grid item container direction="row" spacing={6}>
                        {feature.map((item) => (
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={item.id}>
                                <Card elevation={0}>
                                    <CardActions>
                                        <CardActionArea>
                                            <CardContent>
                                                <Grid
                                                    container
                                                    direction="column"
                                                    spacing={3}
                                                    alignItems={media ? 'center' : 'flex-start'}
                                                >
                                                    <Grid item>{item.icon}</Grid>
                                                    <Grid item>
                                                        <Typography
                                                            variant="h2"
                                                            sx={{ color: '#293F6D' }}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography
                                                            variant="body1"
                                                            align={media ? 'center' : 'left'}
                                                        >
                                                            {item.desciption}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button
                                                            variant="text"
                                                            sx={{
                                                                backgroundColor: 'transparent',
                                                                color: '#1D79FB',
                                                                textTransform: 'capitalize',
                                                            }}
                                                            endIcon={item.icon2}
                                                        >
                                                            {item.btn}
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </CardActionArea>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            }
        />
    );
};
