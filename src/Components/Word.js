import React from "react"

const myArray = [
    "siempre",
    "muerte",
    "teoría",
    "problema",
    "perplejo",
    "instante",
    "presente",
    "antes",
    "martes",
    "experimento",
    "traidor",
    "voltaje",
    "volumen",
    "rapido",
    "quemado",
    "aprendiendo",
    "practica",
    "campeón",
    "malo",
    "helado",
    "tranquilo",
    "preparado",
    "atento",
    "olvidado",
    "frecuente",
    "mente",
    "demente",
    "acelerado",
    "muchacho",
    "elevado",
    "catapulta",
    "monstruo"
]
  
  const randomItemGenerator = () => (
    myArray[Math.floor(Math.random() * myArray.length)]
  )
  
  class Word extends React.Component {
    state = {
      randomItem: randomItemGenerator()
    }
  
    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState({
          randomItem: randomItemGenerator()
        })
      }, 10000)
    }
    
    componentWillUnmount() { // clear the interval when the component is unmounted
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div className="alpha"><h3>{this.state.randomItem}</h3>
        
        </div>
      )
    }
  }
  export default Word;