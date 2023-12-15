import { useEffect, useState } from "react";
import Botao from "../../components/Botao";
import Table from "../../components/Table";
import Title from "../../components/Title";
import useDataBase from "../../data/hook/useDataBase";
import { IconAdd, IconSearch } from "../../icons/Icons";
import styles from "../../styles/QuizList.module.css";
import route from 'next/router'

const QuizList = () => {
  const [data, setData] = useState<any>([]);
  const { list, create, deleteQuiz } = useDataBase();

  useEffect(() => {
    quizList()
  }, []);

  async function quizList() {
    const quiz = await list();
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
      <body className={styles.body}>
        <div className={styles.quiz}>
          <div className={styles.quizHeader}>
            <Title titulo="Lista de questionários" />
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
            {data.length ? 
             <Table data={data} deleteItem={deleteItem} />
            : ''}
        </div>
      </body>
    </>
  );
};

export default QuizList;
