import homeIcon from '../assets/home.svg';
// import aboutIcon from '../../assets/about.svg';
import categoryIcon from '../assets/category.svg';
import bookmarkIcon from '../assets/bookmark.svg';
import menuIcon from '../assets/menu.svg';
import ruqyahIcon from '../assets/ruqyah.svg';

const navbarList = [
    {
        name: 'Home',
        link: '/',
        icon: homeIcon,
    },
    {
        name: 'Category',
        link: '/category',
        icon: categoryIcon
    },
    {
        name: 'Bookmarks',
        link: '/bookmarks',
        icon: bookmarkIcon,
    },
    {
        name: 'Ruqyah',
        link: '/ruqyah',
        icon: ruqyahIcon,
    },
    {
        name: 'Menu',
        link: '/menu',
        icon: menuIcon,
    },
    /* {
        name: 'About',
        link: '/about',
        icon: aboutIcon,
    }, */
]

export default navbarList;