const {GraphQLObjectType,GraphQLInt,GraphQLString,GraphQLBoolean,GraphQLList}=require('graphql')

const LaunchType=new GraphQLObjectType({
    name:"launches",
    fields:()=>({
        flight_number:{type:GraphQLInt},
        mission_name:{type:GraphQLString},
        launch_year:{type:GraphQLString},
        launch_date_local:{type:GraphQLString},
        launch_success:{type:GraphQLBoolean},
        rocket:{type:RocketType}
    })
})

const RocketType=new GraphQLObjectType({
    name:"Rocket",
    fields:()=>({
        rocket_id:{type:GraphQLString},
        rocket_name:{type:GraphQLString},
        rocket_type:{type:GraphQLString}
    })
})

//root query

const RootQuery=new GraphQLObjectType({
    name:"RootQuery",
    fields:{
        launches:{
            type:GraphQLList(GraphQLList)
        }
    }
})