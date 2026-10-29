import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <h2 className={styles.footer__title}>
          A Notícia<span>.</span>
        </h2>

        <p className={styles.footer__notice}>
          Aviso: este site é um projeto demonstrativo. Todas as notícias e
          informações publicadas são fictícias e foram criadas apenas para fins
          de demonstração. Não representam acontecimentos reais.
        </p>

        <div className={styles.footer__bottom}>
          <p>
            © {new Date().getFullYear()} A Notícia. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
