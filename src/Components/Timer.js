import React, {Component} from "react"

class Timer extends Component{
    state = {
        minutes: 5,
        seconds: 10,
        randomItem: ""
    }
    randomItemGenerator = () => (
        this.myArray[Math.floor(Math.random()*this.myArray.length)]
    )
    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({randomItem:this.randomItemGenerator()})
        }, 10000)
        
        this.myInterval = setInterval(()=> {
            const {seconds, minutes} = this.state

            if(seconds > 1){
                this.setState(({seconds}) => ({
                    seconds: seconds - 1
                }))
            }
            if(seconds === 1){
                if(minutes === 0){
                    clearInterval(this.myInterval)
                }else {
                    this.setState(({minutes}) => ({
                        minutes: minutes-1,
                        seconds: 10
                    }))
                }
            }
            
        }, 1000)
        
    }
    myArray = [
        "esplendor",
        "diciendo",
        "impredecible",
        "problema",
        "terreno",
        "instante",
    ];
  
    

    
    
    render(){
        const {minutes, seconds} = this.state

        return(
            <div>
                {minutes === 0 && seconds === 0 ? <h1>finish</h1> : <h1>{seconds}</h1>}
                <h2>{this.state.randomItem}</h2>
            </div>
        )
    }
}
export default Timer