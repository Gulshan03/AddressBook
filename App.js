import React from 'react';
import Navigation from './src/navigation/RootNavigation';
import {Provider} from 'react-redux';
import MyStore from './src/redux/Store';

const App = () => {
  return (
    <Provider store={MyStore}>
      <Navigation/>
    </Provider>
  );
};

export default App;
