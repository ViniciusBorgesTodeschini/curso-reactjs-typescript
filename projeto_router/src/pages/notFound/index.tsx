import { Link } from "react-router-dom"

export function NotFound(){
    return(
        <div>
            <h1>Pagina não encontrada!</h1>

            <br /><br />

            <Link to="/">Ir para home</Link>
        </div>
    )
}