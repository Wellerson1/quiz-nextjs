import { createContext, useState } from "react";
import QuestaoModel from "../../model/questao";

interface ITransferProps {
  questoes?: any;
  sendData?: (data: any) => void;
  clearList?: () => void;

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
  
  return (
    <TransferContext.Provider
      value={{
        questoes,
        sendData,
        clearList
      }}
    >
      {props.children}
    </TransferContext.Provider>
  );
}

export default TransferContext;
