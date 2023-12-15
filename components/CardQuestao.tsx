import styles from "../styles/CardQuestao.module.css";
import ButtonIcon from "./ButtonIcon";

interface CardQuestaoProps {
  texto: string;
  id: number;
  deleteItem?: (id: number) => void
}

export default function CardQuestao(props: CardQuestaoProps) {
  function deleteItem() {
    props.deleteItem(props.id)
  }
  return (
    <div className={styles.questao}>
      <span className={styles.texto}>{props.texto}</span>
      <ButtonIcon icon="delete" onClick={() => deleteItem()} />
    </div>
  );
}
