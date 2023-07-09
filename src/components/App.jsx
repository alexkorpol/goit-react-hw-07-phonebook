import { useSelector } from 'react-redux';
import Contacts from './Contacts';
import Forma from './Forma';
import Filter from './Filter';
import Wrapper from './Wrapper';
import { Title } from './Wrapper/Wrapper.styled';
import { selectError, selectIsLoading } from 'redux/selectors';



function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <Forma />
      {isLoading && !error && <b>Request in progress...</b>}

      <Title>Contacts</Title>
      <Filter />
      <Contacts />
    </Wrapper>
  );
}

export default App;
