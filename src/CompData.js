import React from 'react';
import Dashboard from './components/dashboard/dashboard';
import Utilities from './components/utilities/utilities';
import Documentation from './components/documentation/documentation';
import Alerts from './components/components/alerts/alerts';
import Buttons from './components/components/buttons/buttons';
import Carousels from './components/components/carousels/carousels';
import Charts from './components/components/charts/charts';
import Collapses from './components/components/collapses/collapses';
import Dropdowns from './components/components/dropdowns/dropdowns';
import Forms from './components/components/forms/forms';
import Modals from './components/components/modals/modals';
import Notifications from './components/components/notifications/notifications';
import Panels from './components/components/panels/panels';
import Tables from './components/components/tables/tables';
import Tabs from './components/components/tabs/tabs';


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
    path: '/charts',
    exact: false,
    name: 'Charts',
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Charts/>,
  },
  {
    path: '/collapses',
    exact: false,
    name: 'Collapses',
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Collapses/>,
  },
  {
    path: '/dropdowns',
    exact: false,
    name: 'DropDowns',
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Dropdowns/>,
  },
  {
    path: '/forms',
    exact: false,
    name: 'Forms',
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Forms/>,
  },
  {
    path: '/modals',
    exact: false,
    name: 'Modals',
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Modals/>,
  },
  {
    path: '/notifications',
    exact: false,
    name: 'Notifications',
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Notifications/>,
  },
  {
    path: '/panels',
    exact: false,
    name: 'Panels',
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Panels/>,
  },
  {
    path: '/tables',
    exact: false,
    name: 'Tables',
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Tables/>,
  },
  {
    path: '/tabs',
    exact: false,
    name: 'Tabs',
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Tabs/>,
  },

];

  
export default CompData;
