import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactsText, Tel, ButtonDelete } from './ContactItem.styled';
import { actions } from 'redux/actions';

const ContactName = ({ name, tel, id }) => {
  const dispatch = useDispatch();
  return (
    <ContactsText>
      {name}: <Tel>{tel}</Tel>
      <ButtonDelete onClick={() => dispatch(actions.deleteContact(id))}>
        Delete
      </ButtonDelete>
    </ContactsText>
  );
};

ContactName.propTypes = {
  name: PropTypes.string,
  tel: PropTypes.string,
  id: PropTypes.string,
};
export default ContactName;
