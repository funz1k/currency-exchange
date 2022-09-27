import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function BasicSelect({ currency }) {
    const [exchange, setExchange] = useState([]);
    const [data, setData] = useState('')

    const handleChange = (event) => {
        setExchange(event.target.value);
    };

    const inputChange = (event) => {
        const howMuch = Number(event.target.value)
        if (!exchange) {
            return
        }
        const a = currency.find((item) => item.ccy === exchange)
        setData(a.buy * howMuch)
    }


    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Currency</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={exchange}
                label="exchange"
                onChange={handleChange}
            >
                {currency.map(({ ccy, base_ccy, buy, sale }, index) => (
                    <MenuItem key={index} value={ccy}>{ccy}</MenuItem>
                ))}
            </Select>
            <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue=""
                variant="filled"
                size="small"
                onChange={inputChange}
            />
            <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                value={data}
                variant="filled"
                size="small"
            />
        </FormControl>
    );
}