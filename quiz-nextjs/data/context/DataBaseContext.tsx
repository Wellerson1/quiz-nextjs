import { createContext } from "react";
import db from "../../firebase/config";
import QuestaoModel from "../../model/questao";
import { Quiz } from "../Quiz.model";

interface IDbContextProps {
  data?: any;
  create?: (quiz?: Quiz) => Promise<void>;
  update?: (id: number) => Promise<void>;
  list?: () => void;
  deleteQuiz?: (id: number) => Promise<void>;
}

const DbContext = createContext<IDbContextProps>({});

const create = async (quiz: Quiz) => {
  quiz = {
    id: "1",
    name: "Programação",
    countQuestion: 12,
  };
  await db.collection("quiz").add(quiz);
};

const update = async (id: number) => {};

const deleteQuiz = async (id: number) => {};

const list = async () => {
  const snapshot = await db.collection("quiz").get();
  const quiz = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
  return quiz;
};

export function DataBaseProvider(props) {
  return (
    <DbContext.Provider
      value={{
        create,
        update,
        list,
        deleteQuiz,
      }}
    >
      {props.children}
    </DbContext.Provider>
  );
}

export default DbContext;
