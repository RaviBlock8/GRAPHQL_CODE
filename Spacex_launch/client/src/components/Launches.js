import React, { Component } from 'react'
import gql from 'graphql-tag'
 import {graphql} from 'react-apollo'
 import LaunchItem from './LaunchItem'

const LAUNCHES_QUERY=gql`
    query LaunchesQuery{
        launches{
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

class Launches extends Component {
    getData(){
        let data=this.props.data
        if(data.loading){
            return (<div>Loading the list</div>)
        }else{
            return data.launches.map((launch)=>{
                console.log(launch)
                return(<p>{launch.mission_name}</p>)
            })
        }
    }
    render() {
        console.log(this.props)
        return (
            <div style={{color:"white"}}>
                <h1>Launches</h1>
                {this.getData()}
            </div>
        )
    }
}

export default graphql(LAUNCHES_QUERY)(Launches)




