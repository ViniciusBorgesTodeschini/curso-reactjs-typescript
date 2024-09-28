import { Link } from "react-router-dom"

export function Contato(){
    return(
        <div>
            <h1>Bem vindo ao contato!</h1>

            <br /><br />

            <Link to="/">Ir para home</Link>
            <Link to="/sobre">Sobre</Link>
        </div>
    )
}