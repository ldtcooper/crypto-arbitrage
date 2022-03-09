import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown({ options, value, onChange, label }) {
    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={value}
                    onChange={onChange}
                    label={label}
                >
                    {
                        options.map(({ val, text }) => (
                            <MenuItem value={val}>{text}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </div>
    );
}
