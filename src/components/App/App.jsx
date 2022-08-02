// import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Section from '../Section/Section';
import { Form } from '../Form/Form';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import { actions } from '../../redux/actions';

const App = ({ contacts, filter, addContact, deleteContact, chahgeFilter }) => {
  const addName = (name, number) => {
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
      addContact(nameItem);
      Notify.success(`${name} added in contacts`);
    } else if (chekedName) {
      return Notify.failure(`${name} is already in contacts`);
    }
    if (chekedTel) {
      return Notify.failure(`Number ${number} is already in contacts`);
    }
  };

  const onChange = evt => {
    chahgeFilter(evt.currentTarget.value);
  };
  const getVisibleName = () => {
    const normalazedFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalazedFilter)
    );
  };

  const onDeleteContact = id => {
    deleteContact(id);
  };

  return (
    <>
      <Section title={'Phonebook'}>
        <Form onSubmit={addName}> </Form>
      </Section>
      <Section title={'Contacts'}>
        <Filter value={filter} onChange={onChange}></Filter>
        <Contacts
          name={getVisibleName()}
          deleteName={onDeleteContact}
        ></Contacts>
      </Section>
    </>
  );
};

const mapStateToProps = state => {
  return { contacts: state.contacts.items, filter: state.contacts.filter };
};
const mapDispatchProps = dispatch => {
  return {
    addContact: value => dispatch(actions.addContact(value)),
    deleteContact: value => dispatch(actions.deleteContact(value)),
    chahgeFilter: value => dispatch(actions.chahgeFilter(value)),
  };
};
export default connect(mapStateToProps, mapDispatchProps)(App);
