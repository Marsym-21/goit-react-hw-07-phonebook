import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/fetchItemsRequest');
export const fetchContactsSuccess = createAction('contacts/fetchItemsSuccess');
export const fetchContactsError = createAction('contacts/fetchItemsError');
