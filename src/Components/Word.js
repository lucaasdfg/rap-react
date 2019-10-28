import React, {Component} from "react"

class Word extends Component {
    state={
        randomItem:''
    }
  
    myArray = [
        "Apples",
        "Bananas",
        "Pears"
    ];
  
    randomItemGenerator = () => (
        this.myArray[Math.floor(Math.random()*this.myArray.length)]
    )
  
    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({randomItem:this.randomItemGenerator()})
        }, 10000)
    }
    componentWillUnmount(){
        this.interval && clearInterval(this.interval)
    }
  
    render(){
       return(
          <div>{this.state.randomItem}</div>
       )
    }
    
    
}
export default Word

