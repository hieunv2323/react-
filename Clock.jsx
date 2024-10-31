import React from 'react'

export default class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }
    render(){
        return(
            <div>
                <hi>hello would</hi>
                <h2>it is {this.state.time}</h2>
            </div>
        )
    }
}