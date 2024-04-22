import { createContext, useState } from "react";
import { Quiz } from "../Quiz.model";

interface ITransferProps {
  nameTransfer?: string;
  durationTransfer?: number;
  questoes?: any;
  sendData?: (data: any) => void;
  clearList?: () => void;
  deleteItem?: (id: number) => void;
  onChangeName?: (name: string) => void;
  onChangeDuration?: (duration: number) => void;
}

interface QuizData {
  name
}
const TransferContext = createContext<ITransferProps>({});

export function DataTransferProvider(props) {
  const [questoes, setQuestoes] = useState<any[]>([]);
  const [nameTransfer, setName] = useState<any>('');
  const [durationTransfer, setDuration] = useState<number>(0);

  function sendData (questao: any){    
    setQuestoes([...questoes, questao]);
  };

  function onChangeName(name: string) {
    setName(name);
  }

  function onChangeDuration(duration: number) {
    setDuration(duration);
  }

  function clearList() {
      setQuestoes([]);
  }

  function deleteItem(id: number) {
    let newQuestions = questoes.filter(questao => questao.id !== id);
    setQuestoes(newQuestions);
  }
  
  return (
    <TransferContext.Provider
      value={{
        questoes,
        nameTransfer,
        durationTransfer,
        sendData,
        clearList,
        deleteItem,
        onChangeName,
        onChangeDuration
      }}
    >
      {props.children}
    </TransferContext.Provider>
  );
}

export default TransferContext;
