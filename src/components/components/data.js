import React from 'react';
import Dashboard from "./../dashboard/dashboard";
import Components from './../components/components';
import Utilities from './../utilities/utilities';
import Documentation from './../documentation/documentation';
import Button from './../components/buttons/button';
import Cards from './../components/cards/cards';
import Alerts from './../components/alerts/alerts';


const DataComponent = 
    [
        {
            path: '/',
            exact: true,
            name: 'Dashboard',
            icon: 'fa fa-user',
            showComponent: false,
            main: () => <Dashboard />
        },
        {
            path: '/components',
            exact: false,
            name: 'Components',
            icon: 'fa fa-user',
            showComponent: false,
            main: () => <Components />
        },
        {
            path: '/utilities',
            exact: false,
            name: 'Utilities',
            icon: 'fa fa-user',
            showComponent: false,
            main: () => <Utilities />
        },
        {
            path: "/documentation",
            exact: false,
            name: "Documentation",
            icon: 'fa fa-user',
            showComponent: false,
            main: () => <Documentation />
        },
        {
            path: "/button",
            exact: false,
            name: "Button",
            icon: 'fa fa-user',
            showComponent: true,
            main: () => <Button/>
        },
        {
            path: "/cards",
            exact: false,
            name: "Cards",
            icon: 'fa fa-user',
            showComponent: true,
            main: () => <Cards />
        },
        {
            path: "/alerts",
            exact: false,
            name: "Alert",
            icon: 'fa fa-user',
            showComponent: true,
            main: () => <Alerts />
        },
    ]

  
  export default DataComponent;




