import React from 'react';
import { Item, List } from './Contacts.styled';
import { Button, Span } from 'components/Forma/Forma.styled';

import { useSelector, useDispatch } from 'react-redux';
import { visibleContacts } from 'redux/selectors';
import { pressDeleteContact } from 'redux/contactsSlice';



const Contacts = () => {
  const contacts = useSelector(visibleContacts);

  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name + ' : ' + number}
          <Button type="button"
            onClick={() => dispatch(pressDeleteContact(id))}
          >
            <Span>Delete</Span>
          </Button>
        </Item>
      ))}
    </List>
  );
};



export default Contacts;
