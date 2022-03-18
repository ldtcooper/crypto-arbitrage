import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FormControl } from '@mui/material';

export default function RangeSlider({ label, value, handleChange }) {
    const value = [startDate, endDate];

    return (
        <Box sx={{ width: 300 }}>
            <FormControl>
                <FormLabel component="legend">{label}</FormLabel>
                <Slider
                    getAriaLabel={() => label}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </FormControl>
        </Box>
    );
}
