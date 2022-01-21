import Link from 'next/link';
import style from '../styles/Button.module.css';

interface ButtonProps {
    text: string,
    href?: string,
    onClick?: (evt: any) => void
}

export default function Button(props: ButtonProps) {

    function renderButton() {
        return (
            <button
                className={style.button}
                onClick={props.onClick}
            >
                {props.text}
            </button>
        )
    }

    return (
        <>
            {
                props.href ?
                    <Link href={props.href}>
                        {renderButton()}
                    </Link>
                    :
                    renderButton()
            }
        </>
    )
}