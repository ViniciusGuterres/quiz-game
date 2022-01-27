import { useRouter } from 'next/router';
import Button from '../components/Button';
import Statistics from '../components/Statistics';

import style from '../styles/Result.module.css';

export default function Result() {
    const router = useRouter();

    const total = +router.query.total;
    const corrects = +router.query.corrects;
    const percents = Math.round((corrects / total) * 100);

    return (
        <div className={style.result}>
            <h1 className={style.title}>Resultado final</h1>

            <div className={style.statics}>
                <Statistics
                    value={total}
                    text='Perguntas'
                />

                <Statistics
                    value={corrects}
                    text='Acertos'
                    colorBg='#9CD2A4'
                />

                <Statistics
                    value={`${percents}%`}
                    text='Percentual'
                    colorBg='#DE6A33'
                />
            </div>

            <Button
                href='/'
                text='Tentar novamente'
            />
        </div>
    )
}