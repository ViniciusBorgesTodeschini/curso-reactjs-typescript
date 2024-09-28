import { useState, FormEvent } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

function App() {

  const [gasolinaInput, setGasolinaInput] = useState(0);
  const [alcoolInput, setAlcoolInput] = useState(0);
  const [info, setInfo] = useState<InfoProps>()

  function calcular(event: FormEvent) {
    event.preventDefault();

    let calculo = (alcoolInput / gasolinaInput);

    if (calculo <= 0.7) {
      setInfo({
        title: "Compensa usar Álcool",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      })
    } else {
      setInfo({
        title: "Compensa usar Gasolina",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      })
    }
  }

  function formatarMoeda(valor: number){
    let valorFormato = valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    });

    return valorFormato;
  }

  return (
    <>
      <div>
        <main className='container'>

          <img className='logo' src={logoImg} alt="Logo da calculadora de gasolina ou alcool" />

          <h1 className='title'>Qual a melhor opção?</h1>

          <form className='form' onSubmit={calcular}>
            <label htmlFor="">Álcool (preço por litro)</label>

            <input
              className='input'
              type="number"
              placeholder='4,90'
              min="1"
              step="0.01"
              required
              value={alcoolInput}
              onChange={(e) => setAlcoolInput(Number(e.target.value))}
            />

            <label htmlFor="">Gasolina (preço por litro)</label>

            <input
              className='input'
              type="number"
              placeholder='4,90'
              min="1"
              step="0.01"
              required
              value={gasolinaInput}
              onChange={(e) => setGasolinaInput(Number(e.target.value))}
            />

            <input className='button' type="submit"
              value="Calcular" />

          </form>

          {info && Object.keys(info).length > 0 && (
            <section className='result'>
              <h1 className='result-title'>{info.title}</h1>

              <span>Álcool: {info.alcool}</span>
              <span>Gasolina: {info.gasolina}</span>
            </section>
          )}

        </main>
      </div>
    </>
  )
}

export default App