import React from 'react';
import { useDispatch } from "react-redux";
import { setStatusFilter } from 'redux/filterSlice';
import { FormFilter, Label } from './Filter.styled';
import { Input } from 'components/Forma/Forma.styled';


  const Filter = () => {
  const dispatch = useDispatch();

    const valueInputFilter = event => {
      
    dispatch(setStatusFilter(event.currentTarget.value));
  };
  return (
    <FormFilter>
      <Label>
        <Input
          type="name"
          onChange={valueInputFilter}
          placeholder="Please enter a name to search"
        />
      </Label>
    </FormFilter>
  );
  };


export default Filter;

