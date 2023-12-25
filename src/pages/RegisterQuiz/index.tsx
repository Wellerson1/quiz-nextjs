import { useEffect, useState } from "react";
import Botao from "../../components/Botao";
import CardQuestao from "../../components/CardQuestao";
import Input from "../../components/Input";
import Title from "../../components/Title";
import useDataBase from "../../data/hook/useDataBase";
import { Quiz } from "../../data/Quiz.model";
import {
  IconAdd,
  IconCheck,
  IconDelete,
  IconeAtencao,
} from "../../icons/Icons";
import styles from "../../styles/RegisterQuiz.module.css";
import route, { useRouter } from "next/router";
import useDataTrasnfer from "../../data/hook/useDataTransfer";

interface IProps {
  save: (quiz: Quiz) => Promise<void>;
  cancel: () => void;
}

export default function RegisterQuiz({ save, cancel }: IProps) {
  const [name, setName] = useState();
  const [duration, setDuration] = useState();
  const [erro, setErro] = useState("");

  const { create } = useDataBase();
  const [quiz, setQuiz] = useState<Quiz>();
  const { questoes, clearList, deleteItem } = useDataTrasnfer();

  async function saveQuiz() {
    if (validateForm()) {
      const quiz = {
        name: name,
        duration: duration,
        countQuestion: questoes.length,
        id: Math.floor(Math.random() * (100 - 1)) + 1,
        questoes: questoes,
      };
      setQuiz(quiz);
      await create(quiz);
      clearList();
      cancel();
    }
  }

  function cancelRegister() {
    clearList();
    cancel();
  }

  async function handleError(message: string, tempo) {
    setErro(message);
    setTimeout(() => setErro(null), tempo * 1000);
  }

  function validateForm() {
    if (!name) {
      handleError("A descrição é obrigatória", 3);
      return false;
    }

    if (!duration) {
      handleError("A duração é obrigatória", 3);
      return false;
    }
    return true;
  }

  function goToCreate() {
    route.push("/cadastro-questoes");
  }

  function deleteQuestion(id: number) {
    deleteItem(id)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.resgisterQuiz}>
          <Title titulo="Cadastro de Questionário" />
          <Input
            tipo="text"
            texto={`Descrição`}
            valor={name}
            valorMudou={setName}
          />
          <Input
            tipo="number"
            texto={`Tempo de resposta`}
            valor={duration}
            valorMudou={setDuration}
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
          {questoes.length ? (
            questoes.map((questao) => (
              <CardQuestao key={questao.id} deleteItem={deleteQuestion} id={questao.id} texto={questao.enunciado} />
            ))
          ) : (
            <div className={styles.erro}>{"Nenhuma questão cadastrada"}</div>
          )}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Botao texto="Salvar" icon={IconCheck} onClick={() => saveQuiz()} />
            <Botao
              texto="Cancelar"
              danger
              icon={IconDelete}
              onClick={() => cancelRegister()}
            />
          </div>
          {erro ? (
            <div className={styles.erro}>
              <span>{erro}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
