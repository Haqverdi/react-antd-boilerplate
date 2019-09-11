import { createAction } from 'redux-starter-kit';

export const apiStart = createAction('apiStart');

export const apiEnd = createAction('apiEnd');

export const accessDenied = createAction('accessDenied');

export const apiError = createAction('apiError');
