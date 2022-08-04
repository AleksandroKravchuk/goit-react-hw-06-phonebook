import Section from '../Section/Section';
import { Form } from '../Form/Form';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';

const App = () => {
  return (
    <>
      <Section title={'Phonebook'}>
        <Form />
      </Section>
      <Section title={'Contacts'}>
        <Filter></Filter>
        <Contacts />
      </Section>
    </>
  );
};

export default App;
