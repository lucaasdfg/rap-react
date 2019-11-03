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
class Timer extends Component{
   
    state = {
        minutes: 5,
        seconds: 10,
        randomItem: ""
    }
    
    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({randomItem:randomItemGenerator()})
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
                    this.setState(({seconds}) => ({
                        seconds: 10
                    }))
                }
            }
            
        }, 1000)
        
    }
      
    render(){
        const {seconds} = this.state

        return(
            <div className="omega">
                { seconds === 0 ? <h1>finish</h1> : <h1>{seconds}</h1>}
            </div>
        )
    }
}
export default Timer