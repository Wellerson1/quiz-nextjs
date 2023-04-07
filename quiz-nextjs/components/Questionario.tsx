import { useState } from "react";
import QuestaoModel from "../model/questao";
import styles from '../styles/Questionario.module.css'
import Botao from "./Botao";
import Questao from "./Questao";

interface QuestionarioProps {
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irParaProximoPasso: () => void
    irParaProximoPassoTimer: () => void

}

export default function Questionario(props: QuestionarioProps) {

    function recebeResposta(indice: number) {
        if(!props.questao.respondida) {
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }

    return (
        <div className={styles.questionario}>
        <Questao valor={props.questao} 
                tempoEsgotado={props.irParaProximoPasso}
                tempoEsgotadoTimer={props.irParaProximoPassoTimer}
                recebeResposta={recebeResposta}/>
        <Botao texto={props.ultima ? 'Finalizar' : 'Próxima'} onClick={props.irParaProximoPasso}/> 
        </div>
    )
}