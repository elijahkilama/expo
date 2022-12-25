/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/react-in-jsx-scope */
import {
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { LayoutBox } from '../../utils/boxLayout';
import { best } from '../../constant/best';

export const Best = () => {
    const theme = useTheme();
    const media = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <LayoutBox
            height="80vh"
            children={
                <Grid container direction="column" spacing={6} pt={4} pb={4}>
                    <Grid item>
                        <Typography align="center" variant="h1">
                            Why We are Best?
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
                        justifyContent="center"
                    >
                        <Typography align="center" width={media ? '100%' : '60%'} variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam.
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
                        direction="row"
                        spacing={6}
                    >
                        {best.map((item) => (
                            // eslint-disable-next-line react/jsx-key
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Card elevation={1}>
                                    <CardActionArea>
                                        <Grid container direction="column" spacing={3}>
                                            <Grid
                                                item
                                                container
                                                justifyContent="center"
                                                mt={3}
                                                mb={2}
                                            >
                                                <Grid
                                                    item
                                                    sx={{
                                                        backgroundColor: item.bg,
                                                        padding: '15px',
                                                        borderRadius: '50px',
                                                    }}
                                                >
                                                    {item.icon}
                                                </Grid>
                                            </Grid>
                                            <CardContent>
                                                <Grid item>
                                                    <Typography
                                                        align="center"
                                                        variant="h2"
                                                        sx={{ color: '#293F6D' }}
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                </Grid>
                                                <Grid item container justifyContent="center">
                                                    <Typography
                                                        align="center"
                                                        variant="body1"
                                                        width={media ? '70%' : '70%'}
                                                    >
                                                        {item.description}
                                                    </Typography>
                                                </Grid>
                                            </CardContent>
                                        </Grid>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            }
        />
    );
};
