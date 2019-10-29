import React, {Component} from "react"

class Word extends Component {
    state={
        randomItem:''
    }
  
    myArray = [
        "esplendor",
        "diciendo",
        "impredecible",
        "problema",
        "terreno",
        "instante",
    ];
  
    randomItemGenerator = () => (
        this.myArray[Math.floor(Math.random()*this.myArray.length)]
    )
  
    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({randomItem:this.randomItemGenerator()})
        }, 10000)
    }
    
    
  
    render(){
       return(
          <div><h3>{this.state.randomItem}</h3></div>
       )
    }
    
    
}
export default Word;

