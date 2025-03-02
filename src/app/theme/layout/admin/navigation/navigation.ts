export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  role?: string[];
  isMainParent?: boolean;
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Dashboard',
        type: 'item',
        classes: 'nav-item',
        url: '/default',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'page',
    title: 'Pages',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'Authentication',
        title: 'Authentication',
        type: 'collapse',
        icon: 'ti ti-key',
        children: [
          // {
          //   id: 'login',
          //   title: 'Login',
          //   type: 'item',
          //   url: '/guest/login',
          //   target: true,
          //   breadcrumbs: false
          // },
          {
            id: 'register',
            title: 'Register',
            type: 'item',
            url: '/guest/register',
            target: true,
            breadcrumbs: false
          }
        ]
      }
    ]
  },
  // {
  //   id: 'elements',
  //   title: 'Elements',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'typography',
  //       title: 'Typography',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/typography',
  //       icon: 'ti ti-typography'
  //     },
  //     {
  //       id: 'color',
  //       title: 'Colors',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/color',
  //       icon: 'ti ti-brush'
  //     },
  //     {
  //       id: 'tabler',
  //       title: 'Tabler',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: 'https://tabler-icons.io/',
  //       icon: 'ti ti-plant-2',
  //       target: true,
  //       external: true
  //     }
  //   ]
  // },
  // {
  //   id: 'other',
  //   title: 'Other',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'sample-page',
  //       title: 'Sample Page',
  //       type: 'item',
  //       url: '/sample-page',
  //       classes: 'nav-item',
  //       icon: 'ti ti-brand-chrome'
  //     },
  //     {
  //       id: 'document',
  //       title: 'Document',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: 'https://codedthemes.gitbook.io/berry-angular/',
  //       icon: 'ti ti-vocabulary',
  //       target: true,
  //       external: true
  //     }
  //   ]
  // },



  
  //New Added menus and submenus
  {
    id: 'main-setup-menu',
    title: 'Main Setup Menu',
    type: 'collapse',
    icon: 'icon-navigation',
    children: [
      {
        id: 'act-list-setup',
        title: 'Act List Setup',
        type: 'item',
        url: '/act-list-setup',
        classes: 'nav-item',
        // target: true, //open in new tab
        icon: '',
        
      },
      {
        id: 'agency-type-setup',
        title: 'Agency type Setup',
        type: 'item',
        url: '/agency-type-setup',
        classes: 'nav-item',
        // target: true, //new tab
        icon: ''
      },
      {
        id: 'Agency sector Setup',
        title: 'Agency sector Setup',
        type: 'item',
        url: '/',
        classes: 'nav-item',
        icon: ''
      },
      {
        id: 'Agency master Setup',
        title: 'Agency master Setup',
        type: 'item',
        url: '/',
        classes: 'nav-item',
        icon: ''
      },
      {
        id: 'Agency act Setup',
        title: 'Agency act Setup',
        type: 'item',
        url: '/',
        classes: 'nav-item',
        icon: ''
      },
      {
        id: 'Agency type Setup',
        title: 'Agency type Setup',
        type: 'item',
        url: '/',
        classes: 'nav-item',
        icon: ''
      },
      {
        id: 'Benefit heading',
        title: 'Benefit heading',
        type: 'item',
        url: '/',
        classes: 'nav-item',
        icon: ''
      },
      {
        id: 'Board designation',
        title: 'Board designation',
        type: 'item',
        url: '/',
        classes: 'nav-item',
        icon: ''
      },
      {
        id: 'Employee Appointment type',
        title: 'Employee Appointment type',
        type: 'item',
        url: '/',
        classes: 'nav-item',
        icon: ''
      },
      {
        id: 'Employee category',
        title: 'Employee category',
        type: 'item',
        url: '/',
        classes: 'nav-item',
        icon: ''
      },
      {
        id: 'Employee level',
        title: 'Employee level',
        type: 'item',
        url: '/',
        classes: 'nav-item',
        icon: ''
      },
      {
        id: 'Employee category',
        title: 'Employee category',
        type: 'item',
        url: '/',
        classes: 'nav-item',
        icon: ''
      },
      {
        id: 'Unit',
        title: 'Unit',
        type: 'item',
        url: '/',
        classes: 'nav-item',
        icon: ''
      },
      {
        id: 'User type',
        title: 'User type',
        type: 'item',
        url: '/',
        classes: 'nav-item',
        icon: ''
      },
      {
        id: 'Vehicle type',
        title: 'Vehicle type',
        type: 'item',
        url: '/',
        classes: 'nav-item',
        icon: ''
      },

    ]
  }
];


