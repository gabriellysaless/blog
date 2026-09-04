import Grid from "@/components/Grid";
import { getArticlesByCategory } from "@/lib/tratamento-artigos";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "./Categoria.module.css"


type Props = {
    params: {
        categoria:string
    }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const { categoria } = await params;
    const artigos = await getArticlesByCategory(categoria);

    if(artigos.length === 0){
        notFound();
    }

    return {
        title: `${categoria} | A Notícia`,
    }
} 

export default async function Categoria({params}: Props) {
    const { categoria } = await params;
    const artigos = await getArticlesByCategory(categoria);

    return (
        <div className={styles.categoria}>
            <Grid artigos={artigos}/>
        </div>
    )
}