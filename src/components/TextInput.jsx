import React from 'react';
import { useDispatch } from 'react-redux';
import { setAnswer } from '../redux/surveySlice';
import { TextField } from '@mui/material';

const TextInput = ({ question }) => {
  const dispatch = useDispatch();
  return (
    <TextField
      fullWidth
      label={question.label}
      onChange={(e) => dispatch(setAnswer({ id: question.id, value: e.target.value }))}
    />
  );
};

export default TextInput;
