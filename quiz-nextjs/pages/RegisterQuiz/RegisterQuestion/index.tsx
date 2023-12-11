import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Botao from "../../../components/Botao";
import Input from "../../../components/Input";
import InputResposta from "../../../components/InputResposta";
import useDataBase from "../../../data/hook/useDataBase";
import useDataTrasnfer from "../../../data/hook/useDataTransfer";
import { Quiz } from "../../../data/Quiz.model";
import { IconCheck, IconDelete } from "../../../icons/Icons";
import QuestaoModel from "../../../model/questao";
import RespostaModel from "../../../model/resposta";
import styles from "../../../styles/RegisterQuiz.module.css";

interface IProps {
  save: (quiz: Quiz) => Promise<void>;
  cancel: () => void;
}

export function RegisterQuestoes({ save, cancel }: IProps) {
  const [enunciado, setEnunciado] = useState();
  const [respCerta, setRespCerta] = useState();
  const [resp2, setResp2] = useState();
  const [resp3, setResp3] = useState();
  const [resp4, setResp4] = useState();
  const router = useRouter();
  const { questoes, sendData } = useDataTrasnfer();
  async function saveQuiz() {
    const idAleatorio = Math.floor(Math.random() * (100 - 1)) + 1;
    const questao: QuestaoModel = new QuestaoModel(idAleatorio, enunciado, [
      RespostaModel.errada(resp2),
      RespostaModel.errada(resp3),
      RespostaModel.certa(respCerta),
      RespostaModel.errada(resp4),
    ]);
    const objetoSerializado = JSON.parse(JSON.stringify(questoes));

    sendData(questao.toObject());
    router.push({
      pathname: "/cadastro",
    });
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
