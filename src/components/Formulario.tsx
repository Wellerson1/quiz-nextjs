import { useEffect, useState } from "react";
import QuestaoModel from "../model/questao";
import Input from "./Input";
import styles from '../styles/Formulario.module.css'
import RespostaModel from "../model/resposta";
import Botao from "./Botao";
import questoes from "../pages/api/bancoDeQuestoes";

interface FormProps {
    questao?: QuestaoModel,
    enviarQuestao: (questao) => void
}

export default function Formulario(props: FormProps) {
    const [questao, setQuestao] = useState<QuestaoModel>()
    const [enunciado, setEnunciado] = useState('')
    const [respostas, setRespostas] = useState<RespostaModel[]>([])
    const [resposta1, setResposta1] = useState('')
    const [resposta2, setResposta2] = useState('')
    const [resposta3, setResposta3] = useState('')
    const [resposta4, setResposta4] = useState('')

    function enviarQuestao() {
        setRespostas(
        [   new RespostaModel(resposta1, false, false), 
            new RespostaModel(resposta2, false, false),
            new RespostaModel(resposta3, false, false),
            new RespostaModel(resposta4, false, false)
        ])
        const questao = new QuestaoModel(8, enunciado, respostas)

        props.enviarQuestao(questao)
    }  

    function renderRespostas() {
        return <div className={styles.respostas}>
                <Input 
                tipo= 'text'
                texto={`Resposta 1`}
                valor={resposta1}
                valorMudou={setResposta1}
                />
                <Input 
                tipo= 'text'
                texto={`Resposta 2`}
                valor={resposta2}
                valorMudou={setResposta2}
                />
                <Input 
                tipo= 'text'
                texto={`Resposta 3`}
                valor={resposta3}
                valorMudou={setResposta3}
                />
                <Input 
                tipo= 'text'
                texto={`Resposta 4`}
                valor={resposta4}
                valorMudou={setResposta4}
                />
            </div>

    }

    return (
        <div className={styles.formulario}>
        <Input 
            tipo= 'text'
            texto="Enunciado"
            valor={enunciado}
            valorMudou={setEnunciado}
            />
            {renderRespostas()}
        <Botao texto={"Enviar questão"} onClick={() => enviarQuestao()}/> 
        </div>
    )
}