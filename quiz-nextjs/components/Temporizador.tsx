import { CountdownCircleTimer } from "react-countdown-circle-timer"
import styles from "../styles/Temporizador.module.css"


interface TemporizadorProps {
    key: any
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {

    const duracao = props.duracao
    return( 
    <div className={styles.temporizador}>
        <CountdownCircleTimer 
            duration={duracao}
            size={120}
            isPlaying
            onComplete={props.tempoEsgotado}
            colors={['#BCE596', '#F7B801', '#ED827A']}
            colorsTime={[duracao, duracao*0.66, 0]}>
            {({remainingTime}) => remainingTime}
        </CountdownCircleTimer>
    </div>
    )
}