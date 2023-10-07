import Formulario from "../components/Formulario";
import { DataBaseProvider } from "../data/context/DataBaseContext";
import { BASE_URL } from "../functions/constantes";
import QuestaoModel from "../model/questao";
import styles from "../styles/Cadastro.module.css"
import QuizList from "./QuizList";

export default function Lista() {

    async function enviarQuestao(questao: QuestaoModel) {

        console.log(questao)

        console.log(JSON.stringify(questao.toObject()))
        console.log(questao.toObject())

        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(questao.toObject()),
            };


        await fetch(`${BASE_URL}/questao`, options)
            .then(res => {
                console.log(res)
            })

    }

    return (
        <DataBaseProvider>
            <QuizList />
        </DataBaseProvider>
    )
}