import { SERVER_PROPS_ID } from 'next/dist/shared/lib/constants'
import Link from 'next/link'
import styles from '../styles/Botao.module.css'

interface BotaoProps {
    texto: string
    href?: string
    onClick?: (e) => void
}

export default function Botao(props: BotaoProps) {

    function renderButton() {
        return (
            <button className={styles.botao}
                    onClick={props.onClick}>
                    {props.texto}
            </button> )
    }

    return props.href ? (
        <Link href={props.href}>
            {renderButton()}
        </Link>
    ) : renderButton()

}