import Link from "next/link";
import { IconDelete } from "../icons/Icons";
import styles from "../styles/Botao.module.css";

interface BotaoProps {
  texto?: string;
  href?: string;
  onClick?: (e) => void;
}

export default function ButtonIcon(props: BotaoProps) {
  function renderButton() {
    return (
      <a className={styles.buttonIcon} onClick={props.onClick}>
        {IconDelete}
      </a>
    );
  }

  return props.href ? (
    <Link href={props.href}>{renderButton()}</Link>
  ) : (
    renderButton()
  );
}
