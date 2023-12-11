import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Questionario from "../components/Questionario";
import useDataBase from "../data/hook/useDataBase";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";


const questaoMock = new QuestaoModel(1, 'Melhor time?', [
  RespostaModel.errada('Flamengo'),
  RespostaModel.errada('Vasco'),
  RespostaModel.errada('Botafogo'),
  RespostaModel.certa('Fluminense')
])

const BASE_URL = "http://localhost:8080"
const BASE_URL_JS = "http://localhost:3000/api"

export default function Home() {
const route = useRouter()
const [questao, setQuestao] = useState(questaoMock)
const [questoes, setQuestoes] = useState([]);
const [idsQuestoes, setIdsQuestao] = useState([])
const [qtdRespostaCerta, setQtdRespostaCerta] = useState(0)
const { list } = useDataBase();

  async function consultarIdsQuestoes(idQuiz) {
    const docList: any = await list();
    const quiz = docList.find(doc => 
      doc.id === idQuiz
    )
    const questoes = quiz.questoes;
    const ids = questoes.map(questao => questao.id)
    setQuestoes(questoes);
    setIdsQuestao(ids)
  }

  async function consultarQuestao(id) {
    const questoaoRes = questoes.find(q => q.id === id)
    const questao = QuestaoModel.criarUsandoObjeto(questoaoRes)

  //  const res = await fetch(`${BASE_URL_JS}/questoes/${id}`)
  //  const json = await res.json()
  //  const questao = QuestaoModel.criarUsandoObjeto(json)
    setQuestao(questao)
  }

  useEffect(() => {
    const id = +route.query.index
    if(id) {
      consultarIdsQuestoes(id);
    }
  }, [route.query.index])

  useEffect(() => {
    idsQuestoes.length > 0 && consultarQuestao(idsQuestoes[0])
  }, [idsQuestoes])

  async function getQuiz(id: number) {
    const docList: any = await list();
    const quiz = docList.find((doc) => {
      doc.id === id
    })
    const questoes = quiz.questoes;
    const ids = questoes.map(questao => questao.id)
    setQuestao(QuestaoModel.criarUsandoObjeto(quiz.questoes[0]))
  }

  function recebeResposta(questao: QuestaoModel) {
    setQuestao(questao)
    setQtdRespostaCerta(qtdRespostaCerta + (questao.acertou ? 1 : 0))
  }

  function idProximaQuestao() {
    const proxId = idsQuestoes.indexOf(questao.id) + 1
    return idsQuestoes[proxId]
  }

  function irParaProximoPasso() {
    const proximoId = idProximaQuestao()
    proximoId ? irParaProximaQuestao(proximoId) : finalizar() 
  }

  function irParaProximoPassoTimer() {
    if(!questao.respondida) {
      const proximoId = idProximaQuestao()
      proximoId ? irParaProximaQuestao(proximoId) : finalizar() 
    }
  }

  function irParaProximaQuestao(id: number) {
    consultarQuestao(id)
  }

  function finalizar() {
    route.push({
      pathname: "/resultado",
      query: {
        total: idsQuestoes.length,
        certas: qtdRespostaCerta
      }
    })
  }

  return questao ? (   
    <>
    <Questionario 
      questao={questao}
      questaoRespondida={recebeResposta}
      irParaProximoPasso={irParaProximoPasso}
      irParaProximoPassoTimer={irParaProximoPassoTimer}
      ultima={!idProximaQuestao()}/>
    </> 
   ) : false
}
