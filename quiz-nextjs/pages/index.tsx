import { useState } from "react";
import Questao from "../components/Questao";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";


const questaoMock = new QuestaoModel(1, 'Melhor time?', [
  RespostaModel.errada('Flamengo'),
  RespostaModel.errada('Vasco'),
  RespostaModel.errada('Botafogo'),
  RespostaModel.certa('Fluminense')

])

export default function Home() {

const [questao, setQuestao] = useState(questaoMock)

  function recebeResposta(indice: number) {
    setQuestao(questao.responderCom(indice))
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
    <Questao valor={questao} recebeResposta={recebeResposta}/>
    </div>
  )
}
