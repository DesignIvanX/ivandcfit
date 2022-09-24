import styles from "./styles.module.css";
const Index = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <h1 className={styles.logo}>IVANDCFIT</h1>
      </ul>
      <ul>
        <li>
          <a href="#">Calculadora</a>
        </li>
      </ul>
    </nav>
  );
};

export default Index;
