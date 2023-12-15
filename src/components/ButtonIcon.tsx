import Link from "next/link";
import { IconDelete, IconEdit, IconLink } from "../icons/Icons";
import styles from "../styles/Botao.module.css";

interface BotaoProps {
  texto?: string;
  href?: string;
  icon: "delete" | "copy" | "edit";
  onClick?: (e) => void;
}

export default function ButtonIcon(props: BotaoProps) {
  function iconColor() {
    return props.icon === "delete"
      ? styles.buttonIconDelete
      : styles.buttonIconEdit;
  }

  function renderButton() {
    return (
      <a className={iconColor()} onClick={props.onClick}>
        {props.icon === "copy"
          ? IconLink
          : props.icon === "delete"
          ? IconDelete
          : props.icon === "edit"
          ? IconEdit
          : ""}
      </a>
    );
  }

  return props.href ? (
    <Link href={props.href}>{renderButton()}</Link>
  ) : (
    renderButton()
  );
}
