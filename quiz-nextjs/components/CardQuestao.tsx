import styles from "../styles/CardQuestao.module.css";

interface CardQuestaoProps {
  texto: string;
}

export default function CardQuestao(props: CardQuestaoProps) {
  return (
    <div className={styles.questao}>
        <span className={styles.texto}>{props.texto}</span>
    </div>
  );
}
