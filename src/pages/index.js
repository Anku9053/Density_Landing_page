// index.js
import React from 'react';
import Layout from '../components/layout.js'; // Note the correct case for the import

import HomePage from './Homepage.js'; // Note the correct case for the import

const IndexPage = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default IndexPage;
