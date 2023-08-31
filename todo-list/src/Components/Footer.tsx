import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Todo list by <span>Leonardo Barbanti</span> &copy; 2023
      </p>
    </footer>
  );
};

export default Footer;
