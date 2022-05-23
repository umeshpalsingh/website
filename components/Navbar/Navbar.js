import { logo, navigation, navItem, navList } from './navbar.module.scss';
import Link from "next/link";
import Logo from '../../public/images/ups.svg';
import Image from 'next/image';

const Navbar = () => {

    return (
        <nav className={navigation}>
            <div id='logo' className={logo}>
                <Link href='/'>
                    <Image src={Logo} alt="Logo" width='40px' height='30px' />
                </Link>
            </div>
            <ul className={navList}>
                <li className={navItem}>
                    <Link href="/about"><a>About</a></Link>
                </li>
                <li className={navItem}>
                    <Link href="/projects"><a>Projects</a></Link>
                </li>
                <li className={navItem}>
                    <Link href="/contact"><a>Contact</a></Link>
                </li>
                <li className={navItem}>
                    <Link href="/"><a>Blog</a></Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;