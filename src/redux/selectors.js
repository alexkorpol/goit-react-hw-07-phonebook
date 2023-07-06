export const getFilter = state => state.filter;
export const getContacts = state => state.contacts.list;

export const visibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const filterToLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
    };

