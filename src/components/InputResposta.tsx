import styles from '../styles/InputResposta.module.css'


interface InputProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    respostaCerta?: boolean
    valorMudou?: (valor: any) => void
}

export default function InputResposta(props: InputProps) {
    return ( 
    <div className={styles.campo}>
    <label className={styles.label}>
        {props.texto}
    </label>
    <input
        type={props.tipo ?? 'text'}
        value={props.valor}
        readOnly={props.somenteLeitura}
        onChange={e => props.valorMudou?.(e.target.value)}
        className={props.respostaCerta ? styles.respostaCerta : styles.respostaErrada}
    />
    </div>
    )

}