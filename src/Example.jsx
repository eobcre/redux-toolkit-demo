import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './components/Counter';

const Example = () => {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
};

export default Example;
