import { getArticleBySlug } from "@/lib/tratamento-artigos";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./DetalheArtigo.module.css"

type Props = {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const { slug } = await params;
    const artigo = await getArticleBySlug(slug);

    if(!artigo){
        notFound();
    }

    return {
        title: `${artigo.titulo} | A Notícia `,
        description: artigo.description,
        openGraph: {
            title: `${artigo.titulo} | A Notícia `,
            description: artigo.description,
        }
    }
};

export default async function DetalheArtigo({params}: Props) {

    const { slug } = await params;

    const artigo = await getArticleBySlug(slug);

    if(!artigo) {
        notFound();
    }

    const { titulo, categoria, autor, data, conteudo } = artigo;

    return(
        <div className={styles.container}>
            <h1 className={styles.container__title}>{titulo}</h1>
            <Link className={styles.container__link} href={`/categoria/${categoria}`}>Voltar</Link>
            <p className={styles.container__info}>Artigo escrito por {autor}</p>
            <p className={styles.container__date}>{data}</p>
            <p>{conteudo}</p>
        </div>
    );

};