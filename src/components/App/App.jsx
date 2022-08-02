// import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Section from '../Section/Section';
import { Form } from '../Form/Form';
// import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import { actions } from '../../redux/actions';

const App = ({ contacts, filter, addContact, deleteContact, chahgeFilter }) => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) || []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(
  //   () => localStorage.setItem('contacts', JSON.stringify(contacts)),
  //   [contacts]
  // );
  console.log(addContact());
  // console.log(deleteContact());
  console.log(contacts);

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
      console.log(nameItem);
      // addContact(nameItem);
      // setContacts([...contacts, nameItem]);

      Notify.success(`${name} added in contacts`);
    } else if (chekedName) {
      return Notify.failure(`${name} is already in contacts`);
    }
    if (chekedTel) {
      return Notify.failure(`Number ${number} is already in contacts`);
    }
  };

  // const onChange = evt => {
  //   setFilter(evt.currentTarget.value);
  // };
  // const getVisibleName = () => {
  //   const normalazedFilter = filter.toLowerCase();
  //   return contacts.filter(item =>
  //     item.name.toLowerCase().includes(normalazedFilter)
  //   );
  // };

  // const onDeleteName = id => {
  //   setContacts(prevState => prevState.filter(item => item.id !== id));
  // };

  return (
    <>
      <Section title={'Phonebook'}>
        <Form onSubmit={addName}> </Form>
      </Section>
      <Section title={'Contacts'}>
        <Filter value={filter}></Filter>
        {/* onChange={onChange} */}
        {/* <Contacts></Contacts> */}
        {/* name={getVisibleName()} */}
        {/* deleteName={onDeleteName} */}
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
