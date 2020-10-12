import { NbMenuItem } from '@nebular/theme';
import { NbIconLibraries } from '@nebular/theme';

export const MENU_ITEMS_ASSISTANT: NbMenuItem[] = [
  {
    title: 'Structure',
    expanded: true,
    children: [
      {
        title: "DRP",
        icon: 'plus-circle-outline',
        link: '/pages/structure-drp',
      },
      {
        title: "Bureau",
        icon: 'list-outline',
        link: '/pages/structure-bureau',
      },
      {
        title: "Caisse",
        icon: 'log-in-outline',
        link: '/pages/structure-caisse',
      }
    ],
  },
  {
    title: 'User',
    expanded: true,
    children: [
      {
        title: "Liste",
        icon: 'plus-circle-outline',
        link: '/pages/user-list',
      },
      {
        title: "Role",
        icon: 'list-outline',
        link: '/pages/user-role',
      }
    ],
  },
];


export const MENU_ITEMS_ADMIN: NbMenuItem[] = [
  {
    title: 'New Assitant',
    icon: 'shopping-cart-outline',
    link: '/pages/assistant-social-new',
    home: true,
  },
  {
    title: 'Assitant Social',
    icon: 'home-outline',
    link: '/pages/assistant-social',
  }
];