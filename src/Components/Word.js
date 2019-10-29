import React, {Component} from "react"

const myArray = [
    "esplendor",
    "diciendo",
    "impredecible",
    "problema",
    "terreno",
    "instante",
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
        <div><h3>{this.state.randomItem}</h3></div>
      )
    }
  }
  export default Word;