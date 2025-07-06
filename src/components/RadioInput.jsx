import React from 'react';
import { useDispatch } from 'react-redux';
import { setAnswer } from '../redux/surveySlice';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const RadioInput = ({ question }) => {
  const dispatch = useDispatch();
  return (
    <FormControl>
      <FormLabel>{question.label}</FormLabel>
      <RadioGroup
        onChange={(e) => dispatch(setAnswer({ id: question.id, value: e.target.value }))}
      >
        {question.options.map((opt, index) => (
          <FormControlLabel key={index} value={opt} control={<Radio />} label={opt} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioInput;
