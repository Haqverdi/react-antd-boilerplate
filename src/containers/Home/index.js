import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function Home(props) {
  const { t } = useTranslation();

  return <h2>{t('Home')}</h2>;
}

Home.propTypes = {};

export default Home;
