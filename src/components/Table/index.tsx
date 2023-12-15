import { useState } from "react";
import { Quiz } from "../../data/Quiz.model";
import styles from "../../styles/Table.module.css";
import ButtonIcon from "../ButtonIcon";
import copy from 'clipboard-copy';

interface IProps {
  data: Quiz[];
  deleteItem: (item: any) => void;
}

const Table = ({ data, deleteItem }: IProps) => {
  const [quizList, setData] = useState(data);

  function copyLink(id: number) {
    copy(`${window.origin}/${id}`)
  }

  function renderRow() {
    return data.map((quiz) => (
      <tr key={quiz.id}>
        <td className={styles.tableRow}>{quiz.id}</td>
        <td className={styles.tableRow}>{quiz.name}</td>
        <td className={styles.tableRow}>{quiz.countQuestion}</td>
        <td className={styles.tableRow}>
          <div className={styles.tableButtons}>
            <ButtonIcon icon="copy" onClick={() => copyLink(quiz.id)} />
            <ButtonIcon icon="edit" onClick={() => copyLink(quiz.id)} />
            <ButtonIcon icon="delete" onClick={() => deleteItem(quiz)} />
          </div>
        </td>
      </tr>
    ));
  }

  return (
    <table className={styles.table}>
      <thead>
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
