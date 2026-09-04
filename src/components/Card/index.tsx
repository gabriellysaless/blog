import { Artigo } from "@/types/types";
import Link from "next/link";
import styles from "./Card.module.css"


type Props = {
    artigo: Artigo
} 

const Card = ({artigo} : Props) => {

    const { id, titulo, data, description, slug } = artigo; 
    return(
            <div key={id} className={styles.card}>
                <Link href={`/artigos/${slug}`}>
                    <div className={styles.card__content}>
                        <h2 className={styles.card__title}>{titulo}</h2>
                        <p className={styles.card__data}>{data}</p>
                        <p>{description}</p>
                    </div>
                </Link>
            </div>
    )
};

export default Card;