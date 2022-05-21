import { logo, navigation, navItem, navList } from './navbar.module.scss';
import Link from "next/link"

const Navbar = () => {

    return (
        <nav className={navigation}>
            <div id='logo' className={logo}>
                <Link href='/'>
                    <h1>Portfolio</h1>
                </Link>
            </div>
            <ul className={navList}>
                <li className={navItem}>
                    <Link href="/about"><a><span>01. </span>About</a></Link>
                </li>
                <li className={navItem}>
                    <Link href="/projects"><a><span>02. </span>Projects</a></Link>
                </li>
                <li className={navItem}>
                    <Link href="/contact"><a><span>03. </span>Contact</a></Link>
                </li>
                <li className={navItem}>
                    <Link href="/"><a><span>04. </span>Blog</a></Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;