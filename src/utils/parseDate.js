import moment from 'moment';

export const parseDate = date => moment(date).format('L HH:mm');
