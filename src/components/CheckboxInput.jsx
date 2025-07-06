import React from 'react';
import { useDispatch } from 'react-redux';
import { setAnswer } from '../redux/surveySlice';
import { FormControlLabel, Checkbox, FormGroup, FormLabel } from '@mui/material';

const CheckboxInput = ({ question }) => {
  const dispatch = useDispatch();
  const handleChange = (option) => (e) => {
    dispatch({
      type: 'survey/setAnswer',
      payload: {
        id: question.id,
        value: e.target.checked ? [...(question.value || []), option] : (question.value || []).filter(o => o !== option),
      },
    });
  };
  return (
    <>
      <FormLabel>{question.label}</FormLabel>
      <FormGroup>
        {question.options.map((opt, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox onChange={handleChange(opt)} />}
            label={opt}
          />
        ))}
      </FormGroup>
    </>
  );
};

export default CheckboxInput;
