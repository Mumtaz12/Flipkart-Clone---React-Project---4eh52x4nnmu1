import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import {Link} from "@mui/material";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: "linear-gradient(to bottom, #2874f0, #fff)",
        padding: theme.spacing(8, 4),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(12, 8),
        },
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.main,
        '&:hover': {
            textDecoration: 'underline',
            color: theme.palette.primary.light,
        },
    },
    listItem: {
        marginBottom: theme.spacing(1),
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

function Footer() {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Grid container>
                <Grid item xs={12} sm={3}>
                    <Typography className={classes.text}>Product</Typography>
                    <ul>
                        <li className={classes.listItem}>Create Websites</li>
                        <li className={classes.listItem}>Secure Cloud Hosting</li>
                        <li className={classes.listItem}>Engage Your Audience</li>
                        <li className={classes.listItem}>Website Support</li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography className={classes.text}>Company</Typography>
                    <ul>
                        <li className={classes.listItem}>About</li>
                        <li className={classes.listItem}>Careers</li>
                        <li className={classes.listItem}>Support</li>
                        <li className={classes.listItem}>Pricing</li>
                        <li className={classes.listItem}>FAQ</li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography className={classes.text}>Resources</Typography>
                    <ul>
                        <li className={classes.listItem}>Blog</li>
                        <li className={classes.listItem}>eBooks</li>
                        <li className={classes.listItem}>White papers</li>
                        <li className={classes.listItem}>Comparison Guide</li>
                        <li className={classes.listItem}>Website Grader</li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography className={classes.text}>Get Help</Typography>
                    <ul>
                        <li className={classes.listItem}>
                            <Link className={classes.link} href="#">
                                Help Center
                            </Link>
                        </li>
                        <li className={classes.listItem}>
                            <Link className={classes.link} href="#">
                                Contact Us
                            </Link>
                        </li>
                        <li className={classes.listItem}>
                            <Link className={classes.link} href="#">
                                Privacy Policy
                            </Link>
                        </li>
                        <li className={classes.listItem}>
                            <Link className={classes.link} href="#">
                                Terms of Service
                            </Link>
                        </li>
                    </ul>
                </Grid>
            </Grid>
            <Box mt={6} display="flex" alignItems="center" justifyContent="space-between" className={classes.root}>
                <Typography variant="body2">&copy; 2023 - 2024 ||
                    Created by{' '}
                    <Button className={classes.link}>
                        <a
                            className={classes.link}
                            target="_blank"
                            href="https://github.com/Mumtaz12"
                            rel="noopener noreferrer"
                        >
                            Mohammad Mumtaz
                        </a>
                        <span role="img" aria-label="heart" style={{ fontSize: 14 }}>
                    ❤️
                  </span>
                    </Button>
                </Typography>
            </Box>
        </Box>

        );
}
export default Footer;