import React from 'react'
import Esercizio from './Esercizio'

export default function Potenza() {
    return (
        <div>
            <div
                style={{
                    fontSize: '1.2em',
                }}
            >
                Programma per <strong>esercizi di potenza</strong>:
                <ul>
                    <li>3 giorni a settimana</li>
                    <li>
                        10 ripetute max, per 4 volte con pause da 90 sec ogni
                        volta
                    </li>
                    <li>
                        La seconda settimana, i pesi aumentano e le ripetute max
                        sono 8
                    </li>
                    <li>
                        Dalla terza settimana in poi, i pesi aumentano e le
                        ripetute max sono 6
                    </li>
                </ul>
            </div>

            <Esercizio
                title='1. Esercizio di potenza: STACCHI'
                youtubeUrl='https://www.youtube.com/embed/Xe02IVTp54w'
            >
                <ul style={{ paddingLeft: '1em' }}>
                    <li>La sbarra ad altezza appena sopra le ginocchia</li>
                    <li>
                        I piedi ben posizionati perpendicolarmente sotto la
                        barra
                    </li>
                    <li>Schiena dritta fin dall'inizio</li>
                    <li>Arrivare il più alto possibile con busto e spalle</li>
                    <li>Nel video stavi usando 70 kg</li>
                    <li>Le sbarre vuote pesano 10 o 15 kg</li>
                </ul>
            </Esercizio>

            <Esercizio
                title='2. Esercizio di potenza: PANCA PIANA'
                youtubeUrl='https://www.youtube.com/embed/ElgXvgs4Rao'
            >
                <ul style={{ paddingLeft: '1em' }}>
                    <li>
                        Impugnare bene la sbarra, con le mani sulla parte
                        zigrinata ed alla stessa distanza
                    </li>
                    <li>
                        L'esercizio va fatto spingendo la sbarra sopra il petto
                        - non la gola
                    </li>
                    <li>Attenzione a quando si rimette la sbarra a posto</li>
                    <li>
                        Se si resta incastrati, far scivolare la sbarra sulla
                        pancia lentamente
                    </li>
                    <li>Nel video stavi usando 39 kg</li>
                </ul>
            </Esercizio>

            <Esercizio
                title='3. Esercizio di potenza: ALZATE ARTI SUPERIORI'
                youtubeUrl='https://www.youtube.com/embed/4m0HHWh_IR8'
            >
                <ul style={{ paddingLeft: '1em' }}>
                    <li>
                        Lavorare su un braccio per volta e usare pesi diversi
                        per braccia diverse, perchè devi ancora recuperare la
                        piena forza nella spalla infortunata
                    </li>
                    <li>
                        Tieni la schiena dritta senza incurvarla indietro e il
                        braccio ben allineato alla spalla
                    </li>
                    <li>
                        Nel video stavi usando 8 kg sul braccio sinistro e 4 kg
                        sul destro
                    </li>
                </ul>
            </Esercizio>

            <Esercizio
                title='4. Esercizio di potenza: BICIPITI'
                youtubeUrl='https://www.youtube.com/embed/fFTRb8a4wv0'
            >
                <ul style={{ paddingLeft: '1em' }}>
                    <li>
                        Lavorare su un braccio per volta e usare pesi diversi
                        per braccia diverse, perchè devi ancora recuperare la
                        piena forza nella spalla infortunata
                    </li>
                    <li>
                        Tieni la schiena dritta e ferma senza incurvarla
                        indietro o avanti e senza pendolare
                    </li>
                    <li>
                        Devono lavorare sia le braccia sia gli addominali che
                        tengono fermo il busto
                    </li>
                </ul>
            </Esercizio>
        </div>
    )
}
