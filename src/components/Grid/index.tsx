import { Artigo } from "@/types/types"
import Card from "../Card"
import styles from "./Grid.module.css"

type Props = {
    artigos: Artigo[]
}

const Grid = ({artigos} : Props) => {
    
    return (
        <div className={styles.grid}>
            {artigos.map((artigo) => <Card key={artigo.id} artigo={artigo}/> ) }
        </div>
    )
}

export default Grid;