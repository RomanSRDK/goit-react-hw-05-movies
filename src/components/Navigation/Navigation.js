import { NavLink } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';

let activeClassName = {
  color: '#2196f3',
};

export default function Navigation() {
  return (
    <nav>
      <NavLink
        exact="true"
        to="/"
        className={styles.link}
        style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={styles.link}
        style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Movies
      </NavLink>
    </nav>
  );
}
