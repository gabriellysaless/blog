import Link from "next/link";
import Title from "../Title";
import styles from "./Header.module.css"

const Header = () => {

    const categorias = [
    { slug: "mundo", nome: "Mundo" },
    { slug: "brasil", nome: "Brasil" },
    { slug: "tecnologia", nome: "Tecnologia" },
    { slug: "negocios", nome: "Negócios" },
    { slug: "economia", nome: "Economia" },
];

    const links = categorias.map((categoria) => 
        <Link 
            className={styles.header__link} 
            key={categoria.slug} 
            href={`/categoria/${categoria.slug}`}
        >
                {categoria.nome}
        </Link>
    )

    return(
        <header className={styles.header}>
            <h1 className={styles.header__title}>A Notícia<span>.</span></h1>
            <Link className={styles.header__link} href="/">Início</Link>
            {links}
        </header>
    )
};

export default Header;