import React, {Component} from "react"

class Word extends Component {
    render(){
        var myArray = ['January', 'February', 'March']; 
        var rand = myArray[(Math.random() * myArray.length) | 0]
        return(
            <div>{rand}</div>
        )
    }
}
export default Word

