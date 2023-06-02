import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as contactsAction from './contactsAction';

const entities = createReducer([], {
  [contactsAction.fetchContactsSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [contactsAction.fetchContactsRequest]: () => true,
  [contactsAction.fetchContactsSuccess]: () => false,
  [contactsAction.fetchContactsError]: () => false,
});

const error = createReducer(null, {
  [contactsAction.fetchContactsError]: (_, action) => action.payload,
  [contactsAction.fetchContactsRequest]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
