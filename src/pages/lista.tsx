import Formulario from "../components/Formulario";
import { AuthProvider } from "../data/context/AuthContext";
import { DataBaseProvider } from "../data/context/DataBaseContext";
import { BASE_URL } from "../functions/constantes";
import QuestaoModel from "../model/questao";
import styles from "../styles/Cadastro.module.css"
import QuizList from "./QuizList";

export default function Lista() {
    return (
        <DataBaseProvider>
            <AuthProvider>
                <QuizList />
            </AuthProvider>
        </DataBaseProvider>
    )
}