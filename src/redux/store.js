import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducers from './reducers';

const middleWare = [thunk];

export const store = configureStore({
  reducer: rootReducers,
  middleWare: composeWithDevTools(applyMiddleware(...middleWare)),
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
