import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Checkboxes({ values, label, handleChange }) {
    return (
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel component="legend">{label}</FormLabel>
                <FormGroup>
                    {
                        values.map(({ val, name }) => (
                            <FormControlLabel
                                control={
                                    <Checkbox checked={gilad} onChange={handleChange} name={name} />
                                }
                                label={name}
                            />
                        ))
                    }
                </FormGroup>
            </FormControl>
        </Box>
    );
}
