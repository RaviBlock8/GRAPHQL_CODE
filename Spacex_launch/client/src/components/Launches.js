import React, { Component } from 'react'
import gql from 'graphql-tag'
 import {Query} from 'react-apollo'

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
                            if(err) console.log(err)

                            return 'success'
                        }
                    }
                </Query>
            </div>
        )
    }
}

export default Launches
