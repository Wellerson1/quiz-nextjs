
import Layout from '../components/template/Layout'
import QuizList from './QuizList'

export default function Home() {
  return (
        <Layout titulo="Cadastro de questionário" subtitulo="Listagem e cadastro de questionários. Clique que 'Criar' para adicionar um novo questionário">
          <QuizList/>
        </Layout>
  )
}
