import React from 'react'
import Esercizio from './Esercizio'

export default function Cardio() {
    return (
        <div>
            <div
                style={{
                    fontSize: '1.2em',
                    lineHeight: '1.15em',
                }}
            >
                Programma per <strong>esercizi di cardio</strong>:
                <ul>
                    <li>Nei giorni in cui NON si fa potenza</li>
                    <li>Totale di 150 min a settimana</li>
                    <li>
                        Stai facendo cardio quando la tua frequenza cardiaca è
                        105-115 battiti al minuto - oppure più semplicemente
                        quando hai fiatone e sudore
                    </li>
                </ul>
            </div>

            <Esercizio
                title='Esempio esercizio cardio: CORSA'
                youtubeUrl='https://www.youtube.com/embed/AY2OX1nzaXA'
            >
                <ul style={{ paddingLeft: '1em' }}>
                    <li>
                        30-45 minuti per sessione possono bastare, bisogna però
                        tenere un ritmo che porta ad avere fiatone e sudore
                    </li>
                    <li>
                        Correre è meglio che camminare perchè sollecita molto di
                        più le ossa (e i muscoli) delle gambe, che si rinforzano
                    </li>
                </ul>
            </Esercizio>
        </div>
    )
}
