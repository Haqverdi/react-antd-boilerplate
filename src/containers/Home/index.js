import React from 'react';
// import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return <h2>{t('Welcome React antd boilerplate')}</h2>;
}

Home.propTypes = {};

export default Home;
