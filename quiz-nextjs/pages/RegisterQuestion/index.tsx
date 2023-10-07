import { useState } from "react";
import Botao from "../../components/Botao";
import Input from "../../components/Input";
import useDataBase from "../../data/hook/useDataBase";
import { Quiz } from "../../data/Quiz.model";
import { IconAdd, IconDelete } from "../../icons/Icons";
import styles from "../../styles/RegisterQuiz.module.css";

interface IProps {
    save: (quiz: Quiz) => Promise<void>,
    cancel: () => void
}

export function RegisterQuiz({save, cancel}: IProps) {
  const [name, setName] = useState();
  const [quiz, setQuiz] = useState<Quiz>();
  const { create } = useDataBase();

  async function saveQuiz() {
    const quiz = {
        name: name,
        countQuestion: 5,
        id: Math.floor(Math.random() * (100 - 1)) + 1
    }
    setQuiz(quiz)
    await create(quiz)
    cancel();
  }
  return (
    <>
      <body className={styles.body}>
        <div className={styles.resgisterQuiz}>
          <Input
            tipo="text"
            texto={`Descrição`}
            valor={name}
            valorMudou={setName}
          />
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Botao
              texto="Salvar"
              icon={IconAdd}
              onClick={() => saveQuiz()}
            />
            <Botao
              texto="Cancelar"
              danger
              icon={IconDelete}
              onClick={() => cancel()}
            />
          </div>
        </div>
      </body>
    </>
  );
}
