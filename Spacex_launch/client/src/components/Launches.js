import React, { Component } from 'react'
import gql from 'graphql-tag'
 import {Query} from 'react-apollo'
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
    render() {
        return (
            <div>
                <h1>Launches</h1>
                <Query query={LAUNCHES_QUERY}>
                    {
                        ({load,err,data})=>{
                            if(load) return <h4>Loading</h4>
                            if(err){
                                console.log(err)
                            }else{
                                //it is printing an object with property launches
                                //but when i try to access launches
                                //it says that cannot read property of undefined
                                console.log(data)
                                return `sucess`
                            } 

                            
                        }
                    }
                </Query>
            </div>
        )
    }
}

export default Launches




