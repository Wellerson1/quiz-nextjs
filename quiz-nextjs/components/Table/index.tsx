import { useState } from "react";
import { Quiz } from "../../data/Quiz.model";

interface IProps {
  data: Quiz[];
}

const Table = ({ data }: IProps) => {
  const [quizList, setData] = useState(data);

  function renderRow() {
    return data.map((quiz) => (
      <tr key={quiz.id}>
        <td>{quiz.id}</td>
        <td>{quiz.name}</td>
        <td>{quiz.countQuestion}</td>
      </tr>
    ));
  }

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Quantidade de questões</th>
        </tr>
      </thead>
      <tbody>{renderRow()}</tbody>
    </table>
  );
};

export default Table;
