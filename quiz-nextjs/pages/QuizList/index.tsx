import { useEffect, useState } from "react"
import Botao from "../../components/Botao"
import Table from "../../components/Table"
import useDataBase from "../../data/hook/useDataBase"
import { Quiz } from "../../data/Quiz.model"

const QuizList = () => {
    const [data, setData] = useState<any>([])
    const {list, create} = useDataBase();
    
    async function quizList() {
        const quiz = await list();
        setData(quiz);
    }

    async function criar() {
        await create();
    }

    return <>
        <Table data={data}/>
        <Botao texto='Consultar' onClick={() => quizList()}/> 
        <Botao texto='Criar' onClick={() => create()}/> 

    </>
}

export default QuizList

