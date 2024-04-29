import { useEffect, useState } from "react";
import Botao from "../../components/Botao";
import Table from "../../components/Table";
import Title from "../../components/Title";
import useDataBase from "../../data/hook/useDataBase";
import { IconAdd, IconSearch } from "../../icons/Icons";
import styles from "../../styles/QuizList.module.css";
import route from 'next/router'
import useAuth from "../../data/hook/useAuth";

const QuizList = () => {
  const [data, setData] = useState<any>([]);
  const { list, create, deleteQuiz } = useDataBase();
  const { usuario } = useAuth();

  useEffect(() => {
    quizList()
  }, [usuario]);

  async function quizList() {
    console.log(usuario)
    const quiz = await list(usuario);
    setData(quiz);
  }

  async function criar() {
    await create();
  }

  function goToCreate() {
    route.push("/cadastro")
  }

  async function deleteItem(quiz: any) {
    await deleteQuiz(quiz);
    quizList();
  }

  return (
    <>
        <div className={styles.quiz}>
          <div className={styles.quizHeader}>
            <div className={styles.buttons}>
            <Botao
              texto="Consultar"
              secondary
              onClick={() => quizList()}
              icon={IconSearch}
            />
            <Botao texto="Criar" onClick={() => goToCreate()} icon={IconAdd} />
            </div>
          </div>
            {data?.length ? 
             <Table data={data} deleteItem={deleteItem} />
            : ''}
        </div>
    </>
  );
};

export default QuizList;
