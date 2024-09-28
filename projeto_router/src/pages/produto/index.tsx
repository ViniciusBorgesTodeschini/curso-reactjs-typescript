import { Link,useParams } from "react-router-dom"

export function Produto(){
    const {id} = useParams();
    return(
        <div>
            <h1>Bem vindo ao produto {id}!</h1>

            <br /><br />

            <Link to="/">Ir para home</Link>
            <br />
            <Link to="/sobre">Sobre</Link>
        </div>
    )
}