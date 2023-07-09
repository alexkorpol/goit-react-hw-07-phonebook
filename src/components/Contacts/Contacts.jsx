import React from 'react';
import { Item, List } from './Contacts.styled';
import { Button, Span } from 'components/Forma/Forma.styled';

import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'services/services-API';

const Contacts = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name + ' : ' + number}
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            <Span>Delete</Span>
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default Contacts;
