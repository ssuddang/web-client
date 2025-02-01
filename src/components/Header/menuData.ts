const MENU_DATA = [
  {
    menu: 'About Us',
    submenus: [
      { name: '동아리 소개', link: '/about' },
      { name: '조직', link: '/team' },
      { name: 'CI', link: '/ci' },
      { name: 'Contact', link: '/contact' },
    ],
  },
  {
    menu: '커뮤니티',
    submenus: [
      { name: '공지사항', link: '/notice' },
      { name: '캘린더', link: '/calendar' },
      { name: '주요 활동', link: '/activities' },
    ],
  },
  {
    menu: '지원하기',
    submenus: [{ name: '지원하기', link: '/join' }],
  },
];

export default MENU_DATA;
