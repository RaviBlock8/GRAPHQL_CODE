import React, { Component } from 'react'

export default class LaunchItem extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h2>{this.props.flight_number}</h2>
                
            </div>
        )
    }
}
