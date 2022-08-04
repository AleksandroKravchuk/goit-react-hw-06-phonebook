import React from 'react';
import { useDispatch } from 'react-redux';

import { FilterInput, Label } from './Filter.styled';
import { actions } from 'redux/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = evt => {
    dispatch(actions.chahgeFilter(evt.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name <FilterInput type="text" onChange={onChange} />
    </Label>
  );
};

export default Filter;
