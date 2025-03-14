type MenuItem = {
  menu: string;
  submenus: { name: string; link: string }[];
};

const MENU_DATA: MenuItem[] = [
  {
    menu: 'About Us',
    submenus: [
      { name: '동아리 소개', link: '/about' },
      { name: 'Contact', link: '/contact' },
    ],
  },
  {
    menu: '커뮤니티',
    submenus: [
      { name: '공지사항', link: '/notice' },
      { name: '캘린더', link: '/calendar' },
    ],
  },
  {
    menu: '지원하기',
    submenus: [{ name: '지원하기', link: '/join' }],
  },
];

export default MENU_DATA;
