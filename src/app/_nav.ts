interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  profils:string[];
  badge?: NavBadge;
  title?: boolean;  
  children?: NavData;
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems= [
  {
    name: 'Orange Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'Actif'
    },
    profils: ["technique"],
  },
 
 
  {
    name: 'Administration',
    url: '/Administration',
    icon: 'icon-wrench',
    children: [
      {
        name: 'Compaign',
        url: '/base/compaign',
        icon: 'icon-graph',
        profils: ["technique"],

      },
      
      {
        name: 'Configurations',
        url: '/base/Configuration',
        icon: 'icon-speedometer',
        profils: ["technique"],

      },
      {
        name: 'Failure',
        url: '/base/Failure',
        icon: 'fa fa-list',
        profils: ["technique"],

      },
      {
        name: 'Gift',
        url: '/base/Gift',
        icon: 'fa fa-suitcase',
        profils: ["technique"],

      },
      {
        name: 'Client',
        url: '/base/Client',
        icon: 'fa fa-cc-amex',

        profils: ["technique"],

      },
      {
        name: 'GIFT_TYPE',
        url: '/base/GIFT_TYPE',
        icon: 'fa fa-behance-square',
        profils: ["technique"],

      },
      {
        name: 'USERS',
        url: '/base/USERS',
        icon: 'fa fa-user-plus',
        profils: ["technique"],

      },
      {
        name: 'map_contact_number',
        url: '/base/map_contact_number',
        icon: 'fa fa-google-wallet',
        profils: ["technique"],

      },
      {
        name: 'one_time_password',
        url: '/base/one_time_password',
        icon: 'fa fa-first-order',
        profils: ["technique"],

      },
      {
        name: 'spin_destination',
        url: '/base/spin_destination',
        icon: 'fa fa-indent',
        profils: ["technique"],

      },
      {
        name: 'Spin_destination_failed',
        url: '/base/Spin_destination_failed',
        icon: 'fa fa-wheelchair',
        profils: ["technique"],

      },   
    ]
  },
  {
    name: ' FAILURE_STATISTIIQUE ',
    url: '/Failure_Statistique',
    icon: 'icon-pie-chart',
    profils: ["technique"],

  },
  {
    name: 'GITF_STATISTIQUE',
    url: '/Gift_Statistique',
    icon: 'fa fa-balance-scale',
    profils: ["technique"],

  },
  
];
