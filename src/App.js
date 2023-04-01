import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Setup redux store</h1>
      </div>
    </Provider>
  );
};

export default App;
