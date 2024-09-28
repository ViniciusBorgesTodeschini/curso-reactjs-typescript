import { Link } from "react-router-dom"

export function Home() {
    return (
        <div>

            <h1>Bem vindo a home!</h1>
            <span>Essa é a minha primeira pagina de navegação</span>

            <br /><br />

            <Link to="/sobre">Sobre</Link>
             <br />
            <Link to="/contato">Contato</Link>
        </div>
    )
}