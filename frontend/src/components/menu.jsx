import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { useSelector, useDispatch } from 'react-redux';
import Checkboxes from './checkboxes';
import Dropdown from './dropdown';

import {
    updateInput,
    selectInputVal
} from '../reducers';

const drawerWidth = 240;

function Menu(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const currency = useSelector(selectInputVal('currency'));
    const exchanges = useSelector(selectInputVal('exchanges'));
    const dispatch = useDispatch();

    const drawer = (
        <div>
            <Dropdown 
                options={[
                    {val: 'BTC', text: 'Bitcoin'},
                    {val: 'ETH', text: 'Ethereum'},
                ]}
                value={currency || ''}
                label="Currency"
                handleChange={(e) => {
                    return dispatch(updateInput(e.target))
                }}
            />
            <Divider />
            <Checkboxes 
                options={[
                    { val: 'binance', text: 'Binance' },
                    { val: 'ftx', text: 'FTX' },
                    { val: 'coinbase', text: 'Coinbase' },
                    { val: 'kraken', text: 'Kraken' },
                    { val: 'huobei', text: 'Huobei Global' },
                ]}
                label='Exchanges'
            />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    id='menu'
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    id='menu'
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Menu;
