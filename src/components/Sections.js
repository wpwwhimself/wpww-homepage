import { ClickTile } from "./ClickTile";

export function Intro({setPage}){
    /**
     * Cześć, jestem Wojtek, lubię czereśnie
     * 
     * kafelki do wyboru
     * * programista
     * * muzyk
     */
    return(
        <section>
            <p>Cześć, jestem Wojtek</p>
            <div className="grid-2">
                <ClickTile icon="keyboard" label="Programista"
                    onClick={() => setPage("programista")} />
                <ClickTile icon="music" label="Muzyk" />
            </div>
        </section>
    );
}

export function Programista(){
    /**
     * Doświadczenie zawodowe
     * 
     * Znajomość języków
     * 
     * Moje projekty
     * * ta strona
     * * Muzyka Szyta Na Miarę
     * * Sous-chef
     * * Projekt Organista
     * * Brzoskwinia🚧
     * * Gruszka
     */
    return(
        <section>
            <p>Jestem programistą, ho ho</p>
        </section>
    );
}

export function Muzyk(){
    /**
     * Background nauki
     * 
     * Zespoły
     * 
     * Usługi
     * * Muzyka Szyta Na Miarę
     * 
     * Moja twórczość
     * * brzoskwinia
     */
}