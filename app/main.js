import 'assets/css/bootstrap.min.css';
import 'assets/css/inspinia_admin-v2.3.style.css';
import 'assets/css/inspinia_admin-v2.3.font-awesome.css';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';

ReactDOM.render(
  <AppRouter />,
  document.querySelector('main')
);
