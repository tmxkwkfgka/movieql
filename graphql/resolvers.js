import {getMovies, getById, addMovie, deleteMovie, suggestions} from './db'

let nicol = {
    name: "nicol",
    age:18,
    gender: "female"
}



const resolvers = {
    Query :{
         people:()=>people,

         person:(_, {id}) => getById(id),
         movies: (_, {limit, rating})=>getMovies(limit, rating),
         suggestions: (_, {id})=>suggestions(id)
        
    },
    Mutation:{
        addMovie:(_, {name, score})=> addMovie(name, score),
        deleteMovie: (_, {id})=> deleteMovie(id)
    }
}

export default resolvers;