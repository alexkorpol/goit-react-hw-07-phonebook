// import { useState } from 'react';
// import useLocalStorage from './hook/useLocalStorage';
// import data from './data/data.json'
import Contacts from './Contacts';
import Forma from './Forma';
// import { nanoid } from 'nanoid'
// import { Notify } from 'notiflix';
import { Title } from './Wrapper/Wrapper.styled';
import Filter from './Filter';
import Wrapper from './Wrapper';

function App(){
    // const [contacts, setContacts] = useLocalStorage(data);
    // const [filter, setFilter] = useState('');

    // ! ====== Add contact to state ======
  //   const addNewContact = ({ nameNew, numberNew}) => {
  //     const newNameToLowerCase = nameNew.toLowerCase();


  //     const nameAndNumberIsExistIndex = (contacts.findIndex(({ name, number }) => (name.toLowerCase() === newNameToLowerCase && number === numberNew)))
  //       if (nameAndNumberIsExistIndex >= 0) {
  //       Notify.failure(`${contacts[nameAndNumberIsExistIndex].name} and number ${contacts[nameAndNumberIsExistIndex].number}   is already in list contacts`);
  //       return;
  //       }

  //     const numberIsExistIndex = (contacts.findIndex(({ number }) => (number === numberNew)))
  //   if(numberIsExistIndex >= 0) {
  //       Notify.failure(`This number ${contacts[numberIsExistIndex].number} is already in list contacts ${contacts[numberIsExistIndex].name}`);
  //       return;
  //     }


  //   const newContact = {
  //     id: nanoid(),
  //     name: nameNew,
  //     number: numberNew,
  //   };

  //   setContacts(prevState =>
  //     [...prevState, newContact]
  //   );
  // }

    // ! ====== Delete contact from state after click button 'Delete' ======

    // const deleteContact = id => {
    // setContacts(prevState =>
    //   prevState.filter(contact => contact.id !== id),

    //   );
    // };


    // ! ====== Write a content of filter to state from user ======
    // const valueInputFilter = event => {
    //   setFilter( event.currentTarget.value );
    // };


    // ! ====== Function-filter contacts for render ======
    // const visibleContacts = () => {
    // const seekLetterOfFilter = filter.toLowerCase();
    // return contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(seekLetterOfFilter)
    // );
    // };


      return (
        <Wrapper>
          <Title>Phonebook</Title>
          <Forma />
          <Title>Contacts</Title>
          <Filter />
          <Contacts />
        </Wrapper>

      )
    }

  export default App;

