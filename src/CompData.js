import React from 'react';
import Dashboard from './components/dashboard/dashboard';
import Utilities from './components/utilities/utilities';
import Documentation from './components/documentation/documentation';
import Alerts from './components/components/alerts/alerts';
import Buttons from './components/components/buttons/buttons';
import Carousels from './components/components/carousels/carousels';
import Collapses from './components/components/collapses/collapses';


// data object with all routes for each component
const CompData = [
  {
    path: '/',
    exact: true,
    name: 'Dashboard',
    icon: 'fa fa-user',
    showComponent: false,
    main: () => <Dashboard />,
  },
  {
    path: '/utilities',
    exact: false,
    name: 'Utilities',
    icon: 'fa fa-user',
    showComponent: false,
    main: () => <Utilities />,
  },
  {
    path: '/documentation',
    exact: false,
    name: 'Documentation',
    icon: 'fa fa-user',
    showComponent: false,
    main: () => <Documentation />,
  },
  {
    path: '/alerts',
    exact: false,
    name: 'Alert',
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Alerts />,
  },
  {
    path: '/buttons',
    exact: false,
    name: 'Button',
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Buttons/>,
  },
  {
    path: '/carousels',
    exact: false,
    name: 'Carousels',
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Carousels/>,
  },
  {
    path: '/collapses',
    exact: false,
    name: 'Collapses',
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Collapses/>,
  },

];

  
export default CompData;
