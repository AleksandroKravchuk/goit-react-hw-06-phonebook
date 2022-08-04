import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FormName, InputName, Label, Button } from './Form.styled';
import { actions } from 'redux/actions';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const onChangeInput = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const addName = () => {
    const nameItem = {
      name,
      id: nanoid(),
      number,
    };

    const normalizedName = name.toLowerCase();
    const chekedName = contacts.find(item => {
      return item.name.toLowerCase() === normalizedName;
    });
    const chekedTel = contacts.find(item => {
      return item.number === number;
    });

    if (!chekedName & !chekedTel) {
      dispatch(actions.addContact(nameItem));
      Notify.success(`${name} added in contacts`);
    } else if (chekedName) {
      return Notify.failure(`${name} is already in contacts`);
    }
    if (chekedTel) {
      return Notify.failure(`Number ${number} is already in contacts`);
    }
  };
  const hendelSubmit = evt => {
    evt.preventDefault();
    if (name === '' || number === '') {
      return;
    }
    addName();
    setName('');
    setNumber('');
  };

  return (
    <FormName onSubmit={hendelSubmit}>
      <Label>
        Name
        <InputName
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onChangeInput}
        />
      </Label>{' '}
      <Label>
        Number
        <InputName
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onChangeInput}
        />
      </Label>{' '}
      <Button type="submit">Add contact</Button>
    </FormName>
  );
};
