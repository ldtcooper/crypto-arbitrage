import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';

const pages = [
    { label: 'Current Arbitrage', route: '/' },
    { label: 'Historical Data', route: '/history' }
];

const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Crypto Arbitrage
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row' }}>
                        {pages.map(({ label, route }) => (
                            <MUILink key={label} to={route} component={Link}>
                                <Typography textAlign="center" sx={{ color: 'white', marginLeft: '7px'}}>{label}</Typography>
                            </MUILink>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <a href="https://github.com/ldtcooper/crypto-arbitrage">
                            <GitHubIcon />
                            <span className="accessibility-text">Check out our code on GitHub</span>
                        </a>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;