import { useState } from "react";
import { Quiz } from "../../data/Quiz.model";
import styles from "../../styles/Table.module.css"
import ButtonIcon from "../ButtonIcon";
interface IProps {
  data: Quiz[];
  deleteItem: (item: any) => void
}

const Table = ({ data, deleteItem }: IProps) => {
  const [quizList, setData] = useState(data);

  function renderRow() {
    return data.map((quiz) => (
      <tr key={quiz.id}>
        <td className={styles.tableRow}>{quiz.id}</td>
        <td className={styles.tableRow}>{quiz.name}</td>
        <td className={styles.tableRow}>{quiz.countQuestion}</td>
        <td className={styles.tableRow}><ButtonIcon onClick={() => deleteItem(quiz)}/></td>
      </tr>
    ));
  }

  return (
    <table className={styles.table}>
      <thead >
        <tr className={styles.tableHeader}>
          <th className={styles.tableRow}>Id</th>
          <th className={styles.tableRow}>Nome</th>
          <th className={styles.tableRow}>Quantidade de questões</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{renderRow()}</tbody>
    </table>
  );
};

export default Table;
