import { createContext, useState } from "react";
import QuestaoModel from "../../model/questao";

interface ITransferProps {
  questoes?: any;
  sendData?: (data: any) => void;
  clearList?: () => void;
  deleteItem?: (id: number) => void;
}
const TransferContext = createContext<ITransferProps>({});

export function DataTransferProvider(props) {
  const [questoes, setQuestoes] = useState<any[]>([]);

  function sendData (questao: any){    
    setQuestoes([...questoes, questao]);
  };

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
        sendData,
        clearList,
        deleteItem
      }}
    >
      {props.children}
    </TransferContext.Provider>
  );
}

export default TransferContext;
