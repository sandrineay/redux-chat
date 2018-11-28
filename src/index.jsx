// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// reducers
import messageListReducer from './reducers/message_list_reducer.js';
import channelListReducer from './reducers/channel_list_reducer.js';
import selectedChannelReducer from './reducers/selected_channel_reducer.js';
import currentUsernameReducer from './reducers/current_username_reducer.js';

// State and reducers
const reducers = combineReducers({
  messageList: messageListReducer,
  channelList: channelListReducer,
  selectedChannel: selectedChannelReducer,
  currentUsername: currentUsernameReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
