import styles from "./NavBar.module.scss";
import Container from "../Container/Container";

const NavBar = () => {
  return (
    <nav>
        <Container>
          <div className={styles.navbar}>
            <a href="/"><span className={styles.logo + ' fa fa-tasks'}></span></a>
            <ul className={styles.navigation}>
              <li><a href="/">Home</a></li>
              <li><a href="/favorite">Favorite</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
        </Container>
    </nav>
  );
};

export default NavBar;