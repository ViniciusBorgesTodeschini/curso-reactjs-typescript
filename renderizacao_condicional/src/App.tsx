import { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

function App() {
  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: 'Motivação',
      frases: [
        'Motiv 1',
        'Motiv 2',
        'Motiv 3',
        'Motiv 4',
        'Motiv 5',
        'Motiv 6'
      ]
    },
    {
      id: 2,
      nome: 'Bem estar',
      frases: [
        'Estar 1',
        'Estar 2',
        'Estar 3'
      ]
    }
  ]

  function handleSwitchCategory(index: number){
    setCategoriaSelecionada(index);
  }

  function gerarFrase(){
  let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length);
setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`);

  }

  return (
    <div className='container'>
      <img className='logo' src={logoImg} alt="Logo frases" />

      <h2 className='title'>Categorias</h2>

      <section className='category-area'>
        {allFrases.map((item, index) => (
          <button className='category-button'
          key={item.id}
          style={{
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome? 2 : 0,
            borderColor: "#1fa4db"
          }}
          onClick={ () => handleSwitchCategory(index)}
          >{item.nome}</button>
        ))}
      </section>

      <button className='button-frase' onClick={gerarFrase}>Gerar frases</button>

      {textoFrase !== '' && <p className='textoFrase'>{textoFrase}</p>}


    </div>
  )
}

export default App
