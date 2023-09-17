import styles from '../styles/Input.module.css'


interface InputProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Input(props: InputProps) {
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
        className={styles.input}
    />
    </div>
    )

}