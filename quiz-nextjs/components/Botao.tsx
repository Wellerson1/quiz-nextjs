import { SERVER_PROPS_ID } from 'next/dist/shared/lib/constants'
import Link from 'next/link'
import { IconAdd } from '../icons/Icons'
import styles from '../styles/Botao.module.css'

interface BotaoProps {
    texto: string
    href?: string
    icon?: any
    secondary?: boolean
    danger?: boolean
    onClick?: (e) => void
}

export default function Botao(props: BotaoProps) {

    function renderButton() {
        return (
            <button className={props.secondary ? styles.botaoSecondary :
                               props.danger ? styles.botaoDanger : styles.botao}
                    onClick={props.onClick}>
                    <span className={styles.icon}>
                        {props.icon}
                    </span>    
                    {props.texto}
            </button> )
    }

    return props.href ? (
        <Link href={props.href}>
            {renderButton()}
        </Link>
    ) : renderButton()

}