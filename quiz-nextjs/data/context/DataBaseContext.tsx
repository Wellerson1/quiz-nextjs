import { createContext } from "react";
import db from "../../firebase/config";
import QuestaoModel from "../../model/questao";
import { Quiz } from "../Quiz.model";

interface IDbContextProps {
  data?: any;
  create?: (quiz?: Quiz) => Promise<void>;
  update?: (id: number) => Promise<void>;
  list?: () => void;
  getQuizById?: (id: number) => void
  deleteQuiz?: (id: number) => Promise<void>;
}

const DbContext = createContext<IDbContextProps>({});

const create = async (quiz: Quiz) => {
  await db.collection("quiz").add(quiz);
};

const update = async (id: number) => {};

const deleteQuiz = async (quiz: any) => {
  console.log(quiz)
  await db.collection("quiz").doc(quiz._id).delete();
};

const list = async () => {
  const snapshot = await db.collection("quiz").get();
  console.log(snapshot.docs)
  const quiz = snapshot.docs.map(doc => (
    {_id: doc.id, ...doc.data()}
    ));
  return quiz;
};

const getQuizById = async (id: number) => {
  const snapshot = await db.collection("quiz").get();
  console.log(snapshot.docs)
  const quiz = snapshot.docs.map(doc => (
    {_id: doc.id, ...doc.data()}
    ));
  return quiz;
}

export function DataBaseProvider(props) {
  return (
    <DbContext.Provider
      value={{
        create,
        update,
        list,
        getQuizById,
        deleteQuiz,
      }}
    >
      {props.children}
    </DbContext.Provider>
  );
}

export default DbContext;
