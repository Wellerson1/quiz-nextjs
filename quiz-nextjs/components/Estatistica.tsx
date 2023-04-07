import styles from "../styles/Estatistica.module.css"

interface EstatisticaProps {
    valor: any
    texto: string 
    corFonte?: string
    corFundo?: string
}

export function Estatistica(props: EstatisticaProps) {
    return (
        <div className={styles.estatistica}>
            <div className={styles.valor}style={{ 
            color: props.corFonte ?? '#333',
            backgroundColor: props.corFundo ?? '#FDD60F'}}>
                {props.valor}
            </div>
            <div className={styles.texto}>
                {props.texto}
            </div>
        </div>
    )
}