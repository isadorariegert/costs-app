import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom'
import Container from './Container';

import logo from '../../img/costs_logo.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs"/>
                </Link>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to='/company'>Company</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to='/projects'>Projects</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;