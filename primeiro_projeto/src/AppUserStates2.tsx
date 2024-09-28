// import {Header} from './components/header'
// import {Aluno} from './components/aluno'
// import {Footer} from './components/footer'
import { useState } from "react";

interface InfoAlunoProps{
  nome: string;
  idade: string;
}

export default function App() {
  const [input, setInput] = useState("");
  const [idade, setIdade] = useState("");
  // const [aluno, setAluno] = useState("Sem nome");
  // const [alunoIdade, setAlunoIdade] = useState("");
  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>();
  const [contador, setContador] = useState(0);

  function mostrarAluno(){
    // setAluno(input);
    // setAlunoIdade(idade);
    setInfoAluno({
      nome: input,
      idade: idade,
    })
  }

  function adicionar(){
    setContador(valorAtual => valorAtual+1);
  }

  function diminuir(){
    if(contador === 0){
      return;
    }
    setContador(valorAtual => valorAtual-1);
  }

  return (
    // conhecendo components
    // <Header title='Alunos do React + TypeScript'/>
    // <Aluno nome="Vini" idade={28} />
    // <Aluno nome="Vini teste" idade={27} />
    // <Footer/>

    //conhecendo useStates
    <div>
      <h1>Conhecendo useState</h1>
      <input placeholder="Digite o nome" 
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />

      <br />
      <br />

    <input placeholder="Digite a idedade" 
      value={idade}
      onChange={(e) => setIdade(e.target.value)}
      />

      <br />
      <br />
      <button onClick={mostrarAluno}>Mostrar Aluno</button>

      <hr />
      <h3>Bem vindo: {infoAluno?.nome}</h3>
      <h4>Idade: {infoAluno?.idade}</h4>

      <br />
      <br />
      <h1>Contador de useState</h1>

      <button onClick={adicionar}>+</button> {contador} <button onClick={diminuir}>-</button>

    </div>
    )

}