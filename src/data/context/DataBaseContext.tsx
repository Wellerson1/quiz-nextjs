import { createContext } from "react";
import db from "../../firebase/config";
import QuestaoModel from "../../model/questao";
import Usuario from "../../model/Usuario";
import useAuth from "../hook/useAuth";
import { Quiz } from "../Quiz.model";

interface IDbContextProps {
  data?: any;
  create?: (quiz?: Quiz) => Promise<void>;
  update?: (id: number) => Promise<void>;
  list?: (usuario: Usuario) => void;
  getQuizAll?: () => void
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

const list = async (usuario: Usuario) => {
  if(usuario) {
    const snapshot = await db.collection("quiz").where("userId", '==', usuario?.uid).get();
    const quiz = snapshot.docs.map(doc => (
      {_id: doc.id, ...doc.data()}
      ));
    return quiz;
  }
};

const getQuizAll = async () => {
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
        getQuizAll,
        deleteQuiz,
      }}
    >
      {props.children}
    </DbContext.Provider>
  );
}

export default DbContext;
