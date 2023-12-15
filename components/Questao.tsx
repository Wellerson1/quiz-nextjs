import QuestaoModel from "../model/questao";
import styles from "../styles/Questao.module.css"
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import Temporizador from "./Temporizador";

interface QuestaoProps {
    valor: QuestaoModel
    duration: number
    recebeResposta: (indice: number) => void
    tempoEsgotado: () => void
    tempoEsgotadoTimer: () => void
}

const letras = [
    { valor: 'A', cor: '#F2C866' },
    { valor: 'B', cor: '#F266BA' },
    { valor: 'C', cor: '#85D4F2' },
    { valor: 'D', cor: '#BCE596' },
]

export default function Questao(props: QuestaoProps) {
    const questao = props.valor

    function renderRespostas() {
        return questao.respostas.map((resposta, i) => {
            return <Resposta 
            key={`${questao.id}-${i}`}
            valor={resposta}
            letra={letras[i].valor}
            corFundoLetra={letras[i].cor}
            onResponse={props.recebeResposta}
            indice={i}/>
        })
    }
    
    return (
    <div className={styles.questao}>
        <Enunciado texto={questao.enunciado}/> 
        <Temporizador duracao={+props.duration} 
                        key={questao.id} 
                        tempoEsgotado={props.tempoEsgotadoTimer}/>
            {renderRespostas()}
    </div>
    )
}