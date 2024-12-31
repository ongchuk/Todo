import { useQuery,gql,useLazyQuery, useMutation} from '@apollo/client'
import React, { useState } from 'react'







const QUERY_ALL_USERS = gql`
query  GetAllUser{
        users{
            id 
            name
            age
            username
            nationality 
        }
    }

`;
const QUERY_ALL_MOVIE = gql`
    query GetAllMovies{
        movies{
            name
            yearOfPublication
            isInTheater
        }
    }
`;
const GET_MOVIE_BY_NAME = gql`
query GetAllMoviesByName($name: String!){
    movie(name: $name){
        name 
        yearOfPublication

    }



} 
`;
const CREATE_USER_MUTATION = gql`
mutation CreateUser($input: CreateUserInput!){

    createUser(input: $input) {
        id
        name
    
}
}`

function DisplayData() {
    const {data, loading,refetch,error} = useQuery(QUERY_ALL_USERS);
    const {data:movieData} = useQuery(QUERY_ALL_MOVIE);

    const [movieSearch, setMovieSearch] = useState("")
    const [fetchMovie, {data:movieSearchData,error:movieError},] = useLazyQuery(GET_MOVIE_BY_NAME);


    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [nationality, setNationality] = useState("");

    const [createUser] = useMutation(CREATE_USER_MUTATION);

    if (loading){
        return <h1>Data is Loading.... </h1>
    }
    if (data){
        console.log(data)
    }
    if (error){
        console.log(error)
    }

   
    if (movieData){
        console.log(movieData)
    }
  return (
    
    <div>
        <div>
            
            <input type="text"  placeholder='Name 'onChange={(event ) => { setName(event.target.value)}}/>
            <input type="text"  placeholder='UserName ' onChange={(event) => {setUsername(event.target.value)}} />
            <input type="number"  placeholder='Age ' onChange={(event) => {setAge(event.target.value)}}/>
            <input type="text"  placeholder='Nationality' onChange={(event)=> {setNationality(event.target.value.toUpperCase())}}/>
            <button onClick={() => {
                createUser({
                    variables: {input: {name, age:Number(age), username, nationality}}
                });
                refetch();
            }}
            >
                Create User</button>
        </div>
        
        
        {data && data.users.map((user) => {
        return (
            <div>
                <h1>Name : {user.name}</h1>
                <h1>Age : {user.age}</h1>
                <h1>Username : {user.username}</h1>
               
            </div>
        )
    })}

    {movieData && movieData.movies.map ((movie) => {
        return (
           
                <h1>MovieName: {movie.name}</h1>
                
           
        )

        
    })}
    <div>
        <input
        type="text"
        placeholder="Enter movies name"
        onChange={(event) => setMovieSearch(event.target.value)}/>
        <button onClick={() => {
            fetchMovie({
                variable: {
                    name: movieSearch
                }
            })
        }}> Fetch data</button>
    </div>

    {movieSearchData && (
        <div>
        {" "}
        <h1>MovieName: {movieSearchData.movies.name}</h1>
        <h1>yearOfPublication: {movieSearchData.movies.yearOfPublication}</h1>
        </div>
    )}

    {movieError && <h1> There is error in fetching the data</h1>}

    
    
    </div>
  )
}

export default DisplayData