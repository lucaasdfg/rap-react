import React, {Component} from "react"

class Timer extends Component{
    state = {
        minutes: 5,
        seconds: 0,
        randomItem: ""
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
        
        this.myInterval = setInterval(()=> {
            const {seconds, minutes} = this.state

            if(seconds > 0){
                this.setState(({seconds}) => ({
                    seconds: seconds - 1
                }))
            }
            if(seconds === 0){
                if(minutes === 0){
                    clearInterval(this.myInterval)
                }else {
                    this.setState(({minutes}) => ({
                        minutes: minutes-1,
                        seconds: 59
                    }))
                }
            }
            
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.myInterval)
        this.interval = setInterval(() => {
            this.setState({randomItem:this.randomItemGenerator()})
        }, 5000)
    }
    render(){
        const {minutes, seconds} = this.state

        return(
            <div>
                {minutes === 0 && seconds === 0 ? <h1>finish</h1> : <h1>Time remaining: {minutes}:{seconds}</h1>}
                <h3>{this.state.randomItem}</h3>
            </div>
        )
    }
}
export default Timer