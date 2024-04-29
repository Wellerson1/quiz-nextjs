import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Botao from "../../../components/Botao";
import Input from "../../../components/Input";
import InputResposta from "../../../components/InputResposta";
import Title from "../../../components/Title";
import useDataBase from "../../../data/hook/useDataBase";
import useDataTrasnfer from "../../../data/hook/useDataTransfer";
import { Quiz } from "../../../data/Quiz.model";
import { embaralhar } from "../../../functions/arrays";
import { IconCheck, IconDelete } from "../../../icons/Icons";
import QuestaoModel from "../../../model/questao";
import RespostaModel from "../../../model/resposta";
import styles from "../../../styles/RegisterQuiz.module.css";

interface IProps {
  save: (quiz: Quiz) => Promise<void>;
  cancel: () => void;
}

export default function RegisterQuestoes({ save, cancel }: IProps) {
  const [enunciado, setEnunciado] = useState();
  const [respCerta, setRespCerta] = useState();
  const [resp2, setResp2] = useState();
  const [resp3, setResp3] = useState();
  const [resp4, setResp4] = useState();
  const router = useRouter();
  const [erro, setErro] = useState("");
  const { questoes, sendData } = useDataTrasnfer();

  async function saveQuiz() {
    if(validateForm()) {
      const idAleatorio = Math.floor(Math.random() * (100 - 1)) + 1;
      const questao: QuestaoModel = new QuestaoModel(idAleatorio, enunciado, embaralhar([
        RespostaModel.errada(resp2),
        RespostaModel.errada(resp3),
        RespostaModel.certa(respCerta),
        RespostaModel.errada(resp4),
      ]));
  
      sendData(questao.toObject());
      router.push({
        pathname: "/cadastro",
      });
    }
  }

  async function handleError(message: string, tempo) {
    setErro(message);
    setTimeout(() => setErro(null), tempo * 1000);
  }

  function validateForm() {
    if (!enunciado) {
      handleError("O enunciado é obrigatória", 3);
      return false;
    }

    if(!(resp2 && respCerta && resp3 && resp4) ) {
      handleError("Informe todas as respstas", 3);
      return false;
    }

    return true;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.resgisterQuiz}>
          <Input
            tipo="text"
            texto={`Enunciado`}
            valor={enunciado}
            valorMudou={setEnunciado}
          />
          <InputResposta
            tipo="text"
            texto={`Resposta Certa`}
            valor={respCerta}
            respostaCerta
            valorMudou={setRespCerta}
          />
          <InputResposta
            tipo="text"
            texto={`Resposta 2`}
            valor={resp2}
            respostaCerta={false}
            valorMudou={setResp2}
          />
          <InputResposta
            tipo="text"
            texto={`Resposta 3`}
            valor={resp3}
            valorMudou={setResp3}
          />
          <InputResposta
            tipo="text"
            texto={`Resposta 4`}
            valor={resp4}
            valorMudou={setResp4}
          />
          {erro ? (
            <div className={styles.erro}>
              <span>{erro}</span>
            </div>
          ) : (
            ""
          )}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Botao texto="Salvar" icon={IconCheck} onClick={() => saveQuiz()} />
            <Botao
              texto="Cancelar"
              danger
              icon={IconDelete}
              onClick={() => cancel()}
            />
          </div>
        </div>
      </div>
    </>
  );
}
