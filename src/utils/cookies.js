import Cookies from 'universal-cookie';

const cookiesLocal = new Cookies();

const options = {
  maxAge: 900000, // 10day,
  path: '/',
};

if (process.env.NODE_ENV === 'production') {
  options.domain = process.env.REACT_APP_DOMAIN;
}

export const cookies = {
  get: name => cookiesLocal.get(name, options),
  set: (name, value) => cookiesLocal.set(name, value, options),
  remove: name => cookiesLocal.remove(name, options),
  getAll: () => cookiesLocal.getAll(options),
};
