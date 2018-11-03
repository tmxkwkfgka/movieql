const people = [
    {
        id: 1,
        name: "nicol",
        age:18,
        gender: "female"
    },
    {
        id: 2,
        name: "nicosdl",
        age:184,
        gender: "female"
    },
    {
        id: 3,
        name: "shcol",
        age:11,
        gender: "male"
    },
    {
        id: 4,
        name: "jon",
        age:66,
        gender: "female"
    }

]

let movies  = [
    {
        id: 0,
        name: "star wars",
        score: 1
    },
    {
        id: 1,
        name: "dfdf wars",
        score: 8
    },
    {
        id: 2,
        name: "gdsgsagsd",
        score: 99
    },
    {
        id: 3,
        name: "forest gump",
        score: 2
    },
    {
        id: 4,
        name: "between",
        score: 32
    },
    {
        id: 5,
        name: "how close",
        score: 23
    }

]

import fetch from 'node-fetch';
const API_URL = "https://yts.am/api/v2/list_movies.json?" //?limit=50&minimum_rating=9"
const BASE_URL = "https://yts.am/api/v2/";
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;
export const getMovies = (limit, rating)=>{
   
    let REQUEST_URL = API_URL;
    if(limit > 0)
        REQUEST_URL+=`limit=${limit}` 
    
    if(rating > 0)
        REQUEST_URL += `&minimum_rating=${rating}`
    
    return fetch(REQUEST_URL)
    .then(res=>res.json())
    .then(json=>json.data.movies)

}

export const suggestions  = (id)=>{
    return fetch(MOVIE_SUGGESTIONS_URL + "?movie_id=" + id.toString())
    .then(res=>res.json())
    .then(json => json.data.movies)


}
export const getById = id=>{
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0]
}

export const deleteMovie = (id) =>{
    const cleanedMovies  = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies  = cleanedMovies;
        return true;
    }else{
        return false;
    }

}


// export const getMovies  = ()=>movies;

export const addMovie = (name, score) =>{
    const newMovie = {
        id: `${movies.length +1}`,
        name,
        score
    }
    movies.push(newMovie);
    return newMovie;

}


