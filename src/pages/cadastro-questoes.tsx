import { useState } from "react";
import { DataBaseProvider } from "../data/context/DataBaseContext";
import useDataBase from "../data/hook/useDataBase";
import { BASE_URL } from "../functions/constantes";
import QuestaoModel from "../model/questao";
import route, { useRouter } from "next/router";
import { Quiz } from "../data/Quiz.model";
import  RegisterQuestoes  from "./RegisterQuiz/RegisterQuestion";
import Layout from "../components/template/Layout";

export default function CadastroQuestoes() {
  const [quiz, setQuiz] = useState();
  const { create } = useDataBase();
  const router = useRouter();

  async function enviarQuestao(questao: QuestaoModel) {
    console.log(questao);

    console.log(JSON.stringify(questao.toObject()));
    console.log(questao.toObject());

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(questao.toObject()),
    };

    await fetch(`${BASE_URL}/questao`, options).then((res) => {
      console.log(res);
    });
  }

  async function save(quiz: Quiz) {
    await create(quiz);
  }

  function goToList() {
    route.push("/cadastro");
  }

  return (
    <DataBaseProvider>
        <Layout titulo="Cadastro de quetão" subtitulo="Listagem e cadastro de questionários. Clique que 'Criar' para adicionar um novo questionário">
        <RegisterQuestoes save={save} cancel={goToList} />
        </Layout>
    </DataBaseProvider>
  );
}
