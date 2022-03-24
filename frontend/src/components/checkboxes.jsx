import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Checkboxes({ options, label, handleChange, values}) {
    return (
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel component="legend">{label}</FormLabel>
                <FormGroup>
                    {
                        options.map(({ val, text }) => (
                            <FormControlLabel
                                key={val}
                                control={
                                    <Checkbox checked={values[val] || false} onChange={handleChange} name={val}/>
                                }
                                label={text}
                            />
                        ))
                    }
                </FormGroup>
            </FormControl>
        </Box>
    );
}
