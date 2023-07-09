import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/filterSlice';
import { FormFilter, Label } from './Filter.styled';
import { Input } from 'components/Forma/Forma.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const valueInputFilter = event => {
    dispatch(setStatusFilter(event.target.value));
  };

  return (
    <FormFilter>
      <Label>
        <Input
          type="name"
          value={value}
          onChange={valueInputFilter}
          placeholder="Please enter a name to search"
        />
      </Label>
    </FormFilter>
  );
};

export default Filter;
