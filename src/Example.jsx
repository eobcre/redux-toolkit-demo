import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './components/Counter';

const Example = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default Example;
