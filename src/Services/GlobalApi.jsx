// import axios from "axios";

// const movieBaseUrl="https://api.themoviedb.org/3"
// const api_key='b028b3d15bf14cc92df9158196ac407f'

// const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=b028b3d15bf14cc92df9158196ac407f';

// //https://api.themoviedb.org/3/trending/all/day?api_key=b028b3d15bf14cc92df9158196ac407f
// const getTrendingVideos=axios.get(movieBaseUrl+
//     "/trending/all/day?api_key="+api_key);
//     const getMovieByGenreId=(id)=>
//     axios.get(movieByGenreBaseURL+"&with_genres="+id)

// export default{
//     getTrendingVideos,
//     getMovieByGenreId
// }


import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = 'b028b3d15bf14cc92df9158196ac407f';

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=b028b3d15bf14cc92df9158196ac407f';

// Define getTrendingVideos as a function that returns the API call promise.
const getTrendingVideos = () => 
    axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);

// This function is already correctly defined.
const getMovieByGenreId = (id) =>
    axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
    getTrendingVideos,
    getMovieByGenreId
};