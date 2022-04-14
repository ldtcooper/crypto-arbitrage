import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown({ name, options, value, handleChange, label }) {
    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={value}
                    onChange={handleChange}
                    label={label}
                    name={name}
                >
                    {
                        options.map(({ val, text }) => (
                            <MenuItem value={val} key={val}>{text}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </div>
    );
}
