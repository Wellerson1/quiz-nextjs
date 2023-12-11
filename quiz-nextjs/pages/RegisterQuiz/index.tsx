import { useEffect, useState } from "react";
import Botao from "../../components/Botao";
import CardQuestao from "../../components/CardQuestao";
import Input from "../../components/Input";
import Title from "../../components/Title";
import useDataBase from "../../data/hook/useDataBase";
import { Quiz } from "../../data/Quiz.model";
import { IconAdd, IconCheck, IconDelete } from "../../icons/Icons";
import QuestaoModel from "../../model/questao";
import styles from "../../styles/RegisterQuiz.module.css";
import route, { useRouter } from "next/router";
import useDataTrasnfer from "../../data/hook/useDataTransfer";
import questoes from "../api/bancoDeQuestoes";

interface IProps {
  save: (quiz: Quiz) => Promise<void>;
  cancel: () => void;
}

export function RegisterQuiz({ save, cancel }: IProps) {
  const [name, setName] = useState();
  const { create } = useDataBase();
  const [quiz, setQuiz] = useState<Quiz>();
  const router = useRouter();
  const { questoes, clearList } = useDataTrasnfer();

  async function saveQuiz() {
    const quiz = {
      name: name,
      countQuestion: 51,
      id: Math.floor(Math.random() * (100 - 1)) + 1,
      questoes: questoes,
    };
    const objetoSerializado = JSON.parse(JSON.stringify(quiz));

    setQuiz(quiz);
    await create(quiz);
    clearList();
    cancel();
  }

  function goToCreate() {
    route.push("/cadastro-questoes");
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.resgisterQuiz}>
          <Input
            tipo="text"
            texto={`Descrição`}
            valor={name}
            valorMudou={setName}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Botao
              texto="Criar questão"
              icon={IconAdd}
              secondary
              onClick={() => goToCreate()}
            />
          </div>
          <Title titulo="Lista de questões" />
          {questoes.length
            ? questoes.map((questao) => (
                <CardQuestao key={questao.id} texto={questao.enunciado} />
              ))
            : "nao encontrado"}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Botao texto="Salvar" icon={IconCheck} onClick={() => saveQuiz()} />
            <Botao
              texto="Cancelar"
              danger
              icon={IconDelete}
              onClick={() => cancel()}
            />
          </div>
        </div>
      </div>
    </>
  );
}
