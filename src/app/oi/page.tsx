'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import styled from '@emotion/styled';

export default function BasicSelect() {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{
            // Cor da borda
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#FF14B9' // Cor da borda
              },
              '&:hover fieldset': {
                borderColor: '#FF14B9' // Cor da borda ao passar o mouse
              },
              '&.Mui-focused fieldset': {
                borderColor: '#FF14B9' // Cor da borda quando o Select está focado
              }
            },
            // Cor da seta
            '& .MuiSelect-icon': {
              color: '#FF14B9' // Cor da seta
            },
            // Cor do texto
            '& .MuiSelect-select': {
              color: '#FFFFFF' // Cor do valor dentro do Select
            }
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
