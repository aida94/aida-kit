import React from 'react';
import Dashboard from './components/dashboard/dashboard';
import Utilities from './components/utilities/utilities';
import Documentation from './components/documentation/documentation';
import Button from './components/components/buttons/button';
import Cards from './components/components/cards/cards';
import Alerts from './components/components/alerts/alerts';


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
    path: '/button',
    exact: false,
    name: 'Button',
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Button/>,
  },
  {
    path: '/cards',
    exact: false,
    name: 'Cards',
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Cards />,
  },

];


export default CompData;
