import { useRouter } from "next/router"
import Botao from "../components/Botao"
import { Estatistica } from "../components/Estatistica"
import styles from "../styles/Resultado.module.css"

export default function Resultado() {
 
    const router = useRouter()
    const total = +router.query.total
    const certas = +router.query.certas
    const idQuiz = +router.query.idQuiz
    const percentual = Math.round((certas / total) * 100)

    return (
        <div className={styles.resultado}>
            <h1>Resultado Final</h1>
            <div style={{display: 'flex'}}>
            <Estatistica texto="Total respondidas" 
                        valor={total} />
            <Estatistica texto="Certas" 
                        valor={certas} 
                        corFundo={"#9CD2A4"} />
            <Estatistica texto="Percentual" 
                        valor={`${percentual}%`} 
                        corFundo={"#DE6A33"} />
            </div>
            <Botao href={`/${idQuiz}`} texto="Tentar Novamente" />

        </div>
    )
}